import * as dialogs from "ui/dialogs";

import * as appSettings from "application-settings";
import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    selector: "ns-app",
    templateUrl: "./todo/todo.component.html",
    styleUrls: ['./todo/todo.component.css']
})

export class TodoComponent implements OnInit {

	private todos: any = [{"hjcdfvdf": "fdfvdf"}, ]

    constructor
    (
    ) 
    {
    }

    ngOnInit() {

    }

    addTodo(){
    	let options = {
    	    title: "Name",
    	    defaultText: "Enter your name",
    	    inputType: inputType.text,
    	    okButtonText: "Ok",
    	    cancelButtonText: "Cancel"
    	};

    	prompt(options).then((result: PromptResult) => {
    	    console.log("Hello, " + result.text);
    	});
    }

}