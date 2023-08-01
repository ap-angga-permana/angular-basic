import {Component, EventEmitter, Output} from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  menuItems: MenuItem[] = [
    {title: 'Basic Input Output', route: '/basic-input-output'},
    ];

}
