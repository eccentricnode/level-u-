import { Component } from '@angular/core';

@Component({
  selector: 'level-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto';
  links = [
    { path: '/login', icon: 'home', title: 'Login' },
    { path: '/crypto', icon: 'format_list_bulleted', title: 'Crypto Coins' }
  ]
}
