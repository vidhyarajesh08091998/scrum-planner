import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoryListComponent } from './story-list/story-list.component';
import { SprintFormComponent } from './sprint-form/sprint-form.component';
import { SprintDisplayComponent } from './sprint-display/sprint-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/add-story', pathMatch: 'full' }, // Default route
  { path: 'add-story', component: StoryFormComponent },
  { path: 'story-list', component: StoryListComponent },
  { path: 'sprint-planner', component: SprintFormComponent },
  { path: 'sprint-display', component: SprintDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
