import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { KategoriListComponent } from '../kategori/kategori-list/kategori-list.component';
import { KategoriAddComponent } from '../kategori/kategori-add/kategori-add.component';
import { ProdukListComponent } from '../produk/produk-list/produk-list.component';
import { ProdukAddComponent } from '../produk/produk-add/produk-add.component';
import { ProdukEditComponent } from '../produk/produk-edit/produk-edit.component';
import { KategoriEditComponent } from '../kategori/kategori-edit/kategori-edit.component';

const routes: Routes = [
  {
    path: 'kategori',
    component: KategoriListComponent,
    data: { title: 'Daftar Kategori' }
  },
  {
    path: 'kategori/create',
    component: KategoriAddComponent,
    data: { title: 'Tambah Kategori' }
  },
  {
    path: 'kategori/edit/:id',
    component: KategoriEditComponent,
    data: { title: 'Ubah Kategori' }
  },
  {
    path: '',
    component: KategoriListComponent,
    data: { title: 'List Title' }
  },
  {
    path: 'produk',
    component: ProdukListComponent,
    data: { title: 'Daftar Produk' }
  },
  {
    path: 'produk/create',
    component: ProdukAddComponent,
    data: { title: 'Tambah Produk' }
  },
  {
    path: 'produk/edit/:id',
    component: ProdukEditComponent,
    data: { title: 'Ubah Produk' }
  },
  {
    path: '',
    component: KategoriListComponent,
    data: { title: 'List Title' }
  }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})
export class AppRouteModule { }
