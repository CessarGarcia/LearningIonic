import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
})
export class ProductoDetallePage 
// implements OnInit 
{
//   total = 0;
//   forSale : boolean; 
//   cart = []; 

//   constructor(private cartService: CartService,
//     private router: Router) { }

//   ngOnInit() {
//     this.forSale = true;
//     //Obtenemos el Id del producto seleccionado
//     this.id = this.activatedRoute.snapshot.paramMap.get("id");

//     this.cart = this.cartService.getCart();

//     //Realizamos peticion con el ID para obtener la informacion del producto
//     this.configService.getProducto(this.id).subscribe((res) =>{
//       this.productos= res;
//       console.log("Respuesta Prod: ", this.productos);
//       if(this.productos.precio == "0.00"){
//         this.forSale = true;
//         console.log("forSale2", this.forSale);
//       }
//       this.links = this.productos.links;
//       this.name = this.productos.nombre; 
//       this.categoria = this.productos.categorias;
//       this.tipo = this.productos.tipo;
//       this.descripcion = this.productos.descripcion;
//       this.img = this.productos.imgs;
//     });
//     this.quantity = 1
//     this.price = 3
//     this.total = this.price
//   }

//   addCart(id, quantity){
//     this.product = {
//       "id": id,
//       "quantity": quantity,
//       "name": this.name,
//       "price": this.price
//     }
//     this.cartService.addProduct(this.product);
//     console.log("product: ", this.product);
//   }

//   addItem(){
//     if(this.quantity > 0){
//       this.quantity += 1;
//       this.total = this.price * this.quantity;
//       console.log("quantityAdd", this.quantity)
//       console.log("price", this.price);
//     }
//   }

//   restItem(){
//     if(this.quantity > 1){
//       this.quantity -= 1;
//       this.total = this.price = this.quantity;
//       console.log("quantityRest" , this.quantity);
      
//     }
//   }

}
