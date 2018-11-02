import { Component, OnInit } from '@angular/core';
import { Kategori } from 'src/app/model/kategori';
import { KategoriService } from 'src/app/api/kategori.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-kategori-list',
  templateUrl: './kategori-list.component.html',
  styleUrls: ['./kategori-list.component.css']
})
export class KategoriListComponent implements OnInit {

  displayedColumns: string[] = ['nama_kategori', 'createdAt', 'updatedAt'];
  public kategoris: Kategori[] = [];

  title: string = "List Kategori";

  public isLoadingResults = true;

  constructor(private kategoriService: KategoriService,private toastr: ToastrService) { }

  ngOnInit() {
    this.kategoriService.getKategoris()
      .subscribe(res => {
        this.kategoris = res;
        console.log(res);
        this.isLoadingResults = false;
        // this.toastr.success('Hello world!', 'Toastr fun!',{
        //   closeButton:true,
        //   timeOut:3000
        // });
      }, err => {
        // console.log(err);
      });
  }

}
