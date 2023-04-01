import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MobilePanelService {

  private openSubject$ = new BehaviorSubject(false);
  open$ = this.openSubject$.asObservable();

  constructor() { }

  openPanel() {
    this.openSubject$.next(true);
  }

  closePanel() {
    this.openSubject$.next(false);
  }

}
