const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsA // const { techs } = req.body;rray
      },
      location: {
        $near: {
          $geometry: {
            type: `Point`,
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return res.json(devs);
  },

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;

    if (data.techs) {
      data.techs = parseStringAsArray(data.techs);
    }

    const dev = await Dev.findByIdAndUpdate(id, data, { new: true });

    return res.json(dev);
  },

  async destroy(req, res) {
    const { id } = req.params;

    await Dev.findByIdAndDelete(id);

    return res.json({ message: "user removed" });
  }
};
