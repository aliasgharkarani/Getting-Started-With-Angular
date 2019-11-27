import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss'],
})


export class MyNavComponent {

  clickMessage = '';
  inputTxt = 'iomechs';
  toDos = [];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(private breakpointObserver: BreakpointObserver) { }
  displayedColumns: string[] = ['position', 'name', 'update', 'delete'];
  dataSource = ELEMENT_DATA;

  onClickMe() {
    this.clickMessage = 'You are my hero!';
    this.toDos.push({position: 0, name: this.inputTxt });
    this.dataSource = [...this.toDos];
    console.table(this.dataSource);
  }
}
