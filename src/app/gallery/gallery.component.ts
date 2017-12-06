import { ImageService } from '../image-detail/shared/image.service';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  title= 'Photos'
  @Input() filterBy?: string = 'all'
  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
   }

   ngOnChanges(){
     this.visibleImages = this.imageService.getImages();
   }
}
