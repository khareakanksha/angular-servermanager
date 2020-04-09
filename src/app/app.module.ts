import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { Router, RouterModule} from '@angular/router';
import { ServersService } from './servers/servers.service';

const appRoutes: Routes = [
{path:'', component: HomeComponent},
{path:'users', component: UsersComponent},
{path:'servers', component: ServersComponent},
{path:'users/:id/:name', component: UserComponent},
{path:'servers/:id/edit', component: EditServerComponent},
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ServersComponent, UsersComponent, ServerComponent, EditServerComponent, UserComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServersService]
})
export class AppModule { }
