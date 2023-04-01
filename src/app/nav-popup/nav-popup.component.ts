import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-popup',
  templateUrl: './nav-popup.component.html',
  styleUrls: ['./nav-popup.component.css']
})
export class NavPopupComponent {

  @Input() open = false;
  @Input() width!: number;

  setWidth(): string {
     return `w-[${this.width}px]`;
  }
}
