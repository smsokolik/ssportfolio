import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { DesignComponent } from './design/design.component';
import { DevelopmentComponent } from './development/development.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceComponent } from './experience/experience.component';
import { MaterialModule } from './materialModule';
import { AnimationComponent } from './animation/animation.component';
import { VideoComponent } from './video/video.component';
import { InfographicsComponent } from './infographics/infographics.component';
import { MobileComponent } from './mobile/mobile.component';
import { EmailComponent } from './email/email.component';
import { SocialComponent } from './social/social.component';
import { DebateComponent } from './debate/debate.component';
import { ShortsComponent } from './shorts/shorts.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    DesignComponent,
    DevelopmentComponent,
    ExperienceComponent,
    AnimationComponent,
    VideoComponent,
    InfographicsComponent,
    MobileComponent,
    EmailComponent,
    SocialComponent,
    DebateComponent,
    ShortsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
