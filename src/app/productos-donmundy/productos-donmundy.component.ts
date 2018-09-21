import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-donmundy',
  templateUrl: './productos-donmundy.component.html',
  styleUrls: ['./productos-donmundy.component.css']
})
export class ProductosDonmundyComponent implements OnInit {

  base = 'assets/img/productos/banners/';   
  productos  = [
    {name:'Chimichurri', type:'Bolsa doypack con válvula', imgUrl:this.base + 'chimichurri.png'},
    {name:'Chimichurri', type: 'Frasco de vidrio' , imgUrl:this.base + 'chimichurri_frasco.png'},
    {name:'Chimichurri', type: 'Galón', imgUrl:this.base + 'chimichurri_galon.png'},
    {name:'Jalapeño en escabeche', type: 'Bolsa doypack con zipper', imgUrl:this.base + 'jalapenio_bolsa.png'},
    {name:'Cebollitas en vinagre', type: 'Bolsa doypack con zipper', imgUrl:this.base + 'cebollitas_vinagre.png'},
    {name:'Ensalada de verduras', type: 'Bolsa doypack con zipper', imgUrl:this.base + 'ensalada_verduras.png'},
    {name:'Chile habanero', type: 'Frasco de vidrio', imgUrl:this.base + 'chile_habanero.png'},
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
