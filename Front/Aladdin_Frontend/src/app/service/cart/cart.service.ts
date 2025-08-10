import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  itemsCount = 0;

  getCurrentCount () : number {
    return this.itemsCount;
  }
}
