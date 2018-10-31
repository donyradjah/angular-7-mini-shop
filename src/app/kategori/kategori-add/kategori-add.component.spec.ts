import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriAddComponent } from './kategori-add.component';

describe('KategoriAddComponent', () => {
  let component: KategoriAddComponent;
  let fixture: ComponentFixture<KategoriAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
