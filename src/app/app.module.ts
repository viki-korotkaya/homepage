import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';
import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
import { TodoComponent }   from './todo.component';


import { HttpClientModule }   from '@angular/common/http';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'todo', component: TodoComponent}
]
@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule ],
    declarations: [ AppComponent, HomeComponent, TodoComponent ],
    bootstrap:    [ AppComponent, HomeComponent, TodoComponent ]
})
export class AppModule { }