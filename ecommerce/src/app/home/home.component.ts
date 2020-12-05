import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // productos: any = []
  productos_async;

  constructor(private prdServ: ProductosService) {
    // this.prdServ.getAll()
    //   .subscribe(data => {
    //     console.log(data);
    //     this.productos = data;
    //   })
      // Con pipes
    this.productos_async = this.prdServ.getAll();
  }


  ngOnInit(): void {
  }

}
