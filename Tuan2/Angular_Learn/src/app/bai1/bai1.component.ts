import { Component, OnInit } from '@angular/core';
import { Coloritem } from './colorItem';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css'],
})
export class Bai1Component implements OnInit {
  colorArray: Coloritem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.colorArray = [
      { id: 1, color: 0, name: 'Ronaldo Delima', check: true },
      { id: 2, color: 2, name: 'Anh Bảy', check: true },
      { id: 3, color: 1, name: 'Anh Si', check: true },
      { id: 4, color: 2, name: 'Son heung Min', check: true },
      { id: 5, color: 3, name: 'Báo đen', check: true },
      { id: 6, color: 1, name: 'Eto', check: true },
      { id: 7, color: 2, name: 'Sếu Vườn', check: true },
      { id: 8, color: 1, name: 'Anh Năm', check: true },
      { id: 9, color: 0, name: 'Kaka Thiên Thần', check: true },
      { id: 10, color: 1, name: 'Pele', check: true },
      { id: 11, color: 2, name: 'Marodona', check: true },
      { id: 12, color: 0, name: 'Bale', check: true },
      { id: 13, color: 3, name: 'Maxguire', check: true },
      { id: 14, color: 1, name: 'Reus', check: true },
    ];
  }
  public updateName: string = '';
  public updateColor: string = '';
  public edit(item: Coloritem) {
    item.check = false;
  }

  public delete(item: Coloritem) {
    this.colorArray = this.colorArray.filter((value) => {
      return value.id !== item.id;
    });
  }
  public save(item: Coloritem) {
    if (this.updateName === '' || this.updateColor === '') {
      alert('Bạn chưa điền tên hoặc chọn màu!');
    } else {
      item.name = this.updateName;
      item.check = true;
    }
    item.color = Number(this.updateColor);
    this.updateName = '';
    this.updateColor = '';
  }
}
