import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClouthesFormComponent } from './clouthes-form.component';

describe('ClouthesFormComponent', () => {
  let component: ClouthesFormComponent;
  let fixture: ComponentFixture<ClouthesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClouthesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClouthesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
