import { Component, OnInit } from '@angular/core';
import { KategoriService } from 'src/app/api/kategori.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProdukService } from 'src/app/api/produk.service';
import { Kategori } from 'src/app/model/kategori';

@Component({
  selector: 'app-produk-add',
  templateUrl: './produk-add.component.html',
  styleUrls: ['./produk-add.component.css']
})
export class ProdukAddComponent implements OnInit {

  public produkForm: FormGroup;
  title: string = "Form Tambah Produk";
  public produk: any = {};
  public submitted = true;
  public isLoadingResults = true;
  public kategoris: Kategori[] = [];
  constructor(private kategoriService: KategoriService,
    private produkService: ProdukService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

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
    this.produkForm = this.formBuilder.group({
      nama_produk: ['', Validators.required],
      kategori_id: ['', Validators.required]
    });
    this.isLoadingResults = false;
  }

  get form() { return this.produkForm.controls; }

  onSubmit() {
    this.isLoadingResults = true;

    if (!this.submitted) {
      return;
    }

    this.submitted = false;

    // stop here if form is invalid
    if (this.produkForm.invalid) {
      return;
    }
  
      this.submitted = true;
      this.produkService.addProduk(this.produk)
        .subscribe(res => {
          console.log(res);
          this.produkForm.reset();
          this.submitted = true;
          this.isLoadingResults = false;
          this.toastr.success('Data Berhasil Di Simpan!', 'Pesan', {
            closeButton: true,
            timeOut: 3000
          });
        }, err => {
          this.submitted = true;
          this.isLoadingResults = false;
          this.toastr.error('Data Gagal Di Simpan!', 'Pesan', {
            closeButton: true,
            timeOut: 3000
          });
        });
  }

}
