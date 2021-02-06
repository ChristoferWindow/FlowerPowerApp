/**
 * RobotDetailsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  GetRobotDetails: async function (req, res) {
    let id = req.param('robotId');
    let robots = await Robot.find({id});
    let plants = await Plant.find({robotId: id});
    res.view('pages/robot_details', {
      plants: plants,
      robot: robots[0],
    });
  },

}
