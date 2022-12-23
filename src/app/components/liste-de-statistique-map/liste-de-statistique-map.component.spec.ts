import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeStatistiqueMapComponent } from './liste-de-statistique-map.component';

describe('ListeDeStatistiqueMapComponent', () => {
  let component: ListeDeStatistiqueMapComponent;
  let fixture: ComponentFixture<ListeDeStatistiqueMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeStatistiqueMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDeStatistiqueMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
