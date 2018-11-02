import { Component, OnInit } from '@angular/core';
import { Produk } from 'src/app/model/produk';
import { ProdukService } from 'src/app/api/produk.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-produk-list',
  templateUrl: './produk-list.component.html',
  styleUrls: ['./produk-list.component.css']
})
export class ProdukListComponent implements OnInit {

  displayedColumns: string[] = ['nama_produk', 'createdAt', 'updatedAt'];
  public produks: Produk[] = [];

  title: string = "List Produk";
  
  isLoadingResults = true;

  constructor(private produkService: ProdukService) { }

  ngOnInit() {
    
    this.produkService.getProduks()
      .subscribe(res => {
        this.produks = res;
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

}
