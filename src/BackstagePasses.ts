import {Item} from "./Item";
import {ItemName} from "./ItemName";
import {ItemSellIn} from "./ItemSellIn";
import {ItemQuality} from "./ItemQuality";

export class BackstagePasses extends Item {
    private static DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD: number = 10;
    private static THIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD: number = 5;
    private static QUALITY_RESET_SELL_IN_THRESHOLD: number = 0;


    constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
        super(name, sellIn, quality);
    }

    update(): void {
        this.decreaseSellIn();
        this.increaseQuality();
        if(this.hasToBeSoldInLessThan(BackstagePasses.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) this.increaseQuality();
        if(this.hasToBeSoldInLessThan(BackstagePasses.THIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) this.increaseQuality();
        if(this.hasToBeSoldInLessThan(BackstagePasses.QUALITY_RESET_SELL_IN_THRESHOLD)) this.resetQuality();
    }
}