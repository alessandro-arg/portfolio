import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWrapperComponent } from './header-wrapper.component';

describe('HeaderWrapperComponent', () => {
  let component: HeaderWrapperComponent;
  let fixture: ComponentFixture<HeaderWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
