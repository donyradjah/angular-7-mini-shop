import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukEditComponent } from './produk-edit.component';

describe('ProdukEditComponent', () => {
  let component: ProdukEditComponent;
  let fixture: ComponentFixture<ProdukEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdukEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
