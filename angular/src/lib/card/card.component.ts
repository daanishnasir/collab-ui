import { Component, Input, EventEmitter, Output,  ElementRef } from '@angular/core';
import {SPACE, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'md-card',
  template: `
    <ng-content></ng-content>
  `,
  styles: [],
  host: {
    'class': 'md-card',
    '[class.md-card--clickable]': 'clickable',
    '[attr.tabindex]': 'clickable ? "0" : null',
    '(click)': 'clickable ? onClick() : null',
    '(keydown)': 'clickable ? onKeydown($event) : null'
  }
})

export class CardComponent {
  /** @prop Emitter for when card is clicked */
  @Output() cardClicked: EventEmitter<Boolean> = new EventEmitter();
  /** @prop Sets the card as clickable | false */
  @Input() clickable: Boolean = false;

  onClick(): void {
    if (this.clickable) {
      this.el.nativeElement.classList.add('active');
      this.cardClicked.emit();
    }
  }

  onKeydown(event: KeyboardEvent): void {
// tslint:disable-next-line: deprecation
    const key = event.key || event.which || event.keyCode;
    switch (key) {
      case SPACE:
      case ENTER:
      case ' ':
      case 'Enter':
        this.onClick();
        break;
      default:
        break;
    }

  }

  constructor(private el: ElementRef) {}

}
