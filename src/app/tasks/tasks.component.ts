import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string;
  isAddingTask = false;
  // umjesto ovakve instance klase, uzet cemo konstruktor, puno bolje
  // private tasksService = new TasksService();
  // private tasksService: TasksService;
  
  constructor(private tasksService: TasksService){
    // this.tasksService = tasksService;
  }

  get SelectedUserTasks()
  {
    // return this.tasks.filter((task) => task.userId === this.userId);
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string){
    
  }

  onStartAddTask() 
  {
    this.isAddingTask = true;
  }

  onCloseAddTask()
  {
    this.isAddingTask = false;
  } 

  // onAddTask(taskData: NewTaskData)
  // {
  //   // // instead of push we can put unshift
  //   // this.tasks.unshift({
  //   //   id: new Date().getTime().toString(),
  //   //   userId: this.userId,
  //   //   title: taskData.title,
  //   //   summary: taskData.summary,
  //   //   dueDate: taskData.date
  //   // });

  //   // // for closing the dialog
  //   // this.isAddingTask = false;
  //   this.isAddingTask = false;
  // }


  
}
