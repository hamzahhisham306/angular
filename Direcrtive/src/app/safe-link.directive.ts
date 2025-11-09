import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp');

  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  // yon use hostElementRef instead of event.target as HTMLAnchorElement
  // this.hostElementRef.nativeElement.href
  constructor() {
    console.log('Directive created');
  }
  onConfirmLeavePage(event: MouseEvent) {
    const wantsLeave = window.confirm('Do you want to leave the app!');
    if (wantsLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href =
        address + '?from=' + this.queryParam();
      return;
    }
    event.preventDefault();
  }
}
