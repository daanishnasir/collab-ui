 /** @component drawer */
import { Component, Input, Output, EventEmitter, HostBinding, ElementRef } from '@angular/core';

export type DrawerOpenFromDirection = 'right' | 'top' | 'bottom';
export type DrawerSize = 'medium' | 'large';

@Component({
  selector: 'md-drawer',
  template: `
    <ng-content></ng-content>
    <md-icon
      className="md-drawer__close"
      name="cancel_14"
      ariaLabel="{{closeAriaLabel}}"
      (click)="close()" >
    </md-icon>
  `,
  styles: []
})
export class DrawerComponent {

  private _visible: Boolean = false;

  /** @prop Sets optional css class string on drawer | ''  */
  @Input() public class: string = '';

  @HostBinding('class') get className(): string {
    return 'md-drawer '
      + `${'md-drawer--' + this.openFrom} `
      + `${'md-drawer--' + this.openFrom + '--' + this.size } `
      + `${!this.isOpen ? 'md-drawer--' + this.openFrom + '--closed' : ''}`
      + `${this.class ? this.class : '' } `;
  }

  /** @prop Sets whether the drawer is open or not | 'false' */
  @Input()
  set isOpen (value: Boolean) {
    this._visible = value;

  }
  get isOpen() {
    return this._visible;
  }

  /** @prop Sets the direction openFrom opens | 'right' */
  @Input() openFrom: DrawerOpenFromDirection = 'right';

  /** @prop Sets the size of the drawer | 'medium */
  @Input() size: DrawerSize = 'medium';

  /** @prop Sets the text for accessibility on the close button | 'close' */
  @Input() closeAriaLabel: String = 'close';

  /** Emitter for when the drawer changes */
  @Output() drawerChanged: EventEmitter<Boolean> = new EventEmitter();

  close() {
    this.isOpen = false;
    this.drawerChanged.emit(this.isOpen);
  }
}
