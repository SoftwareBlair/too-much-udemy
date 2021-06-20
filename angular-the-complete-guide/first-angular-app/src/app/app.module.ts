import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersFormComponent } from './servers-form/servers-form.component';
import { ServersListComponent } from './servers-list/servers-list.component';
import { ServerListItemComponent } from './server-list-item/server-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersFormComponent,
    ServersListComponent,
    ServerListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
