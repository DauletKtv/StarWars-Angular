import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.scss'],
})
export class PlanetsTableComponent implements OnInit {
  @Input() planetObj: any;
  @Input() modal: any;
  @Output() closing = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  close() {
    this.closing.emit();
  }
}
