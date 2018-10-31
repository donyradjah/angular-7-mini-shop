import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriEditComponent } from './kategori-edit.component';

describe('KategoriEditComponent', () => {
  let component: KategoriEditComponent;
  let fixture: ComponentFixture<KategoriEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
