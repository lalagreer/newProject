import { CarouselModule } from 'ngx-bootstrap/carousel'
import { Component, OnInit } from '@angular/core';
import { ImageService} from './shared/image.service';
import { ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component({
  selector: 'image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css'],
  providers:[ImageService]
})
export class ImageDetailComponent implements OnInit {
  image:any
  constructor(private imageService: ImageService, private route: ActivatedRoute, private location: Location) {}

  cancel() {
    this.location.back();
  }
  
  ngOnInit(){
    this.image=this.imageService.getImage(
      +this.route.snapshot.params['id'] // this provides initial value of the route papameter (+ sign converts id to number..)
    ) 
  }  
}
