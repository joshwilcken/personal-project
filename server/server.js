const express = require('express');
const session = require('express-session');
const server = require('express-server');
const bodyParser = require('body-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');
const massive = require('massive')
// const chart = require('angular-chart.js')
const port = 3000;
const config = require('./.config.js')

const app = express()

app.use(express.static(__dirname + './../public'))
app.use(bodyParser.json());
app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: config.secret
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: 'joshwilcken.auth0.com',
    clientID: '6MUP3My8kk6A3fPRbfGarID4BLtG4sJA',
    clientSecret: 'OMxJ4dV77-b-WgPzmUifihUwA7Pdz38tYqkQ80-v8e-6p7gHRYI98eatKAN38ign',
    callbackURL: '/login/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  return done(null, profile);
}));

massive(config.database).then(db => {
  app.set('db', db)
})

app.get('/login', passport.authenticate('auth0'))

app.get('/login/callback/', passport.authenticate('auth0', {successRedirect: '/', failureRedirect: 'login'}))

passport.serializeUser((userA, done) => {
  console.log('serializing', userA);
  var userB = userA;
 
  done(null, userB); 
});


passport.deserializeUser((userB, done) => {
  var userC = userB;

  done(null, userC); 
});


app.listen(port, () => {
    console.log('listening on 3000')
})