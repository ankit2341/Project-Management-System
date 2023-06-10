const { projectModel } = require("../models/projects.model");

const projectController = {
  getprojects: async (req, res) => {
    const { page, sort, search } = req.query;
    try {
      if (page != undefined && sort != undefined && search != undefined) {
        if (page == 1) {
          const projects = await projectModel
            .find({
              $or: [
                { Projectname: { $regex: search } },
                { Reason: { $regex: search } },
                { Type: { $regex: search } },
                { Category: { $regex: search } },
                { Priority: { $regex: search } },
                { Department: { $regex: search } },
                { Location: { $regex: search } },
                { Status: { $regex: search } },
                { Startdate: { $regex: search } },
                { EndDate: { $regex: search } },
              ],
            })
            .skip(0)
            .limit(10)
            .sort({ [sort]: -1 })
            .collation({ locale: "en", caseLevel: true });
          res.status(200).send(projects);
        } else {
          const projects = await projectModel
            .find({
              $or: [
                { Projectname: { $regex: search } },
                { Reason: { $regex: search } },
                { Type: { $regex: search } },
                { Category: { $regex: search } },
                { Priority: { $regex: search } },
                { Department: { $regex: search } },
                { Location: { $regex: search } },
                { Status: { $regex: search } },
                { Startdate: { $regex: search } },
                { EndDate: { $regex: search } },
              ],
            })
            .skip((page - 1) * 10)
            .limit(10)
            .sort({ [sort]: -1 })
            .collation({ locale: "en", caseLevel: true });
          res.status(200).send(projects);
        }
      } else if (
        page != undefined &&
        sort != undefined &&
        search == undefined
      ) {
        if (page == 1) {
          const projects = await projectModel
            .find()
            .skip(0)
            .limit(10)
            .sort({ [sort]: 1 })
            .collation({ locale: "en", caseLevel: true });
          res.status(200).send(projects);
        } else {
          const projects = await projectModel
            .find()
            .skip((page - 1) * 10)
            .limit(10)
            .sort({ [sort]: 1 })
            .collation({ locale: "en", caseLevel: true });
          res.status(200).send(projects);
        }
      } else {
        res.status(200).send({
          Success: "false",
          Message: "Page and search both query should present",
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
  dashboard: async (req, res) => {
    try {
      const data = await projectModel.aggregate([
        {
          $group: {
            _id: "$Status",
            count: { $count: {} },
          },
        },
      ]);

      const departmentData = await projectModel.aggregate([
        {
          $group: {
            _id: {
              status: "$Status",
              department: "$Department",
            },
            statusCount: { $sum: 1 },
          },
        },
        {
          $group: {
            _id: "$_id.department",
            allstatus: {
              $push: {
                status: "$_id.status",
                count: "$statusCount",
              },
            },
            total: { $sum: "$statusCount" },
          },
        },
      ]);

      const closureDelay = await projectModel.aggregate([
        {
          $group: {
            _id: {
              status: "$Status",
              EndDate: "$EndDate",
            },
            statusCount: { $sum: 1 },
          },
        },
        {
          $group: {
            _id: "$_id.status",
            allenddates: {
              $push: {
                EndDate: "$_id.EndDate",
                count: "$statusCount",
              },
            },
          },
        },
      ]);

      const total=await projectModel.count();

      res
        .status(200)
        .send({
          total:total,
          scrollbarData: data,
          departmentData: departmentData,
          closureDelay: closureDelay,
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
