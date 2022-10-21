export class ColorItem {
  id: number = 0;
  color: string = '';
  name: string = '';
  check: number = 0;

  constructor(id: number, color: string, name: string, check: number) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.check = check;
  }
}
