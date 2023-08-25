import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  constructor(private loggingService: LoggingService, private accService: AccountService) {}
  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    this.accService.changeStatus(this.id,status);
    this.accService.statusUpdated.emit(status);
   // this.loggingService.logStatusChange(status)
  }
}
