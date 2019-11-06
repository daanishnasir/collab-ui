import { Component, Input} from '@angular/core';

@Component({
  selector: 'md-card-section',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    'class': 'md-card-section',
    '[class.md-card-section--full]': 'full',
  }
})
export class CardSectionComponent {

  /**@prop Sets the image to the full width of the card | false */
  @Input() full: boolean = false;

 }
