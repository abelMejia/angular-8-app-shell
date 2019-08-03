import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() label: string;
  @Input() name: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() disabled = false;
  @Input() required = false;
  @Output() override = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  doOverride(event: any) {
    this.override.emit({
      name: this.name,
      data: event.target.value
    });
  }

}
