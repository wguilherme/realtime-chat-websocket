module.exports.iniciaChat = function(application, req, res){

    var dadosForm = req.body;

    req.assert('apelido', 'O campo Nome/Apelido é obrigatório').notEmpty();
    req.assert('apelido', 'O campo Nome/Apelido precisa ter entre 3 e 15 caracteres').len(3, 15)

    var errors = req.validationErrors();

    if(errors){
        res.render('index', { validacao : errors })
        return;
    }

    application.get('io').emit(
        'msgParaClient',
        'Teste'
        )

    console.log(dadosForm);
    res.render('chat');
}