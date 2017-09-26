import * as dialogs from "ui/dialogs";
import { prompt, PromptResult, inputType } from "ui/dialogs";
import * as appSettings from "application-settings";
import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    selector: "ns-app",
    templateUrl: "./todo/todo.component.html",
    styleUrls: ['./todo/todo.component.css']
})

export class TodoComponent implements OnInit {

	todos: Array<any>;

    constructor
    (
    ) 
    {
    }

    ngOnInit() {

    	if (appSettings.getString('todos') == '' || appSettings.getString('todos') == null) 
    	{
    		console.log('fvkdfjh')	
    	}
    	else
    	{
    		this.todos = JSON.parse(appSettings.getString('todos'));
    		console.log(JSON.stringify(this.todos))
    	}
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
				var new_item = {
					id: Math.floor(Math.random() * 10000) + 1,
					value: result.text,
					status: 'pending'
				}

				appSettings.setString('todos', JSON.stringify(new_item))
			    console.log(JSON.stringify(new_item));
    		}
    	});
    }


    

}