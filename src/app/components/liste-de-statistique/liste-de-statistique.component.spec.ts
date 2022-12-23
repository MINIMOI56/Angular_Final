import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeStatistiqueComponent } from './liste-de-statistique.component';

describe('ListeDeStatistiqueComponent', () => {
  let component: ListeDeStatistiqueComponent;
  let fixture: ComponentFixture<ListeDeStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeStatistiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDeStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
