module.exports.iniciaChat = function(application, req, res){

    var dadosForm = req.body;
    console.log(dadosForm);
    res.render('chat');
}