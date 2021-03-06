import CriticalSpots from './CriticalSpot';
import ICriticalSpot from '../domain/ICriticalSpot';

export default class CriticalSpotsRecordManager {
    static async addCriticalSpot(criticalSpot: ICriticalSpot): Promise<ICriticalSpot> {
        const result: ICriticalSpot = await CriticalSpots.create(criticalSpot);
        return result;
    }

    static async getCriticalSpot(criticalSpotId: string): Promise<ICriticalSpot | null> {
        const result: ICriticalSpot | null = await CriticalSpots.findById(criticalSpotId);
        return result;
    }

    static async getCriticalSpots(riskZonesIds: Array<ICriticalSpot>): Promise<Array<ICriticalSpot> | null> {
        const result: Array<ICriticalSpot> | null = await CriticalSpots.find({ $or: riskZonesIds });
        return result;
    }

    static async editCriticalSpot(criticalSpotId: string, criticalSpot: ICriticalSpot): Promise<ICriticalSpot | null> {
        const newCriticalSpot: ICriticalSpot | null = await CriticalSpots.findByIdAndUpdate(criticalSpotId, criticalSpot, { new: true });
        return newCriticalSpot;
    }
}