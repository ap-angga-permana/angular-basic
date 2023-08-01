import {Component} from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: []
})
export class BasicComponent {

  // basic
  name: string = 'John Doe'


  // use model
  model = {
    name: 'John Doe',
    address: 'Lebak bulus'
  }

  // contoh penggunaan ngModel app-input-with-accessor
  accessorName: string = 'John Doe'

  changeName(value: any) {
    // do another
    this.name = value;
  }

  onClick() {
    alert("Hello World!")
  }
}
