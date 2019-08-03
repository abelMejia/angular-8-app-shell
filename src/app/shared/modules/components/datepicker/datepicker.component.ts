import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() label: string;
  @Input() pre: Date;
  @Input() placeholder: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() name: string;
  @Output() override: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (undefined !== this.pre) {
      this.parentForm.get(this.name).setValue(this.pre);
    }
  }

  onDate(event: MatDatepickerInputEvent<Date>) {
    this.override.emit({ data: event.target.value, name: this.name });
  }

}
