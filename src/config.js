global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à Node Store!';

module.exports = {
    connectionString: 'mongodb://agnis:agnis10@balta-shard-00-00-kwtej.azure.mongodb.net:27017,balta-shard-00-01-kwtej.azure.mongodb.net:27017,balta-shard-00-02-kwtej.azure.mongodb.net:27017/ndstr?ssl=true&replicaSet=Balta-shard-0&authSource=admin&retryWrites=true',
    sendgridKey: 'Chave ',
    containerConnectionString: 'DefaultEndpointsProtocol=https;AccountName=nodestrbalta;AccountKey=rBk+S3ZuuvamXpgzdF/qB0ANh2ZfZKYkOubKf6N41a0wxRs8d7kfOqMV6Vwqf5dwEqZkbSHFkOkBmtkpcvyPBQ==;EndpointSuffix=core.windows.net'
}