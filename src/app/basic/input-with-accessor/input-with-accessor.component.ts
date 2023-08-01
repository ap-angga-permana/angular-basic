import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input-with-accessor',
  templateUrl: './input-with-accessor.component.html',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputWithAccessorComponent,
      multi: true
    }
  ]
})
export class InputWithAccessorComponent implements ControlValueAccessor {

  _value: string = ''

  @Input() set value(value: string){
    this._value = value;
  }

  onChange!: Function
  onTouched!: Function

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this._value = obj;
  }

  onInput(event: any){
    const value = event.target.value;
    this.onChange(value);
  }

}
