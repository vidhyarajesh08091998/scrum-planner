import { Component, Input, OnInit } from '@angular/core';
import { ScrumPlannerService } from '../scrum-planner.service';
export interface Story {
  title: string;
  points: number;
}
@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
})
export class StoryListComponent  implements OnInit{
  
  //@Input() stories: Story[] = [];
  stories:any=[]
  constructor(
    private scrumSerivce : ScrumPlannerService
  ){

  }
  ngOnInit(): void {

this.stories = this.scrumSerivce.getStories();
    
  }
}
