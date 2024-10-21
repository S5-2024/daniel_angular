import { Component, inject, Input, model, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Task } from '../../classes/Task';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
@Component({
  selector: 'taskcard',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule,],
  templateUrl: './taskcard.component.html',
  styleUrl: './taskcard.component.css'
})
export class TaskcardComponent {
  @Input() task!: Task
  dialog = inject(MatDialog);
  


  openModal(){
    const dialogRef = this.dialog.open(TaskDialogComponent,
      {data: {info: this.task}}
    )

  }
}
