import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { map, single } from 'rxjs';
import { PlacesService } from '../places.service';
@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  // places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  private destroyRef = inject(DestroyRef);
  private httpClient = inject(HttpClient);
  private placesService = inject(PlacesService);
  places = this.placesService.loadedUserPlaces

  //   This line is using Angular's inject function to inject the HttpClient service into the class.
  //  HttpClient is a service that allows the application to make HTTP requests to a server.
  // The inject function is a new way of injecting dependencies (services) starting in Angular 14,
  // providing a simpler alternative to the traditional constructor-based dependency injection.

  // ngOnInit is a lifecycle hook in Angular that is called once after the component has been initialized.
  // It is a good place to put logic that should run once when the component loads, such as fetching data

  ngOnInit() {
    this.isFetching.set(true);
    const subscribe = this.placesService
      .loadAvailablePlaces('http://localhost:3000/places')
      .subscribe({
        complete: () => {
          this.isFetching.set(false);
        },
      });
    this.destroyRef.onDestroy(() => {
      subscribe.unsubscribe();
    });
  }

  onSelectPlace(selectedPlace: Place) {
    this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: selectedPlace.id,
      })
      .subscribe({
        next(value) {
          console.log(value);
        },
      });
  }
}
// When the component is destroyed, it's important to clean up any active subscriptions to avoid memory leaks.
// this.destroyRef.onDestroy() adds a callback that will be triggered when the component is destroyed.
// subscribe.unsubscribe() is called to cancel the subscription
// to the HTTP request, ensuring that no further actions will be performed after the component is destroyed.
