import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditarNoticiaComponent } from './admin-editar-noticia.component';

describe('AdminEditarNoticiaComponent', () => {
  let component: AdminEditarNoticiaComponent;
  let fixture: ComponentFixture<AdminEditarNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditarNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditarNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
