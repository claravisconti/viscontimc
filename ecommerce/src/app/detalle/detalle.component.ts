import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  producto_async;

  constructor(private prdServ: ProductosService) {
 
      this.producto_async = this.prdServ.get();
  }

  ngOnInit(): void {
  }

}
