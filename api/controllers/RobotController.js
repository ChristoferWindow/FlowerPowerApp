/**
 * RobotController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  GetUserRobots: async function (req, res) {
    let user = await User.find({name: 'Wojtek'}); // TODO: Make is dynamic
    let robots = await Robot.find({userId: user[0].id});
    res.view('pages/robot_panel', {
      robots: robots
    });
  },
};

