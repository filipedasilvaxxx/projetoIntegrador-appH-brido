import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrdoDeClientesPage } from './cadastrdo-de-clientes.page';

describe('CadastrdoDeClientesPage', () => {
  let component: CadastrdoDeClientesPage;
  let fixture: ComponentFixture<CadastrdoDeClientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrdoDeClientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrdoDeClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
