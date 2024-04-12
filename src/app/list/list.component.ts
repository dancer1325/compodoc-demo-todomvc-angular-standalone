import { Component } from '@angular/core';
import { of } from 'rxjs';

import { TodoStore } from '../shared/services/todo.store';

import { EmitterService } from '../shared/services/emitter.service';

import { Todo } from '../shared/models/todo.model';
import TodoComponent from './todo/todo.component';
import { CommonModule } from '@angular/common';

/**
 * The list of todos component
 *
 * Can filter types of todos :
 *
 * | Type | API |
 * | --- | --- |
 * | completed | displayCompleted |
 * | all | displayAll |
 * | remaining | displayRemaining |
 */
@Component({
    selector: 'list',
    standalone: true,
    templateUrl: './list.component.html',
    imports: [TodoComponent, CommonModule],
})
export default class ListComponent {
    /**
     * Local reference of TodoStore
     */
    todoStore: TodoStore;
    todos: Array<Todo>;
    watchTest;

    constructor(todoStore: TodoStore) {
        const that = this;
        this.todoStore = todoStore;
        this.todos = todoStore.getAll();
        this.watchTest = of(todoStore.todos);
        EmitterService.get('FooterComponent').subscribe((value: any) => {
            console.log(value);
            switch (value) {
                case 'displayCompleted':
                    that.todos = todoStore.getCompleted();
                    break;
                case 'displayAll':
                    that.todos = todoStore.getAll();
                    break;
                case 'displayRemaining':
                    that.todos = todoStore.getRemaining();
                    break;
            }
        });
        this.watchTest.subscribe((data) => {
            console.log(data);
        });
    }
}
