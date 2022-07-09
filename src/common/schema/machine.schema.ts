import * as mongoose from "mongoose";
export const MachineSchema = new mongoose.Schema({
    nameProyect: { type: String, required: true, },
    projectDuration: { type: String, required: true, },
    idMachine: { type: String, required: true, },
}, {
    timestamps: true,
});

