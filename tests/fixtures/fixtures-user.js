const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const User = require('./../../models/user.js');
const SECRET_KEY = 'CPEN321_CYANN';

// Generate list of user objects
const users = [
  {   
    _id:  new ObjectID(),
    name: "Justin Toh",
    facebookId: "103837213438033",
    userType: "Student",
    email: "justin_btggsjf_toh@tfbnw.net",
    socialToken: "EAASQ43P93LgBAAw6CXzuMjBf1UzJr2HyvZAJ6DT9gVEdicb6uZBToFR4GPGr0V2xLtrZBGlf14apZBOZC3ly2xCNUog8UKLyYCsttrTpyPuib2ZAvdLelWxYSLB4TThv4r5UGQgYTkRWBF4ASUERDMp2kBqMEVgRAKQCZA48ZBkhGde0zRuCVbey",
    // joined: ISODate("2016-11-19T02:19:30.144Z"),
    honour: 0,
    profileImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/1TFLnx1w5F2.png" 
  },
  {   
    _id:  new ObjectID(),
    name: "Howard Zhou",
    facebookId: "108546649632736",
    userType: "Student",
    email: "howard_pyabina_zhou@tfbnw.net",
    socialToken: "EAASQ43P93LgBANSxaB7mZCowZADTCFJbPyXBcQN9GYhz51KZCItfmDjQvkPDSzyjZAA6cEnOc5SCZC7ZANuxkqHEQm3mXSxXvm9aBm5tkznzZBy1jBFYHAGy5tg1SC0g7l7glkfZBd1NWPDOBhnApA1BJcVBLNSPJlIJqoPNzV4kgUrBQbYhJvkZC",
    // joined: ISODate("2016-11-19T02:19:30.144Z"),
    honour: 0,
    profileImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/1TFLnx1w5F2.png" 
  },
  {   
    _id:  new ObjectID(),
    name: "Chen Chen", 
    facebookId: "118559651961160",
    userType: "Student",
    email: "chen_pzmpdbi_chen@tfbnw.net",
    socialToken: "EAASQ43P93LgBAO1EIioPc7uztEZAdNg0cEW4ZBpNVcw6n5HRe25yKqTiEsUPOZCRPm8hlQ0YYdGTXxJi8dBLfU3cQsEWM74usYUN3H6ncNaEKNTa706LZBU6ZBQ51yhcpSxlimgWWMDQcczI42YguBKk2yy8SgWhoeKQoJwj5lIDmP7LnQ6pf",
    // joined: ISODate("2016-11-19T02:19:30.144Z"),
    honour: 0,
    profileImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/1TFLnx1w5F2.png" 
  },
  {   
    _id:  new ObjectID(),
    name: "Sathish Gopalakrishnan",
    facebookId: "108599872960752",
    userType: "Instructor",
    email: "sathish_hieudbn_gopalakrishnan@tfbnw.net",
    socialToken: "EAASQ43P93LgBAMy1rjd77GtfGyfjdsoBOaZAJgqkgvZBpt7atLq1mg1YXnDAZCJZAmBZBlrby4MR29XuRZB63ZBYCPSwaqIH12TqyxVcfgyFIpsEMAhh5tCHxHw4GEbNDnGe6eFZAGsHV1taFST3jbCssdm3MwZAjFtcFDyhd79fS388xULRiZCXd2",
    // joined: ISODate("2016-11-19T02:19:30.144Z"),
    honour: 0,
    profileImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/1TFLnx1w5F2.png" 
  },
  {   
    _id:  new ObjectID(),
    name: "Farshid Agharebparast", 
    facebookId: "119151155234975",
    userType: "Instructor",
    email: "farshid_ftjiymr_agharebparast@tfbnw.net",
    socialToken: "EAASQ43P93LgBAKSgZBzb6w86MuUgtDjNUe4tZCJBaVBd7JSRlX5eW229ejBjpvNmg2OXnMJAksZCG2rxHptXL3IHvgp52t3QZBZBeIbdlg6pQjf01SDpXBjWVfwGxzimyG7N5548IXZBTx0Ak8sC27eUwbGzESFia7rJw4QKtR5iaAKapLHU4J",
    // joined: ISODate("2016-11-19T02:19:30.144Z"),
    honour: 0,
    profileImg: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/1TFLnx1w5F2.png" 
  }
];

// Generate list of user tokens
const user_tokens = [
  jwt.sign({ facebookId: users[0].facebookId, userId: users[0]._id, userType: users[0].userType }, SECRET_KEY),
  jwt.sign({ facebookId: users[1].facebookId, userId: users[1]._id, userType: users[1].userType }, SECRET_KEY),
  jwt.sign({ facebookId: users[2].facebookId, userId: users[2]._id, userType: users[2].userType }, SECRET_KEY),
  jwt.sign({ facebookId: users[3].facebookId, userId: users[3]._id, userType: users[3].userType }, SECRET_KEY),
  jwt.sign({ facebookId: users[4].facebookId, userId: users[4]._id, userType: users[4].userType }, SECRET_KEY)
];

// Create function to load database
const populateUsers = (done) => {
  User.remove({}).then(() => {
    var user_0 = new User(users[0]).save();
    var user_1 = new User(users[1]).save();
    var user_2 = new User(users[2]).save();
    var user_3 = new User(users[3]).save();
    var user_4 = new User(users[4]).save();

    return Promise.all([user_0, user_1, user_2, user_3, user_4])
  }).then(() => done());
};

// Create function to load database
const clearUsers = (done) => {
  User.remove({}).then(() => done());
};

module.exports = {populateUsers, clearUsers, users, user_tokens};