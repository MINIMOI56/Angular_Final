import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDePartieMapGamemodeComponent } from './liste-de-partie-map-gamemode.component';

describe('ListeDePartieMapGamemodeComponent', () => {
  let component: ListeDePartieMapGamemodeComponent;
  let fixture: ComponentFixture<ListeDePartieMapGamemodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDePartieMapGamemodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDePartieMapGamemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
