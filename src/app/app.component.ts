import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponent } from './components/image/image.component';
import { DividerComponent } from './components/divider/divider.component';
import { MenuComponent } from './layouts/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageComponent, DividerComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'resume';

  profileImageSrc: string = '/assets/profile.jpeg';
  role: string = 'System Analyst'
  firstname: string = 'Wongsathorn'
  lastname: string = 'Phorit'
}
