export class ItemQualityOutOfRangeException extends Error {
    constructor(message:string) {
        super(`Tried to set an ItemQuality of ${message} wich is outside the valid range`);
    }
}