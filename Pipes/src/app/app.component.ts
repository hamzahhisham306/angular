import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, DecimalPipe, TemperaturePipe, SortPipe],
})

// Pipes Transform the way data is displayed
// DatePipe: Formats a date value according to locale rules.
// UpperCasePipe: Transforms text to all upper case.
// • LowerCasePipe: Transforms text to all lower case.
// • CurrencyPipe: Transforms a number to a currency string, formatted according to locale rules.
// • Decimal Pipe : Transforms a number into a string with a decimal point, formatted according to locale
// rules.
// • PercentPipe : Transforms a number to a percentage string, formatted according to locale rules.
// AsyncPipe : Subscribe and unsubscribe to an asynchronous source such as an observable.
// JsonPipe: Display a component object property to the screen as JSON for debugging.
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
  }
}
