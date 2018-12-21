var mongoose = require('mongoose');

//for localhost
//mongoose.connect('mongodb://127.0.0.1:27017/securing-rest-apis-with-jwt', { useNewUrlParser: true } );

const mongoURL = 'mongodb://admin:admin123@ds115753.mlab.com:15753/lofo-itb' || process.env.MONGODB_URI
mongoose.connect(mongoURL, { useNewUrlParser: true } );
