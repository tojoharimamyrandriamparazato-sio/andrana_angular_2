import { Component, computed, effect, signal } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { CodeLabel, Product, ProductType } from '../product.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem, NgFor],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  productTypes: CodeLabel[] = [
    {code: 'all', label: 'All'},
    {code: 'food', label: 'Food'},
    {code: 'drink', label: 'Drink'}
  ];
  defaultValue: Product[] = [
    {id: 3, name: "Vary amin'anana", type: 'food'},
    {id: 5, name: "Chocolat chaud", type: 'drink'},
    {id: 8, name: "Galeoka", type: 'drink'}
  ];
  products = signal<Product[]>(this.defaultValue);
  selectedProductType = signal<ProductType>('all');
  filteredList = computed(() => {
    const products = this.products();
    const selectedProductType = this.selectedProductType();
    if(selectedProductType === "all") {
      return products;
    } else {
      return products.filter(product => product.type === selectedProductType);
    }
  });
  constructor() {
    effect(() => {
      alert(this.products());
    });
  }
  removeAllProducts() {
    this.products.set([]);
  }
  resetProductList() {
    this.products.set(this.defaultValue);
  }
  addProduct() {
    const newProduct: Product = {id: 28, name: "Cochon de lait", type: 'food'};
    this.products.update(listeProducts => 
      [...listeProducts, newProduct]);
  }
  addProductByMutation() {
    const newProduct = {id: 31, name: "Tekateka", type: 'food'};
  }
  onDelete(productId: number) {
    this.products.update(products => products.filter(
      product => product.id !== productId
    ));
  }
  onFilterValueChange(productType: string) {
    this.selectedProductType.set(productType as ProductType);
  }
}
