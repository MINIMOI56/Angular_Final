import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFiltreComponent } from './page-filtre.component';

describe('PageFiltreComponent', () => {
  let component: PageFiltreComponent;
  let fixture: ComponentFixture<PageFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFiltreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
