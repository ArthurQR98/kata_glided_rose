import {ItemQualityOutOfRangeException} from "./ItemQualityOutOfRangeException";

export class ItemQuality {
    private static MAX_VALUE: number = 50;
    private static MIN_VALUE: number = 0;

    private value: number;

    constructor(value: number) {
        if(value < ItemQuality.MIN_VALUE || value > ItemQuality.MAX_VALUE) throw new ItemQualityOutOfRangeException(value.toString());
        this.value = value;
    }

    increase(){
        if(this.value === ItemQuality.MAX_VALUE) return this;
        return new ItemQuality(this.value + 1);
    }

    decrease(){
        if(this.value === ItemQuality.MIN_VALUE) return this;
        return new ItemQuality(this.value - 1);
    }

    reset(): ItemQuality {
        return new ItemQuality(ItemQuality.MIN_VALUE);
    }

}