import {Component} from '@angular/core';
import {jobs} from "src/app/modules/main/mocks/mock-jobs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  jobs = jobs;
}

