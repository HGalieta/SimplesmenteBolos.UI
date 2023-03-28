import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolosCaseirosComponent } from './bolos-caseiros.component';

describe('BolosCaseirosComponent', () => {
  let component: BolosCaseirosComponent;
  let fixture: ComponentFixture<BolosCaseirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolosCaseirosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolosCaseirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
