import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css'],
})
export class Bai2Component implements OnInit, OnChanges {
  getOrderFromChild(_$event: number) {
    throw new Error('Method not implemented.');
  }
  check: number = 0;
  currentValue: string = '';
  isTurnOn: boolean = true;
  constructor() {}

  ngOnChanges(_changes: SimpleChanges): void {
    this.check++;
  }

  ngOnInit(): void {
    this.check++;
  }

  ngDoCheck(): void {
    this.check++;
  }

  ngAfterContentInit(): void {
    this.check++;
  }

  ngAfterContentChecked(): void {
    this.check++;
  }

  ngAfterViewInit(): void {
    this.check++;
  }

  ngAfterViewChecked(): void {
    this.check++;
  }

  ngOnDestroy(): void {
    this.check++;
  }

  turnOn() {
    this.isTurnOn = !this.isTurnOn;
  }

  getcheckFromChild(check: number) {
    this.check = check;
  }
}
