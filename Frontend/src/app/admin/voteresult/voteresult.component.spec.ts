import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteresultComponent } from './voteresult.component';

describe('VoteresultComponent', () => {
  let component: VoteresultComponent;
  let fixture: ComponentFixture<VoteresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoteresultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoteresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
