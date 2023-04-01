import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuPanelComponent } from './mobile-menu-panel.component';

describe('MobileMenuPanelComponent', () => {
  let component: MobileMenuPanelComponent;
  let fixture: ComponentFixture<MobileMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMenuPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
