import { Component, OnInit } from '@angular/core';
import { ColorItem } from '../colorItem/colorItem';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  itemColor: ColorItem[] = [];
  itemColorAfter: ColorItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.itemColor = [
      {
        id: 1,
        color: 'Orange',
        name: 'Cristiano Ronaldo',
        check: 0,
      },
      {
        id: 2,
        color: 'Green',
        name: 'Lionel Messi',
        check: 0,
      },
      {
        id: 3,
        color: 'Blue',
        name: 'Robert Lewandowski',
        check: 0,
      },
      {
        id: 4,
        color: 'Purple',
        name: 'Mario Balotelli',
        check: 0,
      },
    ];
  }
  deleteItemColor(color: ColorItem) {
    this.itemColorAfter = this.itemColorAfter.filter((item) => {
      return item.check != color.check;
    });
  }

  dataChild(data: ColorItem) {
    let itemColors: ColorItem = new ColorItem(
      data.id,
      data.name,
      data.color,
      data.check
    );
    itemColors.check = Math.floor(Math.random() * 1000);
    this.itemColorAfter.push(itemColors);
  }
}
