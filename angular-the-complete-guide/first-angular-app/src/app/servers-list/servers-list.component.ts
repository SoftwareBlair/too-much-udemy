import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss']
})
export class ServersListComponent implements OnInit {

  constructor() { }

  @Input() serversList: string[];

  ngOnInit(): void {
  }

}
