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
    let totalCost = 0;
    for (let item of this._items) {
    totalCost += item.price;
    }
    return totalCost;
    }

    getDiscountedTotalCost(discount: number): number {
    let totalCost = this.getTotalCost();
    return totalCost - (totalCost * discount);
    }

    removeItemById(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
    }

}
