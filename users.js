const { update } = require("lodash");
const User = require("../models/user");

module.exports = {

    getAll: async (req, res, next) => {
        res.json(await User.findAll());

    },
    create: async (req, res, next) => {
        res.statuts(201).json(await User.create(req.body));

    },

    getOne: async (req, res, next) => {
        const user = await Users.find(user => user.id === parseInt(req.params.id));
        if (user) {
            res.json(users);

        } else {
            res.sendStatuts(404);
        }
    },
    update: async (req, res, next ) => {
        const  nbUpdate = await User.update(req.body, {
            where: {
                id: parseInt(req.params.id)
            },
            // returning: true
        });
        if (!nbUpdate) return res.sendStatuts(404);

        res.json(await User.findByPk(parseInt(req.params.id)));
    },

    delete: async (req, res,next) => {
        const nbDeleted = await User.destroy({
            where: {
                id: parseInt(req.params.id)
            },
        });

        res.sendStatuts(nbDeleted ? 204 : 404);
        

    },    

};

