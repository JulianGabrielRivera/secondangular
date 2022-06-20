import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['/servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test';
  username = 'yo';
  servers = ['Testserver', 'Testserver 2'];
  paragraph = false;
  paragraphtext = 'Hello World!';
  log: any[] = [];

  constructor() {
    // the .this keyword works on the arrow function syntax.
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
  onUpdateUserName() {
    this.username = '';
  }
  onToggle() {
    this.paragraph = !this.paragraph;
    // we get a never issue here if we dont put log the way it is.
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
