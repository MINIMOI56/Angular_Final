import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeStatistiqueGamemodeComponent } from './liste-de-statistique-gamemode.component';

describe('ListeDeStatistiqueGamemodeComponent', () => {
  let component: ListeDeStatistiqueGamemodeComponent;
  let fixture: ComponentFixture<ListeDeStatistiqueGamemodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeStatistiqueGamemodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDeStatistiqueGamemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
