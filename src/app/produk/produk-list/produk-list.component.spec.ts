import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukListComponent } from './produk-list.component';

describe('ProdukListComponent', () => {
  let component: ProdukListComponent;
  let fixture: ComponentFixture<ProdukListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdukListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
