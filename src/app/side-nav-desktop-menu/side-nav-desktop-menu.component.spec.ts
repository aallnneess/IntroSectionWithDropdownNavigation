import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavDesktopMenuComponent } from './side-nav-desktop-menu.component';

describe('SideNavDesktopMenuComponent', () => {
  let component: SideNavDesktopMenuComponent;
  let fixture: ComponentFixture<SideNavDesktopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavDesktopMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavDesktopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
