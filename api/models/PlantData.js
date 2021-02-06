/**
 * PlantData.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'plant_data',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true
    },
    plantId: {
      type: 'number',
      required: true
    },
    value: {
      type: 'string',
      required: true
    },
    createdAt: {type: 'ref', columnType: 'datetime', autoCreatedAt: true,},
    updatedAt: {type: 'ref', columnType: 'datetime', autoUpdatedAt: true,},
  },

};

