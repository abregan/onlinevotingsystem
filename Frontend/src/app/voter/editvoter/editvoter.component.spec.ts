import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvoterComponent } from './editvoter.component';

describe('EditvoterComponent', () => {
  let component: EditvoterComponent;
  let fixture: ComponentFixture<EditvoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditvoterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditvoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
