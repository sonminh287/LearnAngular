import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css'],
})
export class Bai2Component implements OnInit, OnChanges {
  order: number = 0;
  currentValue: string = '';
  isTurnOn: boolean = true;
  constructor() {}

  ngOnChanges(_changes: SimpleChanges): void {
    this.order++;
  }

  ngOnInit(): void {
    this.order++;
  }

  ngDoCheck(): void {
    this.order++;
  }

  ngAfterContentInit(): void {
    this.order++;
  }

  ngAfterContentChecked(): void {
    this.order++;
  }

  ngAfterViewInit(): void {
    this.order++;
  }

  ngAfterViewChecked(): void {
    this.order++;
  }

  ngOnDestroy(): void {
    this.order++;
  }

  turnOn() {
    this.isTurnOn = !this.isTurnOn;
  }

  getOrderFromChild(order: number) {
    this.order = order;
  }
}
