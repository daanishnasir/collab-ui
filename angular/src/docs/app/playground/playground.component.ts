import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-playground',
  template: `
    <div className="row">
      <div className="example-spacing">
        <!-- Insert Example Here -->
      </div>
    </div>
  `,
})
export class PlaygroundComponent implements OnInit {
  ngOnInit() {}

  onSelect (event) {
    console.info('custom onSelect working');
  }
}
