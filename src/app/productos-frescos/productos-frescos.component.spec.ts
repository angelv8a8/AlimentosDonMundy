import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFrescosComponent } from './productos-frescos.component';

describe('ProductosFrescosComponent', () => {
  let component: ProductosFrescosComponent;
  let fixture: ComponentFixture<ProductosFrescosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosFrescosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosFrescosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
