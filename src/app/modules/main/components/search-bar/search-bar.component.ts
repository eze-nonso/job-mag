import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  formData = [{
    placeholder: 'Select Job role', formType: 'select', name: 'jobRole'
  }, {
    placeholder: 'Select required skills', formType: 'select', name: 'requiredSkills'
  }, {
    placeholder: 'Select experience level', formType: 'select', name: 'experienceLevel'
  }, {
    placeholder: 'Search location', formType: 'input', name: 'searchLocation'
  }, {
    placeholder: 'Select Job Type', formType: 'select', name: 'jobType'
  }];

  public searchParam!: FormGroup;
  options = ['option1', 'option2', 'option3', 'option4'];

  ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
    let form: { [key: string]: FormControl } = {};
    this.formData.forEach(item => {
      form[item.name] = new FormControl();
    });
    this.searchParam = new FormGroup(form);
  }
}
