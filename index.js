const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(loggerMiddleware);

// 静的ファイルの提供とキャッシュの有効化
app.use(express.static('public', { maxAge: 86400000 }));

// test-imageリクエスト
app.get('/test-image', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/images/test.png'));
});


app.get('/', (req, res) => {
  res.send({
    msg:'GET request'
  });
});

// POSTリクエスト
app.post('/', (req, res) => {
  res.send({
    msg:'POST request'
  });
});

// PUTリクエスト
app.put('/:id', (req, res) => {
  res.send({
    id: req.params.id,
    msg:'PUT request'
  });
});
app.get('/', (req, res) => {
  res.send('Hello World!松江高専い')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
