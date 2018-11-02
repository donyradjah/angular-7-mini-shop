import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
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
    NgSelectModule,
    BrowserModule,
    AppRouteModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
