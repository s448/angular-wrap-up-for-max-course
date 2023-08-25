import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { filter, map } from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  firstSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe( count => {
    //   console.log(count);
    // })

    //create your own observable   
    let count = 0;
    const customIntervalObservable = new Observable(
      (observer) => {
        setInterval(() => {
          observer.next(count);
          if (count === 2) {
            observer.complete();
          }
          if (count > 4) {
            observer.error(new Error("Count is greater than 4"))
          }
          count++;
        }, 1000)
      }
    );

    customIntervalObservable.map((data: number) => {
      return "round" + (data + 1);
    });

    this.firstSubscription = customIntervalObservable.filter((data: number) => {return data > 0;}).map(filter(
      (data: number) => {
        return data > 4;
      }
    ), (data: number) => {
      return "round   " + (data + 1);
    }).subscribe(
      data => {
        console.log(data);
      },
      (error) => {
        alert(error);
      },
      () => {
        console.log("Complete.");
      }
    )
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }
}
