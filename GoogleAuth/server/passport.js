require('dotenv').config();
const Google_client_id = process.env.Google_client_id;
const Google_client_secret = process.env.Google_client_secret;

console.log(Google_client_id, Google_client_secret)

const passport = require('passport');
const User = require('./models/auth');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: Google_client_id,
    clientSecret: Google_client_secret,
    callbackURL: "/auth/google/callback"
  },
  
  async (accessToken, refreshToken, profile, cb) => {
    //console.log(profile);
    try {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        const newUser = new User({
          googleId: profile.id,
          name: profile.displayName,
          email:profile._json.email,
          photos:profile.photos[0].value
        });

        user = await newUser.save();
     
        return cb(null, user);
      } else {
        return cb(null, user);
      }
    } catch (err) {
      return cb(err, null);
    }
  }
));

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findById(id).exec();
    cb(null, user);
  } catch (err) {
    cb(err, null);
  }
});



module.exports = passport;
