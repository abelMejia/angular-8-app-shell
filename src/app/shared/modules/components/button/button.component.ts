import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

	@Input() type: string;
	@Input() label: string;
	@Input() disabled = false;
	@Output() clicking = new EventEmitter();

	constructor() { }

	ngOnInit() {}

	doAction(event: any) {
	    this.clicking.emit({
	      data: event
	    });
	}
}
