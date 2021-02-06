/**
 * PlantDetailsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  GetPlantDetails: async function (req, res) {
    let id = req.param('plantId');
    let plant = await Plant.find({id: id});
    let robots = await Robot.find({id: plant[0].robotId}); // TODO: Make it dynamic. There could be more robots than one.
    let plantdata = await PlantData.find({plantId: id});
    plantdata = plantdata.reverse().slice(0, 5);
    plantdata.forEach( data => {
      data.createdAt = data.createdAt.toString().slice(16,24) + " " + data.createdAt.toString().slice(0,10);
    });
    console.table(plantdata);
    res.view('pages/plant_details', {
      plant: plant[0],
      plantdata: plantdata,
      robots: robots[0],
    });
  },

}
