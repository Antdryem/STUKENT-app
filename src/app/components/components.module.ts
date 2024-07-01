import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TodoItemComponent } from './todo-item/todo-item.component';
import { SubtaskComponent } from './subtask/subtask.component';


@NgModule({
  declarations: [
    TodoItemComponent, SubtaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TodoItemComponent, SubtaskComponent
  ]
})
export class ComponentsModule { }