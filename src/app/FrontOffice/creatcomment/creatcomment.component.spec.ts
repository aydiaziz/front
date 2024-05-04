import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatcommentComponent } from './creatcomment.component';

describe('CreatcommentComponent', () => {
  let component: CreatcommentComponent;
  let fixture: ComponentFixture<CreatcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatcommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
