/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OtherdetailComponent } from './otherdetail.component';

describe('OtherdetailComponent', () => {
  let component: OtherdetailComponent;
  let fixture: ComponentFixture<OtherdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
