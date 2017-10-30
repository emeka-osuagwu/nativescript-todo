import * as dialogs from "ui/dialogs";
import { prompt, PromptResult, inputType } from "ui/dialogs";
import * as appSettings from "application-settings";
import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";

import {TodoStore, Todo} from '../services/database';



@Component({
    selector: "ns-app",
    templateUrl: "./todo/todo.component.html",
    styleUrls: ['./todo/todo.component.css'],
    providers: [TodoStore]
})


export class TodoComponent implements OnInit {

	todos: ObservableArray<Todo>;

    constructor
    (
        private todoStore: TodoStore
    ) 
    {
        this.todoStore = todoStore;
        let todos = JSON.parse(appSettings.getString('todos') || '[]');
        // Normalize back into classes

    }

    ngOnInit() {
    }

    addTodo(){
    	let options = {
    	    title: "Enter Item",
    	    defaultText: "",
    	    inputType: inputType.text,
    	    okButtonText: "Ok",
    	    cancelButtonText: "Cancel"
    	};

    	prompt(options).then((result: PromptResult) => {

    		if (result.text == null || result.text == '') 
    		{
    			alert('you need to enter an item to create a todo :)')	
    		}
    		else
    		{    			   
				// var new_item = {
				// 	id: Math.floor(Math.random() * 10000) + 1,
				// 	value: result.text,
				// 	status: 'pending'
				// }

                this.todos.push(new Todo(result.text));

				appSettings.setString('todos', JSON.stringify(this.todos))
			    console.log(JSON.stringify(this.todos));
    		}
    	});
    }


    

}