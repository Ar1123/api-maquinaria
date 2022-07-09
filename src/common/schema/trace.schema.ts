import * as mongoose from "mongoose";
export const TraceSchema = new mongoose.Schema({
    output: { type: String, required: true, },
    input: { type: String, required: true, },
    battery: { type: Number, required: true, },
    nameProyect: { type: String, required: true },
    idMachine: { type: String, required: true },
    idM: { type: String, required: true },
    location: { 
        lat: { type: Number, required: true, },
        lng: { type: Number, required: true, },
        precisition: { type: Number, required: true, },
    } ,

}, {
    timestamps: true,
});
