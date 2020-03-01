import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { DevelopmentComponent } from './development/development.component';
import { StoryComponent } from './story/story.component';
import { ExperienceComponent } from './experience/experience.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  {path: 'story', component: StoryComponent},
  {path: 'design', component: DesignComponent},
  {path: 'development', component: DevelopmentComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'animation', component: AnimationComponent},
  {path: '**', redirectTo: '/story'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
