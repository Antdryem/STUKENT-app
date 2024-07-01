import { Component, Input, Output, EventEmitter } from '@angular/core';
import { todoListItem } from 'src/app/services/list.service';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss']
})
export class SubtaskComponent {
  @Input() subtask: todoListItem= { id: '', title: '', completed: false };
  @Input() state: boolean = false;  
  @Input() idSubtask!: number;  
  @Input() idTask!: number;  
  @Input() deleteItem!: (idTask: number, idSubtask: number) => void;

  deleteItemHandler() {
    
      this.deleteItem(this.idTask, this.idSubtask);
    
  }
}
