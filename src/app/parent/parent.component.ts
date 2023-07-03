import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  data : any='';
  registrationForm!: FormGroup;
  childinfo: any;
constructor( private fb:FormBuilder){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.registrationForm= this.fb.group({
    name: ['', Validators.required],
    password:['', Validators.required],
  });

}
onSubmit(){
 this.data= this.registrationForm.getRawValue();
}


childData(info: any){
this.childinfo=info;
}
}
