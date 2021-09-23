import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { bufferCount, map, shareReplay, switchMap, takeUntil, tap } from 'rxjs/operators';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';

@Component({
  selector: 'app-feeling-lucky',
  templateUrl: './feeling-lucky.component.html',
  styleUrls: ['./feeling-lucky.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeelingLuckyComponent {

  restaurant$ = this.restaurant.refreshLucky$.pipe(
    switchMap(() => this.restaurant.restaurants()),
    map((restaurants) => restaurants.restaurants[Math.floor(Math.random() * restaurants.restaurants?.length)]),
    shareReplay(1),
  );

  meal$ = this.restaurant$.pipe(
    map((restaurant) => restaurant.meals[Math.floor(Math.random() * restaurant.meals?.length)]),
    shareReplay(1),
  );

  constructor(private restaurant: RestaurantService) {}
}
