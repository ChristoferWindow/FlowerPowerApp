/**
 * PlantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  dispatch: function(req,res){
    res.send('hello world!');
  },

  GetUserPlants: async function(req,res){
    let user = await User.find({name:"Wojtek"}) // TODO: Make is dynamic
    let robots = await Robot.find({userId: user[0].id})
    let plants = await Plant.find({robotId: robots[0].id}) // TODO: Make it so less DB querries are needed. Maybe keep ID?
    res.view("pages/flowers_panel", {
      plants: plants
    });
  },
  GetCreatePlantForm: async function (req, res) {
    res.view('pages/robot_create');
  },

  Save: async function (req, res) {
    Plant.create({
        robotId: req.robot,
        name: req.name,
        type: req.type,
        image: req.image,
    });
    return 'success';
  }
};

