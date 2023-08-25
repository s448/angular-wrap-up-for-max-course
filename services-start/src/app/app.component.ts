import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AccountService]
})
export class AppComponent {
  constructor(private accService: AccountService) {}
  accounts = this.accService.accounts;
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accService.addAccount(newAccount.name,newAccount.status);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accService.changeStatus(updateInfo.id,updateInfo.newStatus);
  // }
}
