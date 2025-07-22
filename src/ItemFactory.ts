import {AgedBrie} from "./AgedBrie";
import {ItemQuality} from "./ItemQuality";
import {ItemSellIn} from "./ItemSellIn";
import {ItemName} from "./ItemName";
import {Item} from "./Item";
import {BackstagePasses} from "./BackstagePasses";
import {Sulfuras} from "./Sulfuras";
import {Conjured} from "./Conjured";
import {Standard} from "./Standard";

export class ItemFactory {
    static basedOn(rawName: string, rawSellIn: number, rawQuality: number): Item {
        const name: ItemName = new ItemName(rawName);
        const sellIn: ItemSellIn = new ItemSellIn(rawSellIn);
        const quality: ItemQuality = new ItemQuality(rawQuality);

        if (name.isAgedBrie()) return new AgedBrie(name, sellIn, quality);
        if (name.isBackstagePasses()) return new BackstagePasses(name, sellIn, quality);
        if (name.isSulfuras()) return new Sulfuras(name, sellIn, quality);
        if (name.isConjured()) return new Conjured(name, sellIn, quality);

        return new Standard(name, sellIn, quality);
    }
}