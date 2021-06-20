import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appName: string = 'Server List';
  serversList: string[];

  ngOnInit(): void {
    this.serversList = new Array<string>('Production', 'Dev', 'Alpha');
  }
}
