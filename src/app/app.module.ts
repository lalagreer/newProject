import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { appRoutes } from './../routes';
import { ImageFilterPipe } from './image-detail/shared/filter.pipe';
import { ImageService } from './image-detail/shared/image.service';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { AboutComponent } from './about/about.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
