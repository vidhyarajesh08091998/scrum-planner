import { Component, Input } from '@angular/core';

export interface Story {
  title: string;
  points: number;
}
@Component({
  selector: 'app-sprint-display',
  templateUrl: './sprint-display.component.html',
})
export class SprintDisplayComponent {
  @Input() selectedStories: Story[] = [];
}
