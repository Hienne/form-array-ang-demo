import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      payInterestNum: [null],
      dates: this.fb.array([]),
      skills: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.myForm.get('payInterestNum')?.valueChanges.subscribe(data => {
      if (!data) {
        return;
      }

      this.dates.clear();
      for (let i = 0; i < parseInt(data); i++) {
        let control = new FormControl('')
        let control2 = this.fb.group({
          name: [''],
          age: ['']
        })

        this.dates.push(control);
        this.skills.push(control2);
      }
      
    })
  }

  get dates() {
    return this.myForm.controls['dates'] as FormArray;
  }

  get skills() {
    return this.myForm.controls['skills'] as FormArray;
  }
}
