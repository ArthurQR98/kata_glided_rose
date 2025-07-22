import {Item} from "./Item";
import {ItemName} from "./ItemName";
import {ItemSellIn} from "./ItemSellIn";
import {ItemQuality} from "./ItemQuality";

export class Standard extends Item {
    private static DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOULD: number = 0;

    constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
        super(name, sellIn, quality);
    }

    update(): void {
        this.decreaseSellIn();
        this.decreaseQuality();
        if (this.hasToBeSoldInLessThan(Standard.DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOULD)) this.decreaseQuality();
    }
}