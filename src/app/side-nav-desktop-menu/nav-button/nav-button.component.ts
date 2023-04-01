import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent {

  @Input() text!: string;
  @Input() showArrow = false;
  @Input() usePopupMenu = false;
  @Input() fixLeft = false;
  @Input() fixRight = false;
  @Input() width!: number;

  showMenu: boolean = false;

  xPosition(): string {
    if (this.fixLeft) {
      return 'left-0 -right-9';
    }
    if (this.fixRight) {
      return 'right-0 -left-16';
    }
    return '';
  }


  mobileClick(): string {
    if (!this.showMenu) {
      return ' hidden';
    }else {
      return '';
    }
  }

  toggle() {
    if (this.isMobile()) {
      this.showMenu = !this.showMenu;
      console.log('click ' + this.showMenu);
    }

  }

  isMobile(): boolean {
    return window.innerWidth < 1250; //
  }

}
