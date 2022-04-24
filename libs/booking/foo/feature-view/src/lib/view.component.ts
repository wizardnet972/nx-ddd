import { Component, OnInit } from '@angular/core';
import { ViewFacade } from '@nx-ddd/booking/domain';

@Component({
  selector: 'booking-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  constructor(private viewFacade: ViewFacade) {}

  ngOnInit() {}
}
