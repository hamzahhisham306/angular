import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-info-message',
  standalone: true,
  imports: [],
  templateUrl: './info-message.component.html',
  styleUrl: './info-message.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InfoMessageComponent {
  get debugOutput() {
    console.log('[InfoMessages] "debugOutput" binding re-evaluated.');
    return 'InfoMessage Component Debug Output';
  }

  onLog() {
    console.log('Clicked!');
  }
}


// In Angular, the ChangeDetectionStrategy.OnPush optimization is used to improve the performance of components
//  by limiting when change detection occurs. By default, Angular uses the ChangeDetectionStrategy.Default,
//  where change detection runs frequently, checking the entire component tree when any change is detected in the application.
//   This can be inefficient for larger applications with complex components.

// When you add changeDetection: ChangeDetectionStrategy.OnPush to a component like InfoMessageComponent,
// it tells Angular to run change detection only under the following conditions:

// Input changes: Change detection is triggered only when an @Input() property of the component changes.
// Manual triggering: You need to explicitly trigger change detection if there are changes inside the component,
// for instance by calling ChangeDetectorRef.markForCheck() or ChangeDetectorRef.detectChanges().
// Key Benefits:
// Improved performance: Reduces unnecessary checks and improves rendering efficiency.
// More predictable updates: The component only updates when input properties change, reducing unexpected or unnecessary renders.
// In your case, by adding ChangeDetectionStrategy.OnPush to InfoMessageComponent,
// you ensure that the component’s change detection only occurs when needed,
// thereby potentially enhancing the performance of your Angular application, especially as it scales.

// For example, the debugOutput getter will only be re-evaluated when one of its inputs (if it has any) changes,
// not on every change detection cycle. Similarly,
//  the onLog() method is not related to change detection and can be triggered independently when a user action occurs (like a button click).






