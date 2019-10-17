import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  steps = [
    {id: 'basicInfo', order: 1, name: 'About me'},
    {id: 'contactInfo', order: 2, name: 'My Address'},
    {id: 'additionalInfo', order: 3, name: 'AAA Information'}];
  @Input() activeStepId: string;

  constructor() {
  }

  ngOnInit() {
  }

  getDisplayClass(stepId: string): string {
    if (this.activeStepId === stepId) {
      return 'current';
    }
    const activeStep = this.steps.find(step => step.id === this.activeStepId);
    const thisStep = this.steps.find(step => step.id === stepId);
    if (activeStep && thisStep && thisStep.order < activeStep.order) {
      return 'finished';
    } else {
      return '';
    }
  }
}