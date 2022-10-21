import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorItem } from '../colorItem/colorItem';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Input() ob!: ColorItem;
  @Output() out: EventEmitter<ColorItem> = new EventEmitter();

  clickBox!: any;

  constructor() {}

  ngOnInit(): void {
    this.clickBox = {
      'margin-top': '50px',
      'border-width': '8px',
      'border-style': 'solid',
      'border-radius': '5px',
      'border-color': this.ob.color,
    };
  }

  submit() {
    this.out.emit(this.ob);
  }
}
