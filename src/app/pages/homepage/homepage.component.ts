import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, input } from '@angular/core';
import { TaskcardComponent } from '../../components/taskcard/taskcard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { environment } from '../../../environments/environment.development';
import { Status } from '../../Enum/Status';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../../components/create-task/create-task.component';
import { Task } from '../../classes/Task';


@Component({
  selector: 'app-homepage',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    TaskcardComponent,
    MatIconModule, 
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatMenuModule, 
    MatDatepickerModule,
    MatSelectModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomepageComponent {
  private dialog = inject(MatDialog)
  private taskList = environment.tarefas
  protected filteredTaskList = [...this.taskList];
  protected filterInput:string = "title";
  protected statusInstance = Status;
  protected selectionValue!: Status

  constructor( private cdr: ChangeDetectorRef){}
  ngOnInit(){
    this.filteredTaskList.sort((a,b) => b.status.localeCompare(a.status))
  }

  ngDoCheck(){
    this.filteredTaskList = this.taskList
    this.filteredTaskList = this.filteredTaskList.sort((a,b) =>{ 
      return b.status.localeCompare(a.status)
    })
    console.log(this.taskList)
  }

  changeFilterType(filterType: string){
    this.filteredTaskList = [...this.taskList]
    this.filterInput = filterType
  }

  filter(event: any){
    switch(this.filterInput){
      case("title"):
        var inputValue = event.target.value.toLowerCase().trim();
        if(!inputValue){
          this.filteredTaskList = [...this.taskList]
        }else{
          this.filteredTaskList = this.taskList.filter(task => {
            return task.title.toLowerCase().includes(inputValue)
          })
        }
        break;
      case("deadLine"):
        var inputValue = event.target.value;
        if(!inputValue){
          this.filteredTaskList = [...this.taskList]
        }else{
          this.filteredTaskList = this.filteredTaskList.filter((task) => {
            return task.deadLineDate == inputValue
          })
        }
        break;
      case("status"):
        if(!this.selectionValue){
          this.filteredTaskList = [...this.taskList]
        }else{
          this.filteredTaskList = this.filteredTaskList.filter((task) => {
            return task.status == this.selectionValue
          })
        }
        break;
        
    }
  }

  openCreationModal(){
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: "500px"
    })

    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result)
      let newTask = new Task(result.title, result.shortDescription, result.longDescription, new Date(), result.deadLine, Status.pendente)
      this.taskList.push(newTask)
    })
    /* this.cdr.detectChanges() */
  }


}
