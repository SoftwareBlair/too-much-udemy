import { Component, OnInit, Input } from '@angular/core';
import { ServersListComponent } from '../servers-list/servers-list.component';

@Component({
  selector: 'app-servers-form',
  templateUrl: './servers-form.component.html',
  styleUrls: ['./servers-form.component.scss']
})
export class ServersFormComponent implements OnInit {

  constructor() { }
  @Input() serversList: string[];

  serverName: string;

  ngOnInit(): void {
    this.serverName = '';
  }

  addServer() {
    console.log(this.serverName);
    this.serversList.push(this.serverName);
  }

}
