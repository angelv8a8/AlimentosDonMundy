import { Component, OnInit } from '@angular/core';
import { PRODUCTOS_FRESCOS } from './productosFrescos';
@Component({
  selector: 'app-productos-frescos',
  templateUrl: './productos-frescos.component.html',
  styleUrls: ['./productos-frescos.component.scss']
})
export class ProductosFrescosComponent implements OnInit {

  productos = PRODUCTOS_FRESCOS;

  constructor() { }

  ngOnInit() {
  }

}
