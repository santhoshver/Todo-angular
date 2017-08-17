import { Component, OnInit } from '@angular/core';
import { Task }  from './task';
import * as _ from "lodash";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[Task]
})
export class TodoComponent implements OnInit {
  newTask: string;
  taskList: Array<Task> = [];

  constructor() { }

  ngOnInit() {
  }

  /* Add a new task */
  addTask(){
    if(!this.newTask || !this.newTask.length) return alert('Please enter valid task!');
    let isTaskExists = _.find(this.taskList, {description:this.newTask});
    if(isTaskExists) return alert('Task already exists!');
    this.taskList.push(new Task(this.newTask));
    this.newTask = '';
  }

  /* Delete the selected tasks */
  removeSelected(){
    if(!this.taskList || !this.taskList.length) return alert('No tasks selected!');
    this.taskList = _.reject(this.taskList, {isSelected:true});
  }

  /* Show/Hide the 'REMOVE SELECTED' button */
  enableRemoveBtn(){
    return _.find(this.taskList, {isSelected:true});
  }
}
