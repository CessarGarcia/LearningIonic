import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})
export class GaleryPage implements OnInit {
  users: any =[];
  isPrivate: boolean; 
  searchedUser: any;

  constructor(
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.isPrivate = true;
    this.getUsers().subscribe(res => {
      console.log("Res", res);
      this.users = res;
      this.searchedUser = this.users;
    });
  }

  getUsers(){
    return this.http
    .get('../../assets/archivos/users.json')
    .pipe(map((res: any) => {
      return res.data;
    }))
  }

  searchUsers(event){
    const text = event.target.value;
    this.searchedUser = this.users;
    if(text && text.trim() != ''){
      this.searchedUser = this.searchedUser.filter((user: any) => {
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getUsers();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  home(){
    this.router.navigate(['/home'])
  }
}
