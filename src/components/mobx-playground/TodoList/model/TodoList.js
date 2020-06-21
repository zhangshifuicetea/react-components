import {action, computed, observable} from "mobx";
import TodoModel from "./Todo";

export default class TodoList {
    @observable todos = [];

    @computed
    get unfinishedTodoCount() {
        return this.todos.filter(t => !t.finished).length;
    }

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(title));
    }
}
