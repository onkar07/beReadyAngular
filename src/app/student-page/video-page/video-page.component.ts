import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { asyncScheduler } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiServicesService } from 'src/app/common-services/api-services.service';
@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {
  apiLoaded = false;
  videoSource:string=''
  questionList:any = []
  safeSrc:any
  constructor(public activatedRoute:ActivatedRoute, private apiService: ApiServicesService, private sanitizer: DomSanitizer) { }
  source:any
  ngOnInit(): void {
    this.source=this.activatedRoute.snapshot.queryParamMap.get('queId')
    console.log(this.source)
    this.apiService.getQuestions(this.source).subscribe((res:any)=>{
      this.questionList = res.data
      console.log(this.questionList)
    })
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  getVideo(link:string){
    this.ngOnInit()
    this.apiLoaded=false
    this.videoSource= `https://www.youtube.com/embed/${link}?controls=0&showinfo=0&modestbranding=0&color=red`;
    console.log(this.videoSource)
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSource);
  } 
}
