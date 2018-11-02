import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'q';

@Component({
  selector: 'app-kategori-add',
  templateUrl: './kategori-add.component.html',
  styleUrls: ['./kategori-add.component.css']
})
export class KategoriAddComponent implements OnInit {
  public kategoriForm: FormGroup;
  title: string = "Form Tambah Kategori";
  public kategori: any = {};
  public submitted = false;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.kategoriForm = this.formBuilder.group({
      nama_kategori: ['', Validators.required]
    });
    
  }
  get form() { return this..controls; }

  onSubmit() {

    console.log(this.kategoriForm);
    this.submitted = !this.submitted;

    // stop here if form is invalid
    if (this.kategoriForm.invalid) {
      return;
    }

    this.toastr.success('Data Berhasil Di Simpan!', 'Pesan', {
      closeButton: true,
      timeOut: 3000
    });
    
  }
}
