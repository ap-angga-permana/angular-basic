import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

  @Input() value: string = '';

  @Output() valueChange = new EventEmitter<string>();

  onChange(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value);
  }
}
