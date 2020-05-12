import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    HighlightDirective,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    TruncatePipe
  ]
})
export class SharedModule { }
