"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("ui/dialogs");
var appSettings = require("application-settings");
var core_1 = require("@angular/core");
var database_1 = require("../services/database");
var TodoComponent = (function () {
    function TodoComponent(todoStore) {
        this.todoStore = todoStore;
        this.todoStore = todoStore;
        var todos = JSON.parse(appSettings.getString('todos') || '[]');
        // Normalize back into classes
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent.prototype.addTodo = function () {
        var _this = this;
        var options = {
            title: "Enter Item",
            defaultText: "",
            inputType: dialogs_1.inputType.text,
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        };
        dialogs_1.prompt(options).then(function (result) {
            if (result.text == null || result.text == '') {
                alert('you need to enter an item to create a todo :)');
            }
            else {
                // var new_item = {
                // 	id: Math.floor(Math.random() * 10000) + 1,
                // 	value: result.text,
                // 	status: 'pending'
                // }
                _this.todos.push(new database_1.Todo(result.text));
                appSettings.setString('todos', JSON.stringify(_this.todos));
                console.log(JSON.stringify(_this.todos));
            }
        });
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "./todo/todo.component.html",
            styleUrls: ['./todo/todo.component.css'],
            providers: [database_1.TodoStore]
        }),
        __metadata("design:paramtypes", [database_1.TodoStore])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUE2RDtBQUM3RCxrREFBb0Q7QUFDcEQsc0NBQWtEO0FBR2xELGlEQUFxRDtBQVlyRDtJQUlJLHVCQUVZLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFHNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQy9ELDhCQUE4QjtJQUVsQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQUEsaUJBNkJDO1FBNUJBLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLFlBQVk7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixTQUFTLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ3pCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLFFBQVE7U0FDN0IsQ0FBQztRQUVGLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBb0I7WUFFekMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FDN0MsQ0FBQztnQkFDQSxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQTtZQUN2RCxDQUFDO1lBQ0QsSUFBSSxDQUNKLENBQUM7Z0JBQ0gsbUJBQW1CO2dCQUNuQiw4Q0FBOEM7Z0JBQzlDLHVCQUF1QjtnQkFDdkIscUJBQXFCO2dCQUNyQixJQUFJO2dCQUVRLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksZUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUVuRCxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO2dCQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQS9DUSxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLG9CQUFTLENBQUM7U0FDekIsQ0FBQzt5Q0FTeUIsb0JBQVM7T0FOdkIsYUFBYSxDQW9EekI7SUFBRCxvQkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgcHJvbXB0LCBQcm9tcHRSZXN1bHQsIGlucHV0VHlwZSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuXG5pbXBvcnQge1RvZG9TdG9yZSwgVG9kb30gZnJvbSAnLi4vc2VydmljZXMvZGF0YWJhc2UnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90b2RvL3RvZG8uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi90b2RvL3RvZG8uY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczogW1RvZG9TdG9yZV1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIFRvZG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHRvZG9zOiBPYnNlcnZhYmxlQXJyYXk8VG9kbz47XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgcHJpdmF0ZSB0b2RvU3RvcmU6IFRvZG9TdG9yZVxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnRvZG9TdG9yZSA9IHRvZG9TdG9yZTtcbiAgICAgICAgbGV0IHRvZG9zID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ3RvZG9zJykgfHwgJ1tdJyk7XG4gICAgICAgIC8vIE5vcm1hbGl6ZSBiYWNrIGludG8gY2xhc3Nlc1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgYWRkVG9kbygpe1xuICAgIFx0bGV0IG9wdGlvbnMgPSB7XG4gICAgXHQgICAgdGl0bGU6IFwiRW50ZXIgSXRlbVwiLFxuICAgIFx0ICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxuICAgIFx0ICAgIGlucHV0VHlwZTogaW5wdXRUeXBlLnRleHQsXG4gICAgXHQgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXG4gICAgXHQgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgIFx0fTtcblxuICAgIFx0cHJvbXB0KG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogUHJvbXB0UmVzdWx0KSA9PiB7XG5cbiAgICBcdFx0aWYgKHJlc3VsdC50ZXh0ID09IG51bGwgfHwgcmVzdWx0LnRleHQgPT0gJycpIFxuICAgIFx0XHR7XG4gICAgXHRcdFx0YWxlcnQoJ3lvdSBuZWVkIHRvIGVudGVyIGFuIGl0ZW0gdG8gY3JlYXRlIGEgdG9kbyA6KScpXHRcbiAgICBcdFx0fVxuICAgIFx0XHRlbHNlXG4gICAgXHRcdHsgICAgXHRcdFx0ICAgXG5cdFx0XHRcdC8vIHZhciBuZXdfaXRlbSA9IHtcblx0XHRcdFx0Ly8gXHRpZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApICsgMSxcblx0XHRcdFx0Ly8gXHR2YWx1ZTogcmVzdWx0LnRleHQsXG5cdFx0XHRcdC8vIFx0c3RhdHVzOiAncGVuZGluZydcblx0XHRcdFx0Ly8gfVxuXG4gICAgICAgICAgICAgICAgdGhpcy50b2Rvcy5wdXNoKG5ldyBUb2RvKHJlc3VsdC50ZXh0KSk7XG5cblx0XHRcdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudG9kb3MpKVxuXHRcdFx0ICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMudG9kb3MpKTtcbiAgICBcdFx0fVxuICAgIFx0fSk7XG4gICAgfVxuXG5cbiAgICBcblxufSJdfQ==