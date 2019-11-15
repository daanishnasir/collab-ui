import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachmarkService {

  private showed = new Subject<boolean>();
  showed$ = this.showed.asObservable();

  constructor() { }

  public setVisible = (ifShow) => {
    this.showed.next(ifShow);
  }

}
