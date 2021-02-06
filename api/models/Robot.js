/**
 * Robot.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'robots',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true
    },
    userId: {
      type: 'number',
      required: true
    },
    uuid: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    location: {
      type: 'string',
      required: true
    },
    image: {
      type: 'string',
      required: true
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

};

