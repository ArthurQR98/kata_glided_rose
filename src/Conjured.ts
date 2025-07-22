import {Item} from "./Item";
import {ItemName} from "./ItemName";
import {ItemSellIn} from "./ItemSellIn";
import {ItemQuality} from "./ItemQuality";

export class Conjured extends Item {
    constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
        super(name, sellIn, quality);
    }

    update(): void {
        this.decreaseSellIn();
        this.decreaseQuality();
        this.decreaseQuality();
    }
}