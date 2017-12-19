import { AboutComponent } from './../about/about.component';
import { GalleryComponent } from './../gallery/gallery.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    aboutLink = 'About ';
    galleryLink= 'Gallery ';

  constructor() { }

  ngOnInit() {
  }

}
