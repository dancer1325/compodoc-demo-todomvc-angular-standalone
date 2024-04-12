import { Component, Input } from '@angular/core';

import { TodoStore } from '../shared/services/todo.store';
import { FormsModule } from '@angular/forms';

/**
 * The header component
 */
@Component({
    selector: 'header',
    standalone: true,
    templateUrl: './header.component.html',
    styles: [
        `
            h1 {
                margin-top: 75px;
            }
        `,
    ],
    imports: [FormsModule],
})
export default class HeaderComponent {
    /**
     * Application main title
     */
    title = 'todos';

    /**
     * Local reference of TodoStore
     */
    todoStore: TodoStore;

    /**
     * The data-binding value of the input tag, added on enter to the todo store
     */
    @Input()
    newTodoText = '';

    constructor(todoStore: TodoStore) {
        this.todoStore = todoStore;
    }

    /**
     * Ad a todo to the list
     */
    addTodo() {
        if (this.newTodoText.trim().length) {
            this.todoStore.add(this.newTodoText);
            this.newTodoText = '';
        }
    }
}
