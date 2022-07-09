import * as mongoose from "mongoose";
export const AssignSchema = new mongoose.Schema({
    idM: { type: String, required: true, },
    projectName: { type: String, required: true, },
    hours: { type: Number, required: true, },
    days: { type: [], required: true },
    personId: { type: String, required: true },
    personName: { type: String, required: true },


}, {
    timestamps: true,
});
