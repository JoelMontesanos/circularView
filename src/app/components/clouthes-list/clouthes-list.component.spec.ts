import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClouthesListComponent } from './clouthes-list.component';

describe('ClouthesListComponent', () => {
  let component: ClouthesListComponent;
  let fixture: ComponentFixture<ClouthesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClouthesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClouthesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
