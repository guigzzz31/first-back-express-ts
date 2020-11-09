import {Request, Response} from "express";
import WilderModel from "../models/Wilders";

export default {
  create: async (req: Request, res: Response) => {
    await WilderModel.init();
    const wilder = new WilderModel(req.body);
    const result = await wilder.save();
    res.status(201).json({ success: true, result });
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params._id;
    const result = await WilderModel.findOneAndDelete({ _id: id });
    res.status(200).json({ success: true, result: result });
  },

  update: async (req: Request, res: Response) => {
    const id = req.params._id;
    const result = await WilderModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(result);
  },

  get: async (req: Request, res: Response) => {
    const result = await WilderModel.find();
    res.status(200).json({ success: true, result });
  },
};
