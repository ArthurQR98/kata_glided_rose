import {Item} from "./Item";

export class GildedRose {
    updateQuality(items = [] as Array<Item>){
        items.forEach((item) => item.update());
    }
}