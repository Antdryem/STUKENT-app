import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todoListItem } from 'src/app/services/list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: todoListItem = { id: '', title: '', completed: false };
  @Input() state: boolean = false;
  @Input() idTask!: number;
  @Output() del = new EventEmitter();
  @Input() change!: (pos:number)=>void;
  deleteItem(idTask: number, idSubtask: number | null = null) {
    //console.log(idTask, idSubtask, "task");
    
    if (idSubtask !== null)
      this.del.emit({idTask});
    else {
      this.del.emit({idTask, idSubtask})
    }
  }
  changeState(pos:number) {
    this.change(pos);
  }
}
