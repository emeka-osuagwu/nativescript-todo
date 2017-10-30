"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var Todo = (function () {
    function Todo(title) {
        this.completed = false;
        this.editing = false;
        this.title = title.trim();
    }
    Object.defineProperty(Todo.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value.trim();
        },
        enumerable: true,
        configurable: true
    });
    return Todo;
}());
exports.Todo = Todo;
var TodoStore = (function () {
    function TodoStore() {
        this.completedFilter = null;
        var persistedTodos = JSON.parse(appSettings.getString('angular2-todos') || '[]');
        // Normalize back into classes
        this.todos = persistedTodos.map(function (todo) {
            var ret = new Todo(todo._title);
            ret.completed = todo.completed;
            return ret;
        });
    }
    TodoStore.prototype.updateStore = function () {
        appSettings.setString('angular2-todos', JSON.stringify(this.todos));
    };
    TodoStore.prototype.getWithCompleted = function (completed) {
        return this.todos.filter(function (todo) { return todo.completed === completed; });
    };
    TodoStore.prototype.allCompleted = function () {
        return this.todos.length === this.getCompleted().length;
    };
    TodoStore.prototype.setAllTo = function (completed) {
        this.todos.forEach(function (t) { return t.completed = completed; });
        this.updateStore();
    };
    TodoStore.prototype.removeCompleted = function () {
        this.todos = this.getWithCompleted(false);
        this.updateStore();
    };
    TodoStore.prototype.getRemaining = function () {
        return this.getWithCompleted(false);
    };
    TodoStore.prototype.getCompleted = function () {
        return this.getWithCompleted(true);
    };
    TodoStore.prototype.toggleCompletion = function (todo) {
        todo.completed = !todo.completed;
        this.updateStore();
    };
    TodoStore.prototype.remove = function (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.updateStore();
    };
    TodoStore.prototype.add = function (title) {
        this.todos.push(new Todo(title));
        this.updateStore();
    };
    TodoStore = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TodoStore);
    return TodoStore;
}());
exports.TodoStore = TodoStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxrREFBb0Q7QUFDcEQ7SUFZQyxjQUFZLEtBQWE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQVhELHNCQUFJLHVCQUFLO2FBQVQ7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQixDQUFDO2FBQ0QsVUFBVSxLQUFhO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUM7OztPQUhBO0lBVUYsV0FBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksb0JBQUk7QUFvQmpCO0lBSUM7UUFGQSxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUcvQixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNqRiw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFFLFVBQUMsSUFBMEM7WUFDM0UsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sK0JBQVcsR0FBbkI7UUFDQyxXQUFXLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVPLG9DQUFnQixHQUF4QixVQUF5QixTQUFrQjtRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFVLElBQUssT0FBQSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDekQsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxTQUFrQjtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQU8sSUFBSyxPQUFBLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxtQ0FBZSxHQUFmO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFnQixHQUFoQixVQUFpQixJQUFVO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLElBQVU7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx1QkFBRyxHQUFILFVBQUksS0FBYTtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBekRXLFNBQVM7UUFEckIsaUJBQVUsRUFBRTs7T0FDQSxTQUFTLENBMERyQjtJQUFELGdCQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5leHBvcnQgY2xhc3MgVG9kbyB7XG5cdGNvbXBsZXRlZDogQm9vbGVhbjtcblx0ZWRpdGluZzogQm9vbGVhbjtcblxuXHRwcml2YXRlIF90aXRsZTogU3RyaW5nO1xuXHRnZXQgdGl0bGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RpdGxlO1xuXHR9XG5cdHNldCB0aXRsZSh2YWx1ZTogU3RyaW5nKSB7XG5cdFx0dGhpcy5fdGl0bGUgPSB2YWx1ZS50cmltKCk7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcih0aXRsZTogU3RyaW5nKSB7XG5cdFx0dGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLmVkaXRpbmcgPSBmYWxzZTtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGUudHJpbSgpO1xuXHR9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2RvU3RvcmUge1xuXHR0b2RvczogQXJyYXk8VG9kbz47XG5cdGNvbXBsZXRlZEZpbHRlcjogYm9vbGVhbiA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IHBlcnNpc3RlZFRvZG9zID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2FuZ3VsYXIyLXRvZG9zJykgfHwgJ1tdJyk7XG5cdFx0Ly8gTm9ybWFsaXplIGJhY2sgaW50byBjbGFzc2VzXG5cdFx0dGhpcy50b2RvcyA9IHBlcnNpc3RlZFRvZG9zLm1hcCggKHRvZG86IHtfdGl0bGU6IFN0cmluZywgY29tcGxldGVkOiBCb29sZWFufSkgPT4ge1xuXHRcdFx0bGV0IHJldCA9IG5ldyBUb2RvKHRvZG8uX3RpdGxlKTtcblx0XHRcdHJldC5jb21wbGV0ZWQgPSB0b2RvLmNvbXBsZXRlZDtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZVN0b3JlKCkge1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZygnYW5ndWxhcjItdG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRvZG9zKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFdpdGhDb21wbGV0ZWQoY29tcGxldGVkOiBCb29sZWFuKSB7XG5cdFx0cmV0dXJuIHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvOiBUb2RvKSA9PiB0b2RvLmNvbXBsZXRlZCA9PT0gY29tcGxldGVkKTtcblx0fVxuXG5cdGFsbENvbXBsZXRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy50b2Rvcy5sZW5ndGggPT09IHRoaXMuZ2V0Q29tcGxldGVkKCkubGVuZ3RoO1xuXHR9XG5cblx0c2V0QWxsVG8oY29tcGxldGVkOiBCb29sZWFuKSB7XG5cdFx0dGhpcy50b2Rvcy5mb3JFYWNoKCh0OiBUb2RvKSA9PiB0LmNvbXBsZXRlZCA9IGNvbXBsZXRlZCk7XG5cdFx0dGhpcy51cGRhdGVTdG9yZSgpO1xuXHR9XG5cblx0cmVtb3ZlQ29tcGxldGVkKCkge1xuXHRcdHRoaXMudG9kb3MgPSB0aGlzLmdldFdpdGhDb21wbGV0ZWQoZmFsc2UpO1xuXHRcdHRoaXMudXBkYXRlU3RvcmUoKTtcblx0fVxuXG5cdGdldFJlbWFpbmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRXaXRoQ29tcGxldGVkKGZhbHNlKTtcblx0fVxuXG5cdGdldENvbXBsZXRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRXaXRoQ29tcGxldGVkKHRydWUpO1xuXHR9XG5cblx0dG9nZ2xlQ29tcGxldGlvbih0b2RvOiBUb2RvKSB7XG5cdFx0dG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XG5cdFx0dGhpcy51cGRhdGVTdG9yZSgpO1xuXHR9XG5cblx0cmVtb3ZlKHRvZG86IFRvZG8pIHtcblx0XHR0aGlzLnRvZG9zLnNwbGljZSh0aGlzLnRvZG9zLmluZGV4T2YodG9kbyksIDEpO1xuXHRcdHRoaXMudXBkYXRlU3RvcmUoKTtcblx0fVxuXG5cdGFkZCh0aXRsZTogU3RyaW5nKSB7XG5cdFx0dGhpcy50b2Rvcy5wdXNoKG5ldyBUb2RvKHRpdGxlKSk7XG5cdFx0dGhpcy51cGRhdGVTdG9yZSgpO1xuXHR9XG59Il19