import { Component, Input } from '@angular/core';
// import { ServersListComponent } from '../servers-list/servers-list.component';

@Component({
  selector: 'app-servers-form',
  templateUrl: './servers-form.component.html',
  styleUrls: ['./servers-form.component.scss']
})
export class ServersFormComponent {

  constructor() { }

  @Input() serversList: string[];

  serverName: string;

  addServer() {
    this.serversList.push(this.serverName);
    this.serverName = '';
  }

}
