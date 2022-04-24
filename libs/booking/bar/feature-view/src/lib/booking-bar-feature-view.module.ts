import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@nx-ddd/booking/domain';
import { BarViewComponent } from './bar-view.component';

@NgModule({
  imports: [CommonModule, BookingDomainModule],
  declarations: [BarViewComponent],
  exports: [BarViewComponent],
})
export class BookingBarFeatureViewModule {}
