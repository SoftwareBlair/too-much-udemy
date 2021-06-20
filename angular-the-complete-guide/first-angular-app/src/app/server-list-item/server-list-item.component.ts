import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-list-item',
  templateUrl: './server-list-item.component.html',
  styleUrls: ['./server-list-item.component.scss']
})
export class ServerListItemComponent {

  constructor() { }

  @Input() serversList: string[];

}
