import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Product } from './models/product.interface';
@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {

  orderForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }
  ngOnInit() {
    this.orderForm = this.fb.group({
      customerName: 'abc',
      items: this.fb.array([
        this.createItem({ name: 'Macbook Pro', description: 'i5', price: '25000' }),
        this.createItem({ name: 'Macbook Air', description: 'i7', price: '35000' }),
        this.createItem({ name: '', description: '', price: '' })
      ])
    });
  }

  createItem({ name, description, price }): FormGroup {
    return this.fb.group({
      name,
      description,
      price
    });
  }

  addItem(): void {
    this.items.push(this.createItem({ name: '', description: '', price: '' }));
  }
  onSubmit() {
    console.log(this.orderForm.value.items);
  }
}
