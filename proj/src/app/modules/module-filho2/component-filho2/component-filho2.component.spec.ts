import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFilho2Component } from './component-filho2.component';

describe('ComponentFilho2Component', () => {
  let component: ComponentFilho2Component;
  let fixture: ComponentFixture<ComponentFilho2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFilho2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentFilho2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
