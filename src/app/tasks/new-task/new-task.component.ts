import { Component, EventEmitter, Output, signal, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input ({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<{title: string; summary: string; date: string;}>();
  // @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '' ;
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel()
  {
    this.close.emit();
  }

  // onSubmit()
  // {
  //   this.add.emit({
  //     title: this.enteredTitle, 
  //     summary: this.enteredSummary,
  //     date: this.enteredDate,
  //   });
  // }

  onSubmit()
  {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, 
    this.userId
  );
  this.close.emit();
  }
}
