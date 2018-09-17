import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent }      from '../inicio/inicio.component';
import { SobreComponent }       from '../sobre/sobre.component';
import { ContactoComponent }    from '../contacto/contacto.component';
import { ProductosDonmundyComponent }    from '../productos-donmundy/productos-donmundy.component';
import { ProductosFrescosComponent }     from '../productos-frescos/productos-frescos.component'

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'productos-frescos', component: ProductosFrescosComponent },
  { path: 'productos-donmundy', component: ProductosDonmundyComponent },
  { path: 'contacto', component: ContactoComponent }

];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
  
})
export class AppRoutingModule { }


