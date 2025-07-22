export class ItemName {
    private static AGED_BRIE: string = "Aged Brie";
    private static BACKSTAGED_PASSES: string = "Backstage passes to a TAFKAL80ETC concert";
    private static SULFURAS: string = "Sulfuras, Hand of Ragnaros";
    private static CONJURED: String = "Conjured Mana Cake";

    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    isAgedBrie(): boolean {
        return ItemName.AGED_BRIE.includes(this.value);
    }

    isBackstagePasses(): boolean {
        return ItemName.BACKSTAGED_PASSES.includes(this.value);
    }

    isSulfuras(): boolean {
        return ItemName.SULFURAS.includes(this.value);
    }

    isConjured(): boolean {
        return ItemName.CONJURED.includes(this.value);
    }
}