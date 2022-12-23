import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireUpdateDePartieComponent } from './formulaire-update-de-partie.component';

describe('FormulaireUpdateDePartieComponent', () => {
  let component: FormulaireUpdateDePartieComponent;
  let fixture: ComponentFixture<FormulaireUpdateDePartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireUpdateDePartieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireUpdateDePartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
