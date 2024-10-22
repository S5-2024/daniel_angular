import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Task } from '../../classes/Task';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-task',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule, MatInputModule,
    MatDialogActions, MatButton,
    MatDatepickerModule, MatDialogClose,
    ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  private snackBar = inject(MatSnackBar)
  taskForm = new FormGroup(
    {
      title: new FormControl('', Validators.required),
      shortDescription: new FormControl('', Validators.required),
      longDescription: new FormControl('', Validators.required),
      deadLine: new FormControl('', Validators.required)
    }
  )

  constructor(private dialogRef: MatDialogRef<CreateTaskComponent>) { }


  saveInfo() {
    const values = this.taskForm.value;
    if (values.deadLine == '' || values.longDescription == '' ||
      values.shortDescription == '' || values.title == '') {
      let snackBarRef = this.snackBar.open("Preencha todos os campos!", 'Fechar')
    } else {
      this.dialogRef.close(values)
    }

  }
}
