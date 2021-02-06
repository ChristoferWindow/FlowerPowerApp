/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require('bcryptjs');

module.exports = {

  tableName: 'users',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true
    },
    name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    image: {
      type: 'string',
      required: false,
      unique: false
    },
    createdAt: {
      type: 'ref',
      columnType: 'datetime',
      autoCreatedAt: true,
    },
    updatedAt: {
      type: 'ref',
      columnType: 'datetime',
      autoUpdatedAt: true,
    },
  },


  //todo: password encryption
  // customToJSON: function() {
  //   return _.omit(this, ['password'])
  // },
  // beforeCreate: function(user, cb) {
  //   bcrypt.genSalt(10, function(err, salt) {
  //     bcrypt.hash(user.password, salt, function(){}, function(err, hash) {
  //       if (err) {
  //         console.log(err);
  //         cb(err);
  //       }else{
  //         user.password = hash;
  //         cb(null, user);
  //       }
  //     });
  //   });
  // }

};

