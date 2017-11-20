import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySortPipe } from "./pipes/sort.pipe";
import { MyFilterPipe } from 'app/wangular/pipes/filter-by-id.pipe';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ArraySortPipe, MyFilterPipe],
  exports: [ ArraySortPipe, MyFilterPipe]
})
export class WangularModule {}
