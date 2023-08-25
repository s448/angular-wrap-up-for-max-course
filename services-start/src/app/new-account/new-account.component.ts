import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accService: AccountService) {
    this.accService.statusUpdated.subscribe(
      (status: string) => alert('status updated' + status)
    )
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.addAccount(accountName,accountStatus);
  // this.loggingService.logStatusChange(accountStatus);
  }
}
