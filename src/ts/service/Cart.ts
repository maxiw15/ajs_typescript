import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }
    getTotalCost(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
    }

    getDiscountedTotalCost(discount: number): number {
    let totalCost = this.getTotalCost();
    return totalCost - (totalCost * discount);
    }

    removeItemById(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
    }

}
