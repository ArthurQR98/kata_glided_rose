import {ItemName} from "./ItemName";
import {ItemSellIn} from "./ItemSellIn";
import {ItemQuality} from "./ItemQuality";

export abstract class Item {
    private itemName: ItemName;
    private itemSellIn: ItemSellIn;
    private itemQuality: ItemQuality;

    constructor(itemName: ItemName, itemSellIn: ItemSellIn, itemQuality: ItemQuality) {
        this.itemName = itemName;
        this.itemSellIn = itemSellIn;
        this.itemQuality = itemQuality;
    }

    abstract update(): void;

    sellIn(): ItemSellIn {
        return this.itemSellIn;
    }

    quality(): ItemQuality {
        return this.itemQuality;
    }

    decreaseSellIn() {
        this.itemSellIn = this.itemSellIn.decrease();
    }

    hasToBeSoldInLessThan(days: number) {
        return this.itemSellIn.isLessThan(days);
    }

    increaseQuality() {
        this.itemQuality = this.itemQuality.increase();
    }

    decreaseQuality() {
        this.itemQuality = this.itemQuality.decrease();
    }

    resetQuality() {
        this.itemQuality = this.itemQuality.reset();
    }
}