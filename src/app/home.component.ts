 import { Component } from '@angular/core';

 @Component({
     selector: 'home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.css']
 })
 export class HomeComponent {

 fullImagePath1: string;
 fullImagePath2: string;
 fullImagePath3: string;
 fullImagePath4: string;

 label: string;

     constructor() {
         this.fullImagePath1 = '../src/assets/todo.jpg';
         this.fullImagePath2 = '../src/assets/expenses.jpg';
         this.fullImagePath3 = '../src/assets/photo.jpg';
         this.fullImagePath4 = '../src/assets/calendar.jpg';
     }

     open(id: string){
        this.label = id;
        console.log(this.label);

     }
 }