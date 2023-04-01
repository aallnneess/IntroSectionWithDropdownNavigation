import { Component } from '@angular/core';
import {MobilePanelService} from "../mobile-panel.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  // Injecting the MobilePanelService to access its functionality
  constructor(public mobilePanelService: MobilePanelService) {
  }

  // Method to be called when the menu button is clicked
  openMenu() {
    // Calls the openPanel() method of the MobilePanelService
    this.mobilePanelService.openPanel();
  }
}
