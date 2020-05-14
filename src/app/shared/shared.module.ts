import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChronometersInterceptor } from './interceptors/chronometers.interceptor';


@NgModule({
  declarations: [
    HighlightDirective,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HighlightDirective,
    TruncatePipe
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ChronometersInterceptor, multi: true}
  ]
})
export class SharedModule { }
