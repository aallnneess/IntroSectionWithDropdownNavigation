import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavDesktopMenuComponent } from './side-nav-desktop-menu/side-nav-desktop-menu.component';
import { NavButtonComponent } from './side-nav-desktop-menu/nav-button/nav-button.component';
import { NavPopupComponent } from './nav-popup/nav-popup.component';
import { MenuButtonComponent } from './side-nav-desktop-menu/menu-button/menu-button.component';
import { MobileMenuPanelComponent } from './mobile-menu-panel/mobile-menu-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentPanelComponent,
    FooterComponent,
    SideNavDesktopMenuComponent,
    NavButtonComponent,
    NavPopupComponent,
    MenuButtonComponent,
    MobileMenuPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
