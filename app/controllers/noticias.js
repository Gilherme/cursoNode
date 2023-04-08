
module.exports.noticias = function(app, req, res){
   // essa variavel faz conexao com o BD, a partir do app que foi passado como parametro podemos usar a dbConnection executa-lo
   let connection = app.config.dbConnection();
   let noticiasModel = new app.app.models.NoticiasDAO(connection);

   noticiasModel.getNoticias((error, result) => {
       res.render("noticias/noticias", {noticias: result});
   });
}

module.exports.noticia = function(app, req, res){
  let connection = app.config.dbConnection();
  let noticiasModel = new app.app.models.NoticiasDAO(connection);
  let id_noticia = req.query

  noticiasModel.getNoticia( id_noticia,(error, result) => {
      res.render('noticias/noticia', { noticia: result });
  });
}
