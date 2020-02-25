import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './stock-inventory.component';
import { StockProductsComponnet } from './stock-products/stock-products.component';
import { StockBranchComponnet } from './stock-branch/stock-branch.component';
import { StockSelectorComponnet } from './stock-selector/stock-selector.component';
@NgModule({
  declarations: [
    StockInventoryComponent,
    StockProductsComponnet,
    StockBranchComponnet,
    StockSelectorComponnet
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StockInventoryComponent
  ]
})
export class StockInventoryModule {

}
