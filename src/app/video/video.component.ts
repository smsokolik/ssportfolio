import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class SampleComponent implements OnInit {
  @ViewChild('video') matVideo: MatVideoComponent;
  video: HTMLVideoElement;
 
  constructor(private renderer: Renderer2) { }
 
  ngOnInit(): void {
    this.video = this.matVideo.getVideoTag();
 
    // Use Angular renderer or addEventListener to listen for standard HTML5 video events
    
    this.renderer.listen(this.video, 'ended', () => console.log('video ended'));
    this.video.addEventListener('ended', () => console.log('video ended'));
  }
}