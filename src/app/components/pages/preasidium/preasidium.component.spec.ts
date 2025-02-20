import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreasidiumComponent } from './preasidium.component';

describe('PreasidiumComponent', () => {
  let component: PreasidiumComponent;
  let fixture: ComponentFixture<PreasidiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreasidiumComponent]
    });
    fixture = TestBed.createComponent(PreasidiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
