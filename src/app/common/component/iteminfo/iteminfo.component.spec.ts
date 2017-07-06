/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IteminfoComponent } from './iteminfo.component';

describe('IteminfoComponent', () => {
  let component: IteminfoComponent;
  let fixture: ComponentFixture<IteminfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteminfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
