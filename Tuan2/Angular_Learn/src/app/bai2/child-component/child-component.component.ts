import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildcomponentComponent implements OnInit, OnChanges {
  @Input() value: string = '';
  @Input() order: number = 0;

  @Output() out: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log('child-component - constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
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
    this.out.emit(this.order);
  }

  ngOnDestroy(): void {
    this.order++;
  }
}
