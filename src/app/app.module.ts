import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { CarComponent } from './components/car/car.component';
import { FormsModule} from '@angular/forms';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RouterModule, Routes} from '@angular/router';  

const appRoutes: Routes = [
  {path: '', component: CarComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'user', component: UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CarComponent,
    ContactsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
