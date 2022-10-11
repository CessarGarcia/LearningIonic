import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {
  id: any;
  finalId: number;
  cities: any = [];
  city: string;
  img: string;
  desc: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.finalId = this.id -1;
    console.log("id", this.id);
    
    this.getCities().subscribe(res => {
      console.log("Res", res);
      this.cities = res;
      this.city = this.cities[this.finalId].city;
      this.img = this.cities[this.finalId].img;
      this.desc = this.cities[this.finalId].desc;
    });
  }

  getCities(){
    return this.http
    .get('../../assets/archivos/cities.json')
    .pipe(map((res: any) => {
      return res.data;
    }))
  }

}
