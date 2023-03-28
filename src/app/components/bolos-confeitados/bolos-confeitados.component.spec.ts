import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolosConfeitadosComponent } from './bolos-confeitados.component';

describe('BolosConfeitadosComponent', () => {
  let component: BolosConfeitadosComponent;
  let fixture: ComponentFixture<BolosConfeitadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolosConfeitadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolosConfeitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
