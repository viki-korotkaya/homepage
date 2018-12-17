import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

class Item{
    text: string;
    date: string;
    done: boolean;

    constructor(text: string, date: string) {

        this.text = text;
        this.date = date;
        this.done = false;
    }
}

 @Component({
     selector: 'todo',
     templateUrl: './todo.component.html',
     styleUrls: ['./todo.component.css']
 })
 export class TodoComponent implements OnInit {
    todoArray: Item[] = [];
    doneArray: Item[] = [];
    text: string;
    date: string;

    constructor(private http: HttpClient) {

             //this.fullImagePath1 = '../src/assets/todo.jpg';
             //this.fullImagePath2 = '../src/assets/expenses.jpg';
             //this.fullImagePath3 = '../src/assets/photo.jpg';
             //this.fullImagePath4 = '../src/assets/calendar.jpg';


    }

    ngOnInit(){

    }
    addItem(text: string, date: string): void {
        if(text==null || date ==null) { return };
        this.todoArray.push(new Item(text, date));
        this.text = undefined;
        this.date = undefined;


    }

    closeItem(item: any){
        this.todoArray.splice(this.todoArray.indexOf(item), 1);
    }

 }