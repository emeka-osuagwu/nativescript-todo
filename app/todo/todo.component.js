"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var TodoComponent = (function () {
    function TodoComponent() {
        this.todos = [{ "hjcdfvdf": "fdfvdf" },];
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent.prototype.addTodo = function () {
        dialogs.prompt({
            title: "Your title",
            message: "",
            okButtonText: "Your button text",
        }).then(function (result) {
            // result argument is boolean
            console.log("Dialog result: " + result);
        });
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "./todo/todo.component.html",
            styleUrls: ['./todo/todo.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxvQ0FBc0M7QUFRdEM7SUFJSTtRQUZLLFVBQUssR0FBUSxDQUFDLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBQyxFQUFHLENBQUE7SUFNNUMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxLQUFLLEVBQUUsWUFBWTtZQUNuQixPQUFPLEVBQUUsRUFBRTtZQUNYLFlBQVksRUFBRSxrQkFBa0I7U0FFbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU07WUFDcEIsNkJBQTZCO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBdkJRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQzs7T0FFVyxhQUFhLENBeUJ6QjtJQUFELG9CQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90b2RvL3RvZG8uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi90b2RvL3RvZG8uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgVG9kb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHJpdmF0ZSB0b2RvczogYW55ID0gW3tcImhqY2RmdmRmXCI6IFwiZmRmdmRmXCJ9LCBdXG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICApIFxuICAgIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBhZGRUb2RvKCl7XG4gICAgXHRkaWFsb2dzLnByb21wdCh7XG4gICAgXHQgICAgdGl0bGU6IFwiWW91ciB0aXRsZVwiLFxuICAgIFx0ICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgXHQgICAgb2tCdXR0b25UZXh0OiBcIllvdXIgYnV0dG9uIHRleHRcIixcblxuICAgIFx0fSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgXHQgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cbiAgICBcdCAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcbiAgICBcdH0pO1xuICAgIH1cblxufSJdfQ==