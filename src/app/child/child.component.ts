import { FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  rawData: any;
  constructor( private fb: FormBuilder){

  }
@Input() data: any;

 registrationForm= this.fb.group({
  name:['', Validators.required],
  password: ['',Validators.required]
})
@Output() notify: EventEmitter<any>= new EventEmitter<any>();

childData(){
this.rawData=this.registrationForm.getRawValue();
  this.notify.emit(this.rawData);
}
// ngOnChanges(changes: SimpleChanges): void {
//   console.log(this.data,'')
//   console.log(this.rawData);

// }

}
