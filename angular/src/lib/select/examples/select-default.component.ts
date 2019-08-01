import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'example-select-default',
  template: `

  <div class="medium-8 columns">
    <md-select
      [options]="people"
      [(ngModel)]="person"
      className="test class"
      placeholder="Select Item Here"
      optionLabel="name"
      [containerStyle]="{width: '80%'}"
      containerClass="testContainerClass"
      (handleChange)="onChange($event)"
    >
    </md-select>
  </div>

   <p> ngModel: {{person ? person.name : 'none'}} <p>
  `,
  styles: []
})
export class SelectDefaultComponent {
  // optonLabel is the key name which will appear as the select option label to show
  person;
  people;
  inputForm;

  constructor(private fb: FormBuilder) {

    this.people = [
      {name: 'John Jones', initial: 'JJ'},
      {name: 'Lebron James', initial: 'LJ'},
      {name: 'Dwayne Wade', initial: 'DW'},
      {name: 'John Paul Jones', initial: 'JPJ'},
      {name: 'Hannah Brown', initial: 'HB'},
      {name: 'Kobe Bryant', initial: 'KB'},
      {name: 'Tim Duncan', initial: 'TD'},
      {name: 'Reggie Miller', initial: 'RM'},
      {name: 'Steph Curry', initial: 'SC'},
      {name: 'Steve Nash', initial: 'SN'},
      {name: 'James Harden', initial: 'JH'}
    ];

    this.inputForm = this.fb.group({
      selectControl: ['', [Validators.required]],
    });

    console.info(this.inputForm);
  }

  onChange(e) {
    console.info(e.value);
  }
}
