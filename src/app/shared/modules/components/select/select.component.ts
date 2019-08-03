import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IItem } from '../../../interfaces/iitem';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

	  @Input() parentForm: FormGroup;
	  @Input() label: string;
	  @Input() name: string;
	  @Input() preItem: IItem;
	  @Input() itemsList: IItem[];
	  @Input() disabled = false;
	  @Input() required = false;
	  @Output() selected = new EventEmitter();

	  constructor() {}

	  ngOnInit() {
	    let preSelect: IItem;

	    if (undefined !== this.preItem) {
	      preSelect = this.itemsList.find(item => String(item.id) === String(this.preItem.id));
	      this.parentForm.get(this.name).setValue(preSelect);
	    }
	  }

	  doChange(event: any) {
	    this.selected.emit({
	      name: this.name,
	      data: event
	    });
	  }

}
