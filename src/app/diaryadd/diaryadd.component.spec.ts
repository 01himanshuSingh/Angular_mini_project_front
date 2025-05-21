import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryaddComponent } from './diaryadd.component';

describe('DiaryaddComponent', () => {
  let component: DiaryaddComponent;
  let fixture: ComponentFixture<DiaryaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaryaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
