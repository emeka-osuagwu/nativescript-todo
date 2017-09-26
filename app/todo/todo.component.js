"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("ui/dialogs");
var appSettings = require("application-settings");
var core_1 = require("@angular/core");
var TodoComponent = (function () {
    function TodoComponent() {
    }
    TodoComponent.prototype.ngOnInit = function () {
        if (appSettings.getString('todos') == '' || appSettings.getString('todos') == null) {
            console.log('fvkdfjh');
        }
        else {
            this.todos = JSON.parse(appSettings.getString('todos'));
            console.log(JSON.stringify(this.todos));
        }
    };
    TodoComponent.prototype.addTodo = function () {
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
                var new_item = {
                    id: Math.floor(Math.random() * 10000) + 1,
                    value: result.text,
                    status: 'pending'
                };
                appSettings.setString('todos', JSON.stringify(new_item));
                console.log(JSON.stringify(new_item));
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUE2RDtBQUM3RCxrREFBb0Q7QUFDcEQsc0NBQWtEO0FBU2xEO0lBSUk7SUFJQSxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUVDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQ25GLENBQUM7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3ZCLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNBLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQ3hDLENBQUM7SUFDRixDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNDLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLFlBQVk7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixTQUFTLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ3pCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLFFBQVE7U0FDN0IsQ0FBQztRQUVGLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBb0I7WUFFekMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FDN0MsQ0FBQztnQkFDQSxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQTtZQUN2RCxDQUFDO1lBQ0QsSUFBSSxDQUNKLENBQUM7Z0JBQ0gsSUFBSSxRQUFRLEdBQUc7b0JBQ2QsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBQ3pDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSTtvQkFDbEIsTUFBTSxFQUFFLFNBQVM7aUJBQ2pCLENBQUE7Z0JBRUQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO2dCQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBbERRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQzs7T0FFVyxhQUFhLENBdUR6QjtJQUFELG9CQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBwcm9tcHQsIFByb21wdFJlc3VsdCwgaW5wdXRUeXBlIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdG9kby90b2RvLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vdG9kby90b2RvLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFRvZG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHRvZG9zOiBBcnJheTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3JcbiAgICAoXG4gICAgKSBcbiAgICB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICBcdGlmIChhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ3RvZG9zJykgPT0gJycgfHwgYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd0b2RvcycpID09IG51bGwpIFxuICAgIFx0e1xuICAgIFx0XHRjb25zb2xlLmxvZygnZnZrZGZqaCcpXHRcbiAgICBcdH1cbiAgICBcdGVsc2VcbiAgICBcdHtcbiAgICBcdFx0dGhpcy50b2RvcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd0b2RvcycpKTtcbiAgICBcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy50b2RvcykpXG4gICAgXHR9XG4gICAgfVxuXG4gICAgYWRkVG9kbygpe1xuICAgIFx0bGV0IG9wdGlvbnMgPSB7XG4gICAgXHQgICAgdGl0bGU6IFwiRW50ZXIgSXRlbVwiLFxuICAgIFx0ICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxuICAgIFx0ICAgIGlucHV0VHlwZTogaW5wdXRUeXBlLnRleHQsXG4gICAgXHQgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXG4gICAgXHQgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgIFx0fTtcblxuICAgIFx0cHJvbXB0KG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogUHJvbXB0UmVzdWx0KSA9PiB7XG5cbiAgICBcdFx0aWYgKHJlc3VsdC50ZXh0ID09IG51bGwgfHwgcmVzdWx0LnRleHQgPT0gJycpIFxuICAgIFx0XHR7XG4gICAgXHRcdFx0YWxlcnQoJ3lvdSBuZWVkIHRvIGVudGVyIGFuIGl0ZW0gdG8gY3JlYXRlIGEgdG9kbyA6KScpXHRcbiAgICBcdFx0fVxuICAgIFx0XHRlbHNlXG4gICAgXHRcdHsgICAgXHRcdFx0ICAgXG5cdFx0XHRcdHZhciBuZXdfaXRlbSA9IHtcblx0XHRcdFx0XHRpZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApICsgMSxcblx0XHRcdFx0XHR2YWx1ZTogcmVzdWx0LnRleHQsXG5cdFx0XHRcdFx0c3RhdHVzOiAncGVuZGluZydcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFwcFNldHRpbmdzLnNldFN0cmluZygndG9kb3MnLCBKU09OLnN0cmluZ2lmeShuZXdfaXRlbSkpXG5cdFx0XHQgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobmV3X2l0ZW0pKTtcbiAgICBcdFx0fVxuICAgIFx0fSk7XG4gICAgfVxuXG5cbiAgICBcblxufSJdfQ==