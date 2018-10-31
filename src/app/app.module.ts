import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KategoriListComponent } from './kategori/kategori-list/kategori-list.component';
import { KategoriAddComponent } from './kategori/kategori-add/kategori-add.component';
import { KategoriEditComponent } from './kategori/kategori-edit/kategori-edit.component';
import { ProdukListComponent } from './produk/produk-list/produk-list.component';
import { ProdukAddComponent } from './produk/produk-add/produk-add.component';
import { ProdukEditComponent } from './produk/produk-edit/produk-edit.component';
import { AppRouteModule } from './app-route/app-route.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    KategoriListComponent,
    KategoriAddComponent,
    KategoriEditComponent,
    ProdukListComponent,
    ProdukAddComponent,
    ProdukEditComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
