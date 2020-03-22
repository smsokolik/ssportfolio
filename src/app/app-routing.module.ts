import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { DevelopmentComponent } from './development/development.component';
import { StoryComponent } from './story/story.component';
import { ExperienceComponent } from './experience/experience.component';
import { AnimationComponent } from './animation/animation.component';
import { VideoComponent } from './video/video.component';
import { InfographicsComponent } from './infographics/infographics.component';
import { MobileComponent } from './mobile/mobile.component';
import { EmailComponent } from './email/email.component';
import { SocialComponent } from './social/social.component';
import { DebateComponent } from './debate/debate.component';
import { ShortsComponent } from './shorts/shorts.component';

const routes: Routes = [
  {path: 'story', component: StoryComponent},
  {path: 'design', component: DesignComponent},
  {path: 'development', component: DevelopmentComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'animation', component: AnimationComponent},
  {path: 'video', component: VideoComponent},
  {path: 'infographics', component: InfographicsComponent},
  {path: 'mobile', component: MobileComponent},
  {path: 'email', component: EmailComponent},
  {path: 'social', component: SocialComponent},
  {path: 'debate', component: DebateComponent},
  {path: 'shorts', component: ShortsComponent},
  {path: '**', redirectTo: '/story'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
