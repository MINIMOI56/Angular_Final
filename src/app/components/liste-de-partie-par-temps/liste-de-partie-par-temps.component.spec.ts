import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDePartieParTempsComponent } from './liste-de-partie-par-temps.component';

describe('ListeDePartieParTempsComponent', () => {
  let component: ListeDePartieParTempsComponent;
  let fixture: ComponentFixture<ListeDePartieParTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDePartieParTempsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDePartieParTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
