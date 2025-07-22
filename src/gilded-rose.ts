export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        /*
        Aged Brie => incrementa su calidad (+1) cada dia, una vez pasada la fecha de venta su calidad aumenta el doble (+2)
        Sulfuras => no necesitamos venderlo en una fecha y tampoco se degrada.
        Backstage => incrementa su valor a medida que se acerca la fecha del concierto.
            - Si falta 10 dias o menos, la calidad se incrementa el doble. (+2)
            - Si falta 5 dias o menos, la calidad se incrementa el triple. (+3)
            - Una vez pasada la fecha del concierto la entrada pierde su valor. (0 Quality)
        Restricciones:
            - La calidad de un articulo no puede superar el valor de 50
            - La calidad no puede ser negativo
            - La calidad para el item "Sulfuras" poseen una calidad inmutable de 80
         */
        for (let i = 0; i < this.items.length; i++) {
            // Comprueba de que el articulo sea diferente de Aged Brie y Backstage
            // y valida que la calidad sea mayor a 0. Standar.
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1  // 1er aumento de calidad
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                // 2do aumento a la calidad
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            //  3er aumento a la calidad
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                // Se le resta el dia de venta para un item standard
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                // standard (duda)
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    } else {
                        // Calidad lo coloca en cero porque es una entrada que ya vencio.
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        //  La calidad del Aged Brie aumenta el doble
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }
}