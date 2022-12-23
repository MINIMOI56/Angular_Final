import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjoutEtModifComponent } from './page-ajout-et-modif.component';

describe('PageAjoutEtModifComponent', () => {
  let component: PageAjoutEtModifComponent;
  let fixture: ComponentFixture<PageAjoutEtModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjoutEtModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAjoutEtModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
