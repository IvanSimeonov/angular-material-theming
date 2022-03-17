import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.scss']
})
export class ChildTestComponent implements OnInit {

  @Input()
  item = '';

  @Output()
  newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
