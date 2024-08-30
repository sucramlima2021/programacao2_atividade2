import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFilho1Component } from './component-filho1.component';

describe('ComponentFilho1Component', () => {
  let component: ComponentFilho1Component;
  let fixture: ComponentFixture<ComponentFilho1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFilho1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentFilho1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
