import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [NgIf],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem {
  @Input({ required: true }) product: Product | null = null;
  @Output() delete = new EventEmitter<number>();
  onDelete() {
    this.delete.emit(this.product?.id);
  }
}
