const express = require('express')
const app = express()
const path = require('path')

let options = {
    setHeaders: function (res, path, stat) {
      res.set('Access-Control-Allow-Origin', '*')
    }
  }
app.use('/api', express.static('public',options));


app.all('*', function(req, res, next) {
    console.log(req.path)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/api/news.json',)
app.get('/', (req,res) => {
    res.send('首页')
})
app.listen(4000)