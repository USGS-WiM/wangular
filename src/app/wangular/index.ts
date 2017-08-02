import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySortPipe } from "./pipes/sort.pipe";

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ArraySortPipe],
  exports: [ ArraySortPipe]
})
export class WangularModule {}
