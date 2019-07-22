import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockDetailComponent } from './mock-detail.component';

describe('MockDetailComponent', () => {
  let component: MockDetailComponent;
  let fixture: ComponentFixture<MockDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
