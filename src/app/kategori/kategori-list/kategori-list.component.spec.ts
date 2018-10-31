import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriListComponent } from './kategori-list.component';

describe('KategoriListComponent', () => {
  let component: KategoriListComponent;
  let fixture: ComponentFixture<KategoriListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
