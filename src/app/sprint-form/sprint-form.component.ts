import { Component, Output, EventEmitter } from '@angular/core';
import { ScrumPlannerService } from '../scrum-planner.service';

@Component({
  selector: 'app-sprint-form',
  templateUrl: './sprint-form.component.html',
})
export class SprintFormComponent {
  sprintCapacity =0;
  selectedStories:any=[]
  constructor(
    private scrumSerivce : ScrumPlannerService
  ){

  }
  onAutoSelect() {
  this.selectedStories =   this.scrumSerivce.autoSelectStories(this.sprintCapacity)
  }

  onClearAll() {
    this.scrumSerivce.clearStories()
  }

  onClearSelected() {
    this.selectedStories=[];
  }
}
