import { Component, OnInit } from '@angular/core';
import { ListService, todoListItem } from '../services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private theList: ListService) { }

  public dataList: todoListItem[] = [];

  ngOnInit(): void {
    this.theList.get().subscribe((data) => {
      this.dataList = data as todoListItem[];

    })
  }

  deleteItem(pos: {idTask:number, idSubtask?:number}) {
    //console.log(posTask, posSubtask, typeof posTask);

    if(pos.idSubtask!==null) {
      
      this.dataList[pos.idTask]!.subTodos?.splice(pos.idSubtask as number, 1);
    }else{
      
      this.dataList.splice(pos.idTask, 1);
    }/*
    if (posSubtask !== null) {
      if (this.dataList[posTask]?.subTodos) {
        this.dataList[posTask].subTodos = this.dataList[posTask]!.subTodos?.filter(
          (_, index) => index !== posSubtask
        );
      }
    } else {
      this.dataList = this.dataList.filter((_, index) => index !== posTask);
    }*/
  }
  createElement() {
    const taskType = window.prompt('Do you want to create a Task or Subtask? (Answer "Task" or "Subtask")');
  
    if (taskType?.toLowerCase() === 'task') {
      const taskName = window.prompt('Enter the name of the new Task:');
      if (taskName) {
        this.dataList.push({ id: String(this.dataList.length), title: taskName, completed: false, subTodos: [] });
      }
    } else if (taskType?.toLowerCase() === 'subtask') {
      const taskList = this.dataList.map((task, index) => `${index}: ${task.title}`).join('\n');
      const taskIndex = window.prompt(`Choose the ID of the Task to add the Subtask to:\n${taskList}`);
      const parsedIndex = parseInt(taskIndex || '', 10);
  
      if (!isNaN(parsedIndex) && this.dataList[parsedIndex]) {
        const subtaskName = window.prompt('Enter the name of the new Subtask:');
        if (subtaskName) {
          if (!this.dataList[parsedIndex].subTodos) {
            this.dataList[parsedIndex].subTodos = [];
          }
          this.dataList[parsedIndex].subTodos!.push({ id: String(this.dataList[parsedIndex].subTodos!.length), title: subtaskName, completed: false });
        }
      } else {
        window.alert('Invalid Task ID.');
      }
    } else {
      window.alert('Invalid input. Please respond with "Task" or "Subtask".');
    }
  }
  changeState(pos:number) {
    console.log(pos, "oliiii", this.dataList[pos]);
    
    this.dataList[pos].completed = !this.dataList[pos].completed;
  }
  

}
