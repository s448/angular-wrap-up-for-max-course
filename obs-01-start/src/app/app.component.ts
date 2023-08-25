import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.services';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  userActivated: boolean = false;
  activatedSub = new Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activateEmitter.subscribe(
      (didActivate) => {
        this.userActivated = didActivate;
      }
    )
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
