Router.route('/', function () {
  this.render('navbar');
});
Router.route('/footer', function () {
  this.render('footer', {
  });
});
Router.route('/home', function () {
  this.render('home', {
  });
});
Router.route('/gk', function () {
  this.render('gk', {
  });
});
Router.route('/maths', function () {
  this.render('maths', {
  });
});
Router.route('/english', function () {
  this.render('english', {
  });
});
Router.route('/reasoning', function () {
  this.render('reasoning', {
  });
});
