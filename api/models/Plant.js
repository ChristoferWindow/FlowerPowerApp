/**
 * Plant.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'plants',
  attributes: {
    id: {type: 'number', autoIncrement: true},
    robotId : {type: 'number', required: true},
    name : {type: 'string', required: true},
    type : {type: 'string', required: true},
    image : {type: 'string', required: true},
    createdAt: {type: 'ref', columnType: 'datetime', autoCreatedAt: true,},
    updatedAt: {type: 'ref', columnType: 'datetime', autoUpdatedAt: true,},
  },

};

