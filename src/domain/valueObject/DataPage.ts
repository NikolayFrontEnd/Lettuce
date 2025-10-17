export class DataPage<T> {
  private readonly _items: T[];
  private readonly _itemCount: number;
  private readonly _page: number;
  private readonly _pageCount: number;

  constructor(items: T[], itemCount: number, page: number, pageCount: number) {
    this._items = items;
    this._itemCount = itemCount;
    this._page = page;
    this._pageCount = pageCount;
  }

  get items(): T[] {
    return this._items;
  }

  get itemCount(): number {
    return this._itemCount;
  }

  get page(): number {
    return this._page;
  }

  get pageCount(): number {
    return this._pageCount;
  }
}
