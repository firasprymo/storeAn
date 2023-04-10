import {Component, OnInit} from '@angular/core';
import {CartService} from '../../service/cart.service';
import {ProductCard} from '../../shared/model/product-card';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'app-pannier',
    templateUrl: './pannier.component.html',
    styleUrls: ['./pannier.component.scss']
})
export class PannierComponent implements OnInit {
    cartItems: ProductCard[] = [];
    cartTotal: number = 0;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        this.cartItems = this.cartService.getCart();
        this.cartTotal = this.cartService.getTotal();
    }

    onSave() {

    }

    delete(product: ProductCard) {
        this.cartService.removeFromCart(product);
        this.cartItems = this.cartService.getCart();
        this.cartTotal = this.cartService.getTotal();

    }

    minus(product: ProductCard) {
        this.cartTotal = 0;
        let item = this.cartItems.find(item => item.productCardItem.produitModule.id === product.productCardItem.produitModule.id);
        if (item) {
            if (item.productCardItem.quantity > 1) {
                item.productCardItem.quantity -= 1;
            } else {
                let index = this.cartItems.indexOf(item);
                this.cartItems.splice(index, 1);
            }
            this.cartTotal = this.cartService.getTotal();
            localStorage.setItem(environment.cartItems, JSON.stringify(this.cartItems));
        }
    }

    add(product: ProductCard) {
        this.cartTotal = 0;
        let item = this.cartItems.find(item => item.productCardItem.produitModule.id
            === product.productCardItem.produitModule.id);
        console.log(item.productCardItem);
        if (item) {
            item.productCardItem.quantity += 1;
        } else {
            this.cartItems.push({
                productCardItem: {
                    produitModule: item.productCardItem.produitModule,
                    quantity: 0
                }

            });
        }
        this.cartTotal = this.cartService.getTotal();
        localStorage.setItem(environment.cartItems, JSON.stringify(this.cartItems));
    }
}
