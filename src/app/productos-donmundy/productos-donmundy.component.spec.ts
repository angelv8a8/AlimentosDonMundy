import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosDonmundyComponent } from './productos-donmundy.component';

describe('ProductosDonmundyComponent', () => {
  let component: ProductosDonmundyComponent;
  let fixture: ComponentFixture<ProductosDonmundyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosDonmundyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosDonmundyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
