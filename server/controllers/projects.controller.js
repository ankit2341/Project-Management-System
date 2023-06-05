const { projectModel } = require("../models/projects.model");

const projectController = {
  getprojects: async (req, res) => {
    const { page } = req.query;
    try {
      if (page != undefined) {
        if (page == 1) {
          const projects = await projectModel.find().skip(0).limit(8);
          res.status(200).send(projects);
        } else {
          const projects = await projectModel
            .find()
            .skip((page - 1) * 8)
            .limit(8);
          res.status(200).send(projects);
        }
      } else {
        res.status(200).send({
          Success: "false",
          Message: "Page query missing",
        });
      }
    } catch (err) {
      res.status(404).send({
        Success: "false",
        Message: "Error connecting api",
      });
    }
  },
  addProject: async (req, res) => {
    try {
      const data = req.body;

      if (data.length < 10 || data.length > 10) {
        return res.status(404).send({
          Success: "false",
          Message: "Error in request body",
        });
      }

      const project = new projectModel(data);
      await project.save();

      res.send({
        Status: "true",
        Message: "New project added successfully",
      });
    } catch (err) {
      res.send({
        Success: "false",
        Message: "Error connecting api",
      });
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const payload = req.body;

    try {
      await projectModel.findByIdAndUpdate({ _id: id }, payload);
      res.status(200).send({
        Status: "true",
        Message: "Project updated successfully",
      });
    } catch (err) {
      res.status(404).send({
        Success: "false",
        Message: "Error connecting api",
      });
    }
  },
};

module.exports = { projectController };
