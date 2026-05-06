import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiComponente } from './api-componente';

describe('ApiComponente', () => {
  let component: ApiComponente;
  let fixture: ComponentFixture<ApiComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
