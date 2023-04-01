import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MobilePanelService} from "../mobile-panel.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-mobile-menu-panel',
  templateUrl: './mobile-menu-panel.component.html',
  styleUrls: ['./mobile-menu-panel.component.css']
})
export class MobileMenuPanelComponent implements OnInit, OnDestroy{

  openModal!: boolean;
  subscription = new Subscription();


  constructor(public mobilePanelService: MobilePanelService) {
  }

  ngOnInit(): void {
    this.subscription = this.mobilePanelService.open$.subscribe(open => {
      this.openModal = open;
    });
  }

  closeModal() {
    this.mobilePanelService.closePanel();
  }

  test() {
    if (this.openModal) return 'scale-100 opacity-100';

    return '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
