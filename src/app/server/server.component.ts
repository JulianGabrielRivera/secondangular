import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  // type not required but we can use them
  serverId: number = 10;
  serverStatus: string = 'offline';

  // method
  getServerStatus() {
    return this.serverStatus;
  }
}
