var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');
var breakdown_calendar = require('./routes/breakdown_calendar');
var losttime_calendar = require('./routes/losttime_calendar');
var plantdowntime_2011_2016 = require('./routes/plantdowntime_2011_2016');
var plantvsarea = require('./routes/plantvsarea');
var orgchart = require('./routes/orgchart');
var monthlosttime = require('./routes/monthlosttime');
var wordtree = require('./routes/wordtree');
var searchui = require('./routes/searchui');
var lucene = require('./routes/lucene');
var display = require('./routes/display');
var record = require('./routes/record');
var healthcheck = require('./routes/healthcheck');
var breakdown_analyse = require('./routes/breakdown_analyse');
var health_variety_report = require('./routes/health_variety_report');
var usage_analyse = require('./routes/usage_analyse');



//var exphbs  = require('express-handlebars');
var hbs = require('hbs'); 
var app = express();


////var exphbs  = require('express-handlebars');
//var hbs = require('hbs'); 
//var app = express();
//


//// view engine setup
//// set up handlebars view engine
//var hbs = registerHelper( 'section', function(name, options){
//            if(!this._sections) this._sections = {};
//            this._sections[name] = options.fn(this);
//            return null;
//        });


//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');
//
//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

 app.all('*',function (req, res, next) {
	    console.log('allow origin');
             res.header('Access-Control-Allow-Origin', '*');
             if (req.method == 'OPTIONS') {
                 res.send(200);
              } else {
                 next();
              }
         });


app.use('/', routes);
app.use('/users', users);
app.use('/test', test);
app.use('/breakdown_calendar', breakdown_calendar);
app.use('/losttime_calendar', losttime_calendar);
app.use('/plantdowntime_2011_2016',plantdowntime_2011_2016);
app.use('/plantvsarea',plantvsarea);
app.use('/orgchart',orgchart);
app.use('/monthlosttime',monthlosttime);
app.use('/wordtree',wordtree);
app.use('/searchui',searchui);
app.use('/lucene',lucene);
app.use('/display',display);
app.use('/record',record);
app.use('/healthcheck',healthcheck);
app.use('/breakdown_analyse' , breakdown_analyse);
app.use('/health_variety_report' , health_variety_report);
app.use('/usage_analyse' , usage_analyse);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




module.exports = app;
