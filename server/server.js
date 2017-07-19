const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');
const massive = require('massive')
const port = 3000;
const config = require('./.config.js')

const app = express()

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'))

app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: config.secret
}))
app.use(passport.initialize());
app.use(passport.session());

// Database Stuffs
massive(config.database).then(db => {
  app.set('db', db)
})

const {buyShares} = require('./controllers/tradeController')

const {sellShares} = require('./controllers/tradeController')

const{profileInfo} = require('./controllers/profileController')

const{profileTotals} = require('./controllers/profileTotalController')

// Auth0 Middleware
passport.use(new Auth0Strategy({
    domain: config.domain,
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: '/login/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    var db = app.get('db')

    db.getUserByAuthId([profile.id]).then((response) => {
      var user = response[0]
      if(!user)
      db.createUserbyAuth([profile.displayName, profile.id]).then((user) => {
        return done(null, user)
      })
    else  {
      return done(null, user)
    }
    })
}));

app.get('/login', passport.authenticate('auth0'))

app.get('/login/callback/', passport.authenticate('auth0', {successRedirect: '/#!/profile', failureRedirect: 'login'}))

passport.serializeUser((userA, done) => {
  console.log('serializing', userA);
  var userB = userA;
 
  done(null, userB); 
});

passport.deserializeUser((userB, done) => {
  var userC = userB;
  var db = app.get('db')

  db.getPurchasesbyId(userC.memberid).then(response => {
    userC.purchases = response
  })

  db.getSellsbyId(userC.memberid).then(response => {
    userC.sells = response
  })
  done(null, userC); 
})
// maked

// Endpoints

// Retrieve the User's Data
// app.get('/home', (res, req, next) => {
//   const {email} = req.body;
//   req.app.get('db').loginUser().then(resp)=>{

//   }
// })

// Make a purchase
app.post('/api/buy', buyShares)

// Sell shares
app.post('/api/sell', sellShares)

// Bring in profile
app.get('/api/profile', profileInfo)

app.get('/api/totals', profileTotals)

// app.destroy('/api/trade, ')

// Positions Endpoint
// app.get('/api/positions', )


// Create a group
// app.post('/group', (res, req, next) => {

// })

// // Add a user to a group


// })






// Listening on this port
app.listen(port, () => {
    console.log(`listening on ${port}`)
})