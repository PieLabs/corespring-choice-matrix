const polyserve = require('polyserve');

const app = polyserve.makeApp({
  root: __dirname,
  componentDir: __dirname + '/bower_components',
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`app listening on port ${port}!`);
});


