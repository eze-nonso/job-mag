import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  formData = [{
    placeholder: 'Select Job role', formType: 'select', name: 'jobRole', flexBasis: '0 1 161px'
  }, {
    placeholder: 'Select required skills', formType: 'select', name: 'requiredSkills', flexBasis: '0 1 187px'
  }, {
    placeholder: 'Select experience level', formType: 'select', name: 'experienceLevel', flexBasis: '0 1 209px'
  }, {
    placeholder: 'Search location', formType: 'input', name: 'searchLocation', flexBasis: '0 1 157px'
  }, {
    placeholder: 'Select Job Type', formType: 'select', name: 'jobType', flexBasis: '0 1 161px'
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
