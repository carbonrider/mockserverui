import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockEntryComponent } from './mock-entry.component';

describe('MockEntryComponent', () => {
  let component: MockEntryComponent;
  let fixture: ComponentFixture<MockEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
