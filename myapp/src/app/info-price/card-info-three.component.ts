import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info-three',
  template: `
  <div class="container">
  <div class="card-deck mb-3 text-center">
  <div class="card mb-4 shadow-sm">
  <div class="card-header">
    <h4 class="my-0 font-weight-normal">Enterprise</h4>
  </div>
  <div class="card-body">
    <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
    <ul class="list-unstyled mt-3 mb-4">
      <li>30 users included</li>
      <li>15 GB of storage</li>
      <li>Phone and email support</li>
      <li>Help center access</li>
    </ul>
    <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
  </div>
  </div>
  </div>
</div>`,
  styles: [`.card-deck .card {
    min-width: 340px;
  }`]
})
export class CardInfoThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
