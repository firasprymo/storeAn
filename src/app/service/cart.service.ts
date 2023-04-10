import {Injectable} from '@angular/core';
import {ProduitModule} from '../module/produit.module';
import {ProductCardItem} from '../shared/model/product-card-item';
import {ProductCard} from '../shared/model/product-card';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItems: ProductCard[] = [];
    private cartLengthSubject = new BehaviorSubject<number>(0);

    constructor() {

    }

    getCart() {
        const cart = localStorage.getItem(environment.cartItems);
        if (cart) {
            this.cartItems = JSON.parse(cart);
        }
        this.cartLengthSubject.next(this.cartItems.length);
        return this.cartItems;
    }

    addProduct(product: ProduitModule): void {
        console.log(product);
        console.log(this.cartItems);
        let item = this.cartItems.find(item => item.productCardItem.produitModule.id === product.id);
        if (item) {
            item.productCardItem.quantity++;
        } else {
            this.cartItems.push({
                productCardItem: {
                    produitModule: product,
                    quantity: 1
                }
            });
        }
        this.getTotal();
        this.cartLengthSubject.next(this.cartItems.length);
        localStorage.setItem(environment.cartItems, JSON.stringify(this.cartItems));
    }


    removeFromCart(itemToRemove: ProductCard) {
        console.log(itemToRemove);
        console.log(this.cartItems);
        const itemIndex = this.cartItems.findIndex((i) =>
            i.productCardItem.produitModule.id === itemToRemove.productCardItem.produitModule.id);
        console.log(this.cartItems[itemIndex]);
        if (itemIndex !== -1) {
            this.cartItems.splice(itemIndex, 1);
            this.getTotal();
            this.cartLengthSubject.next(this.cartItems.length);
            localStorage.setItem(environment.cartItems, JSON.stringify(this.cartItems));
        }
    }

    getTotal(): any {
        return this.cartItems.reduce((total, product) =>
                total + (product.productCardItem.quantity * product.productCardItem.produitModule.prixvente),
            0);
    }

    getCartLengthSubject() {
        return this.cartLengthSubject.asObservable();
    }
}
