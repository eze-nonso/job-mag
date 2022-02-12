import {Component, Input} from '@angular/core';
import {JobDetail} from "src/app/modules/main/models/job-detail.model";

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input() job!: JobDetail;
  @Input() expandDetail = false;

  public get textContainerFlex() {
    return this.expandDetail ? 'auto' : '2 1 70%';
  }

  public get expandedDetailGap() {
    return this.expandDetail ? '8px' : '';
  }
}
