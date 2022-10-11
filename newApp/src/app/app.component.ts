import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'Home' }, 
    { title: 'Galery', url: '/galery', icon: 'images'},
    { title: 'customers', url: '/customers', icon: 'people'},
    { title: 'cities', url: '/cities', icon: 'location'},
    { title: 'login', url: '/login', icon: 'log-in'},
  ];
  constructor(){}  
}
