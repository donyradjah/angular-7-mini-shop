import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KategoriService } from 'src/app/api/kategori.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kategori-edit',
  templateUrl: './kategori-edit.component.html',
  styleUrls: ['./kategori-edit.component.css']
})
export class KategoriEditComponent implements OnInit {

  public kategoriForm: FormGroup;
  title: string = "Form Edit Kategori";
  public kategori: any = {};
  public submitted = true;
  public isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute,
    private kategoriService: KategoriService,
    private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.kategoriService.detailKategori(this.route.snapshot.params['id'])
      .subscribe(res => {
        this.kategori = res;
        console.log(res);

        this.isLoadingResults = false;
      }, err => {
        this.toastr.error('Data Tidak DiTemukan', 'Pesan', {
          closeButton: true,
          timeOut: 3000
        });
        setTimeout(() => {
          this.router.navigate(['/kategori']);
        }, 1000);
      });
    this.kategoriForm = this.formBuilder.group({
      nama_kategori: ['', Validators.required]
    });
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

    this.kategoriService.editKategori(this.route.snapshot.params['id'], this.kategori)
      .subscribe(res => {
        console.log(res);
        this.kategoriForm.reset();
        this.kategoriService.detailKategori(this.route.snapshot.params['id'])
          .subscribe(res => {
            this.kategori = res;
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
            setTimeout(() => {
              this.router.navigate(['/kategori']);
            }, 1000);
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
