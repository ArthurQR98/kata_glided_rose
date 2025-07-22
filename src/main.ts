import {Item} from "./Item";
import {ItemFactory} from "./ItemFactory";
import {GildedRose} from "./GildedRose";

const items: Item[] = [
    ItemFactory.basedOn("+5 Dexterity Vest", 10, 20),
    ItemFactory.basedOn("Aged Brie", 2, 0),
    ItemFactory.basedOn("Elixir of the Mongoose", 5, 7),
    ItemFactory.basedOn("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    ItemFactory.basedOn("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    ItemFactory.basedOn("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    ItemFactory.basedOn("Conjured Mana Cake", 3, 6)
];

const gildedRose = new GildedRose();
const days: number = 16;
for (let i = 0; i < days; i++) {
    console.log("---------- day " + i + " ----------");
    for (const item of items) {
        console.log(item);
    }
    gildedRose.updateQuality(items);
}