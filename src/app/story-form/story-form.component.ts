import { Component, Output, EventEmitter } from '@angular/core';
import { ScrumPlannerService } from '../scrum-planner.service';

export interface Story {
  title: string;
  points: any;
}
@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
})
export class StoryFormComponent {
  title = '';
  points = null;

  constructor(
    private scrumSerivce : ScrumPlannerService
  ){

  }
  @Output() storyAdded = new EventEmitter<Story>();

  addStory() {
    if (this.title && this.points) {
      const newStory: Story = { title: this.title, points: this.points };
      this.scrumSerivce.addStory(newStory);
    //  this.storyAdded.emit(newStory);
      this.title = '';
      this.points = null;
    }else  {
        alert("Please add story and points");
        return;
    }
  }
}
