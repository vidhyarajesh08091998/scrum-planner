import { Injectable } from '@angular/core';

export interface Story {
  title: string;
  points: number;
}
@Injectable({
  providedIn: 'root'
})


export class ScrumPlannerService {

  constructor() { }

   private stories: Story[] = [];
  private selectedStories: Story[] = [];

  addStory(story: Story): boolean {
    if (!this.stories.find(s => s.title === story.title)) {
      this.stories.push(story);
      return true;
    }
    return false;
  }

  getStories(): Story[] {
    return [...this.stories];
  }

  autoSelectStories(sprintCapacity: number): Story[] {
    this.selectedStories = [];
    let totalPoints = 0;

    for (const story of this.stories) {
      if (totalPoints + story.points <= sprintCapacity) {
        this.selectedStories.push(story);
        totalPoints += story.points;
      }
    }

    return [...this.selectedStories];
  }

  clearStories(): void {
    this.stories = [];
  }

  clearSelectedStories(): void {
    this.selectedStories = [];
  }
}
