import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() obj: any;
  @Input() modal: any;
  @Output() closing = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  close() {
    this.closing.emit();
  }
}
