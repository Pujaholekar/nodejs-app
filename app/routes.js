module.exports = function(app) {
    app.get('/', function(req, res){
        res.render('index'); // index view file is rendered when HTTP GET '/' called
    });
    app.get('/health', (req, res) => {
  res.sendStatus(200);
});

}
