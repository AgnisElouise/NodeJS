'use strict';

const ValidationContract = require('../validator/fluent-validator');
const repository = require('../repositories/customer-repository');
const md5 = require('md5');

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3 , 'O titulo deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email,'E-mail inválido!');
    contract.hasMinLen(req.body.password, 6 , 'A Senha deve conter pelo menos 6 caracteres');

    //Se os dados forem inválidos
    if (!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }    
};