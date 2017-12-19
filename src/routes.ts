import { AboutComponent } from './app/about/about.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { Routes, RouterLink, RouterOutlet, RouterModule} from '@angular/router';

export const appRoutes:Routes = [
    {path: "", component: GalleryComponent },
    {path: "image/:id", component: ImageDetailComponent },
    {path: "gallery", redirectTo: "/gallery", pathMatch: 'full'},
    {path: "about", component: AboutComponent},
    
]