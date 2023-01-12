import { Component } from "@angular/core";
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['.././app.component.css']
}) 

export class ServerComponent {
  serverId = 15;
  serverOnline = true;

  getServerStatus() {
    return this.serverOnline == false ? 'Offline' : 'Online';
  }

  setServerStatus() {
   this.serverOnline = this.serverOnline == false ? true : false;
  }

  getColor() {
    return this.serverOnline == true ? 'green' : 'red';
  }
}