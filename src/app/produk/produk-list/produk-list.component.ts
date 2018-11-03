import { Component, OnInit } from '@angular/core';
import { Produk } from 'src/app/model/produk';
import { ProdukService } from 'src/app/api/produk.service';
import { AppComponent } from 'src/app/app.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private router: Router, private route: ActivatedRoute,
    private produkService: ProdukService, private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.produkService.getProduks()
      .subscribe(res => {
        console.log(res);
        this.isLoadingResults = false;
        this.produks = res;
      }, err => {
        // console.log(err);
      });
  }

  deleteProduk(produk_id) {
    this.isLoadingResults = true;
    if (confirm("Are you sure to delete ? ")) {
      this.produkService.deleteProduk(produk_id)
        .subscribe(res => {
          console.log(res);
          this.toastr.success('Data Berhasil Di Hapus!', 'Pesan', {
            closeButton: true,
            timeOut: 3000
          });
          this.produkService.getProduks()
            .subscribe(res => {
              console.log(res);
              this.isLoadingResults = false;
              this.produks = res;
            }, err => {
              // console.log(err);
            });
        }, err => {
          this.toastr.error('Data Gagal DI Hapus', 'Pesan', {
            closeButton: true,
            timeOut: 3000
          });
          this.router.navigate(['/produk']);
        });
    } else {
      this.isLoadingResults = false;
    }
  }
}
