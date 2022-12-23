import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDePartieComponent } from './liste-de-partie.component';

describe('ListeDePartieComponent', () => {
  let component: ListeDePartieComponent;
  let fixture: ComponentFixture<ListeDePartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDePartieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDePartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
