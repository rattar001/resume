import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'rsm-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuList: any[] = [
    { title: 'Overview', path: 'overview', active: false, disable: false },
    { title: 'Milestone', path: 'milestone', active: false, disable: false },
    { title: 'Showcase', path: 'showcase', active: false, disable: false }
  ]
  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        if ('url' in event) {
          let url: string = event.url.split('/')[1];
          let menu = this.menuList.find(m => m.path == url)
          if (menu) {
            this.onMenuClicked(menu)
          }
        }
      })
  }

  onMenuClicked(menu: any) {
    this.menuList.map(m => m.active = (m.title == menu.title))
    this.router.navigate([menu.path])
  }
}
