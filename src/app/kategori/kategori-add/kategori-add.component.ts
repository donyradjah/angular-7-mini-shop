import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { KategoriService } from 'src/app/api/kategori.service';

@Component({
  selector: 'app-kategori-add',
  templateUrl: './kategori-add.component.html',
  styleUrls: ['./kategori-add.component.css']
})
export class KategoriAddComponent implements OnInit {
  public kategoriForm: FormGroup;
  title: string = "Form Tambah Kategori";
  public kategori: any = {};
  public submitted = true;
  public isLoadingResults = true;
  constructor(private kategoriService: KategoriService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.kategoriForm = this.formBuilder.group({
      nama_kategori: ['', Validators.required]
    });
    this.isLoadingResults = false;
  }
  get form() { return this.kategoriForm.controls; }

  onSubmit() {
    this.isLoadingResults = true;

    if (!this.submitted) {
      return;
    }

    this.submitted = false;

    // stop here if form is invalid
    if (this.kategoriForm.invalid) {
      return;
    }
    this.kategoriService.addKategori(this.kategori)
      .subscribe(res => {
        console.log(res);
        this.kategoriForm.reset();
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
