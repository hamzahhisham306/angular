import { Directive, ElementRef, inject } from "@angular/core";

@Directive({
  selector:'[applog]',
  standalone:true,
  host:{
    '(click)':'onLog()',
  },
})

export class LogDirective{
  private elementRef = inject(ElementRef);

  onLog(){
    console.log("CLICIking");
    console.log(this.elementRef.nativeElement)
  }
}
