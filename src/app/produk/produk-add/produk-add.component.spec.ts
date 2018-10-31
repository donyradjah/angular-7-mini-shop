import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukAddComponent } from './produk-add.component';

describe('ProdukAddComponent', () => {
  let component: ProdukAddComponent;
  let fixture: ComponentFixture<ProdukAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdukAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
