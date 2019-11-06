import { Component, AfterContentInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'md-breadcrumbs',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    class: 'md-breadcrumbs'
  }
})
export class BreadcrumbsComponent implements AfterContentInit {

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngAfterContentInit() {
    const list = this.viewContainerRef.element.nativeElement.getElementsByTagName('LI'),
      len = list.length;
    if (len > 0) {
      list[len - 1].className += ' current';
    }
  }

}
