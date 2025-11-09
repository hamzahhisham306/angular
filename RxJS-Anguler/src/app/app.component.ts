import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { interval, map } from 'rxjs';

// Creates an Obseravable that emits sequential numbers very specified interval of time.

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
// RxJS (Reactive Extensions for JavaScript) is a library for composing asynchronous and event-based programs using observable sequences.
// In Angular, RxJS is widely used for handling asynchronous operations like HTTP requests, user input events, and WebSocket messages.

// An Observable in Angular is a core concept of RxJS.
// It represents a sequence of data or events that can be asynchronously delivered over time.
//  Observables are used to handle asynchronous data streams,
//  like HTTP responses or real-time events, and provide powerful operators to transform, filter,
//  and combine these data streams.
//  Observables are essential in Angular for working with reactive programming and managing asynchronous operations efficiently.
export class AppComponent implements OnInit {
  // destroyRef = inject(DestroyRef) is used to inject the DestroyRef service.
  //  DestroyRef is a feature that allows the developer to tap into the component's destruction lifecycle
  //  (when the component is being destroyed).
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  //   Inside ngOnInit(), an RxJS interval observable is created that emits values every 1000 milliseconds (1 second).
  //   The emitted values (starting from 0 and incrementing) are logged to the console using subscription.
  // The subscribe method is called to listen for values emitted by the observable.


  // The effect function is an essential feature in reactive programming with Angular,
  // enabling developers to manage side effects in response to state changes efficiently.
  // It enhances the reactivity of Angular applications, making it easier to build responsive and interactive user interfaces.







  constructor() {
    effect(() => {
      console.log(`Clicked button ${this.clickCount()} times`)
    });
  }
  ngOnInit(): void {
    const subscription = interval(1000)
      .pipe(map((val) => val * 2))
      .subscribe({
        next: (val) => console.log(val),
      });
    //     To prevent memory leaks, it’s important to clean up the observable subscription when the component is destroyed.
    //      this.destroyRef.onDestroy() provides a way to execute logic when the component is being destroyed.
    // Inside onDestroy(), subscription.unsubscribe() is called to cancel the subscription,
    //  stopping the emission of values and preventing memory leaks once the component is no longer in use.
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}

// Here are some real-life application examples that utilize RxJS effectively:

// 1. Real-Time Chat Applications
// Example: Applications like Slack or Discord use RxJS to handle incoming messages, user presence, and notifications in real-time. Observables can manage streams of messages and updates, allowing users to see new messages instantly without refreshing the interface.
// 2. Form Validation and Reactive Forms
// Example: Angular applications often use RxJS in forms to provide real-time validation feedback. When a user types into a form field, an observable can emit changes, allowing the application to validate the input and provide instant feedback (e.g., showing error messages or changing input styles).
// 3. Stock Price Updates
// Example: Financial applications that track stock prices in real time utilize RxJS to subscribe to price updates from a server. The observable can handle multiple updates per second, allowing users to see the latest prices without delay.
// 4. Search Autocomplete
// Example: Many e-commerce websites implement search functionalities that suggest results as the user types. RxJS can debounce input events to limit the number of API calls, only triggering a search after the user has paused typing, enhancing performance and user experience.
// 5. Location Tracking Applications
// Example: Applications like Google Maps or Uber use RxJS to handle continuous streams of location data. Observables can manage updates from GPS sensors, allowing the application to reactively update the map or the position of vehicles in real-time.
// 6. User Activity Monitoring
// Example: Applications that monitor user activity (like analytics dashboards) can utilize RxJS to listen for user interactions (clicks, scrolls, etc.) and aggregate this data over time, enabling real-time insights into user behavior.
// 7. Data Fetching with Retry Logic
// Example: Applications that rely on fetching data from APIs can implement RxJS operators to handle errors and retry failed requests automatically. This ensures a smoother user experience by managing API failures gracefully.
// 8. Game State Management
// Example: Online multiplayer games can use RxJS to manage the game state, where multiple players’ actions need to be synchronized. Observables can handle incoming player actions, updating the game state in real-time across all clients.
