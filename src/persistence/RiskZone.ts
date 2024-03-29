import mongoose from "mongoose";
import IRiskZone from "../domain/IRiskZone";

const RiskZoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    adminId: {
        type: String,
        required: true,
        immutable: true
    },
    notificationsEnabled: {
        type: Boolean,
    }
});

// Should extend from RiskZone, because it implements the functions
// described by IRiskZone interface.
export interface RiskZoneDocument extends IRiskZone, mongoose.Document { }

export default mongoose.model<RiskZoneDocument>('RiskZones', RiskZoneSchema);