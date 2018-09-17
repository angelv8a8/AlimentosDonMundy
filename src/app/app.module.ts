import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SobreComponent } from './sobre/sobre.component';
import { ProductosDonmundyComponent } from './productos-donmundy/productos-donmundy.component';
import { ProductosFrescosComponent } from './productos-frescos/productos-frescos.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreComponent,
    ProductosDonmundyComponent,
    ProductosFrescosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
