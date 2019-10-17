import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.css']
})
export class UserBasicInfoComponent implements OnInit {

  maritalStatus = {
    single: false,
    married: false,
    widowed : false
  }

  gender = {
    male: false,
    female: false,
    nonBinary : false
  }
   
    single = new FormControl();
    married = new FormControl();
    widowed = new FormControl();
    male = new FormControl();
    female = new FormControl();
    nonBinary = new FormControl();
    

  constructor(private formBuilder: FormBuilder) { }


  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      prefix: ['', []],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      suffix: [''],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
      single: [this.single, Validators.required],
      married: [this.married, Validators.required],
      widowed: [this.widowed, Validators.required],
      gender: ['', Validators.required],
      male: [this.male, Validators.required],
      female: [this.female, Validators.required],
      nonBinary: [this.nonBinary, Validators.required],
      contactNumber: ['', Validators.required],
    
    });
  }



  onChangePrefix(event: Event){}

  storeValueToLocalStorage(event: Event){
    const targetId = (event.target as Element).id;
    console.log( "CLicked on the form : " + targetId);
      if(targetId == 'single'){
          this.maritalStatus.single = true;
          this.maritalStatus.married = false;
          this.maritalStatus.widowed = false;
      }
      if(targetId == 'married'){
        this.maritalStatus.single = false;
        this.maritalStatus.married = true;
        this.maritalStatus.widowed = false;
    } 
    if(targetId == 'widowed'){
      this.maritalStatus.single = false;
      this.maritalStatus.married = false;
      this.maritalStatus.widowed = true;
  }
  if(targetId == 'male'){
    this.gender.male = true;
    this.gender.female = false;
    this.gender.nonBinary = false;
}
if(targetId == 'female'){
  this.gender.male = false;
  this.gender.female = true;
  this.gender.nonBinary = false;
} 
if(targetId == 'non-binary'){
this.gender.male = false;
this.gender.female = false;
this.gender.nonBinary = true;
}
  }

  getMaritalStatusActive(){
    return {'marital-status-active' : true};
  }

  hasInValidValue(fName: string){
    return false;
  }

  getFieldDisplayClass(fName: string){

  }

  prevPage(){}

  nextPage(){}

}
