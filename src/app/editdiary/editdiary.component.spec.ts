import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdiaryComponent } from './editdiary.component';

describe('EditdiaryComponent', () => {
  let component: EditdiaryComponent;
  let fixture: ComponentFixture<EditdiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditdiaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
