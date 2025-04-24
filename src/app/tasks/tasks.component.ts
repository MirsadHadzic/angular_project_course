import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { identifierName } from '@angular/compiler';
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string;
  isAddingTask = false;
  tasks = 
  [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: "Learn all the basic and advanced features of Angular & how to apply them.", 
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angularr',
      summary: "Learn all the basic and advanced features of Angular & how to apply them.", 
      dueDate: '2025-10-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angularrr',
      summary: "Learn all the basic and advanced features of Angular & how to apply them.", 
      dueDate: '2025-11-31'
    }
  ];

  get SelectedUserTasks()
  {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() 
  {
    this.isAddingTask = true;
  }

  onCancelAddTask()
  {
    this.isAddingTask = false;
  } 
}
