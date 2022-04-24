import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@nx-ddd/booking/domain';
import { FooViewComponent } from './foo-view.component';

@NgModule({
  imports: [CommonModule, BookingDomainModule],
  declarations: [FooViewComponent],
  exports: [FooViewComponent],
})
export class BookingFooFeatureViewModule {}
