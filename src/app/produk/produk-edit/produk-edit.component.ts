import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdukService } from 'src/app/api/produk.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Kategori } from 'src/app/model/kategori';
import { KategoriService } from 'src/app/api/kategori.service';

@Component({
  selector: 'app-produk-edit',
  templateUrl: './produk-edit.component.html',
  styleUrls: ['./produk-edit.component.css']
})
export class ProdukEditComponent implements OnInit {

  public produkForm: FormGroup;
  title: string = "Form Edit Produk";
  public produk: any = {};
  public submitted = true;
  public isLoadingResults = true;
  public kategoris: Kategori[] = [];
  constructor(
    private kategoriService: KategoriService, private router: Router, private route: ActivatedRoute,
    private produkService: ProdukService,
    private formBuilder: FormBuilder, private toastr: ToastrService) { }

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
    this.produkService.detailProduk(this.route.snapshot.params['id'])
      .subscribe(res => {
        this.produk = res;
        this.produk.kategori_id = res.kategori._id;
        console.log(res);

        this.isLoadingResults = false;
      }, err => {
        this.toastr.error('Data Tidak DiTemukan', 'Pesan', {
          closeButton: true,
          timeOut: 3000
        });
        setTimeout(() => {
          this.router.navigate(['/produk']);
        }, 1000);
      });
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

    this.produkService.editProduk(this.route.snapshot.params['id'], this.produk)
      .subscribe(res => {
        console.log(res);
        this.produkForm.reset();
        this.produkService.detailProduk(this.route.snapshot.params['id'])
          .subscribe(res => {
            this.produk = res;
            console.log(res);
            this.submitted = true;
            this.isLoadingResults = false;
            this.toastr.success('Data Berhasil Di Simpan!', 'Pesan', {
              closeButton: true,
              timeOut: 3000
            });
            this.isLoadingResults = false;
          }, err => {
            this.toastr.error('Data Tidak DiTemukan', 'Pesan', {
              closeButton: true,
              timeOut: 3000
            });
            this.router.navigate(['/produk']);
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
