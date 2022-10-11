import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {
  cities: any = [];
  token = localStorage.getItem('token');

  constructor(private http: HttpClient,
              private router: Router,
              public toastController: ToastController,
              public alertController: ToastController) { }

  ngOnInit() {
    console.log("toke: ", this.token);
    // localStorage.removeItem('token'); //Para borrar el token
    // localStorage.clear(); //Para borrar todo el localStorage
    this.getCities().subscribe(res => {
      console.log("Res", res);
      this.cities = res;
    });
  }

  getCities(){
    return this.http
    .get('../../assets/archivos/cities.json')
    .pipe(map((res: any) => {
      return res.data;
    }))
  }

  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Ciudad Seleccionada',
      duration: 500,
      position: "bottom",
    });
    toast.present()
  }

  async presentAlert1(city: string){
    const alert = await this.alertController.create({
      header: "Borrar Ciudad: ", 
      message: "¿Estas seguro de eliminar la ciudad de " + city +"?", 
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log("No cancelar");
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log("Eliminada");
          }
        }
      ],
      color: "danger", 
      position: "top"
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  home(){
    this.router.navigate(['/home'])
  }
}
