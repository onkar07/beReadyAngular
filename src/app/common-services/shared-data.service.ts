import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private loggedButtonText = new BehaviorSubject<string>('login');
  logButtonText = this.loggedButtonText.asObservable();
  constructor() { }

  changeUsername(btnText: string) {
    this.loggedButtonText.next(btnText);
  }
}
