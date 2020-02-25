import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Product } from './models/product.interface';
@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {

  products: Product[] = [
    { id: 1, price: 2000, name: 'Macbook Air' },
    { id: 2, price: 5000, name: 'Macbook Pro' },
  ];

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({ product_id: 5, quantity: 50 }),
    stock: this.fb.array([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 2, quantity: 20 })
    ])
  });
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  createStock(stock) {
    return this.fb.group({
      product_id: (parseInt(stock.product_id, 10) || ''),
      quantity: (stock.quantity || 10)
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup, index: number }) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
    console.log(group, index);
  }

  onSubmit() {
    console.log(this.form.value, 'Submit');
  }
}
