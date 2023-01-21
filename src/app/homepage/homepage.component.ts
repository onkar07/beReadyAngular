import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../common-services/api-services.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  imagePath_1 = ''
  imagePath_2 = ''
  imagePath_3 = ''
  logo = ''
  animaker = ''
  constructor(private apiService: ApiServicesService, private route: Router) {
    this.imagePath_1 = 'assets/img/1.jpeg'
    this.imagePath_2='assets/img/2.jpeg'
    this.imagePath_3='assets/img/3.jpeg'
    this.logo = 'assets/img/uni_logo.png'
    this.animaker = 'assets/videos/ez.mp4'
   }

  ngOnInit(): void {
  
  }
}
