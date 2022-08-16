import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss'],
})
export class PeopleTableComponent implements OnInit {
  @Input() peopleObj: any;
  @Input() modal: any;
  @Output() closing = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  close() {
    this.closing.emit();
  }
}
