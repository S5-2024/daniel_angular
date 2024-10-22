import { Component, EventEmitter, inject, Input, Output, ChangeDetectorRef } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { Task } from '../../classes/Task';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Status } from '../../Enum/Status';
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
  
  constructor(private cdr: ChangeDetectorRef){}

  openChangeStatusModal(){
    const dialogRef = this.dialog.open(ChangeStatusComponent, 
      {data:{status: this.task.status}}
    )

    dialogRef.afterClosed().subscribe(result => {
      this.task.status = result;
      this.cdr.detectChanges();
    })
  }

  openDescriptionModal(){
    const dialogRef = this.dialog.open(TaskDialogComponent,
      {data: {info: this.task}}
    )
  }


}



@Component({
  selector: "change-status",
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, 
    MatFormField, MatSelect, MatOption, MatLabel],
  template: `
    <mat-dialog-content>
      <mat-form-field>
        <mat-label>Status: </mat-label>
        <mat-select [(value)] = "choose">
          <mat-option [value]="statusInstance.pendente">Pendente</mat-option>
          <mat-option [value]="statusInstance.iniciado">Iniciado</mat-option>
          <mat-option [value]="statusInstance.concluido">Concluido</mat-option>
        </mat-select>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-button (click)="closeDialog()">Salvar</button>
    </mat-dialog-actions>
  `
})
export class ChangeStatusComponent{
  statusInstance = Status;
  protected choose: Status = inject(MAT_DIALOG_DATA).status;
  @Output() statusEvent = new EventEmitter<Status>();

  constructor(public dialogRef:MatDialogRef<ChangeStatusComponent>){}

  closeDialog(){
    this.dialogRef.close(this.choose)
  }
}


