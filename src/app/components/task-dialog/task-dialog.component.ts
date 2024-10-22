import { Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogActions,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,MatIconModule,
    MatFormFieldModule, MatInputModule],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.css'
})
export class TaskDialogComponent {
  data = inject(MAT_DIALOG_DATA);
  info = this.data.info
  protected isEditable:boolean = false;

  

  changeView(){
    this.isEditable = !this.isEditable;
  }
}
