/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    GetUserData: async function(req,res){
        let user = await User.find({name:"Wojtek"}) // TODO: Make is dynamic
        res.view("pages/user_panel", {
            user_image: user[0].image,
            user_name: user[0].name,
            user_email: user[0].email
        });
    }

};

