import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Array<any> = []
  images = [
    { img: "../assets/images/1.jpg" },
    { img: "../assets/images/2.jpg" },
    { img: "../assets/images/3.jpg" }
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "dots": true,
    "infinite": true
  };

  showHideSideBar: boolean = false;
  constructor() {this.items = [
    { name: 'assets/images/1.jpg' },
    { name: 'assets/images/2.jpg' },
    { name: 'assets/images/2.jpg' }
  ] }

  title = 'owl-carousel-with-angular6';
  mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  myCarouselImages = [1,2,3,4,5,6].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  mySlideOptions={items: 1, dots: true, nav: false};
  myCarouselOptions={items: 3, dots: true, nav: true};


  onShowSideBareChange(showHideSideBar){
    this.showHideSideBar=showHideSideBar;
  }
  ngOnInit() {
  }

}
