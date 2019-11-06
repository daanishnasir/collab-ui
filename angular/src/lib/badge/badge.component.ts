/** @component badge */
import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'md-badge',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    class: 'md-badge',
    '[class.md-badge--round]': 'rounded',
  },
})
export class BadgeComponent {
  /** @prop Sets the optional rounded class | false */
  @Input() public rounded: boolean = false;

  private _color: string = null;
  /** @prop Sets optional button color | null */
  @Input()
  set color(color: string) {
    if (this._color) {
      this.elementRef.nativeElement.classList.remove(
        `md-badge--${this._color}`
      );
    }
    this.elementRef.nativeElement.classList.add(`md-badge--${color}`);
    this._color = color;
  }

  constructor(private elementRef: ElementRef) {}
}
