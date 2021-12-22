import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UerListComponent } from './uer-list.component';

describe('UerListComponent', () => {
  let component: UerListComponent;
  let fixture: ComponentFixture<UerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
