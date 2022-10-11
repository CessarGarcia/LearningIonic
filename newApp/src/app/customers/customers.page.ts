import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  home(){
    this.router.navigate(['/home'])
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
