import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDePartieComponent } from './formulaire-de-partie.component';

describe('FormulaireDePartieComponent', () => {
  let component: FormulaireDePartieComponent;
  let fixture: ComponentFixture<FormulaireDePartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireDePartieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireDePartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
