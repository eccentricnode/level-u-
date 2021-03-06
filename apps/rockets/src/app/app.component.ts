import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rockets';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/rockets', icon: 'format_list_bulleted', title: 'Rockets List' },
  ]
}
