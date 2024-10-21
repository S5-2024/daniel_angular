import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {
  private taskList = environment.tarefas
  protected filteredTaskList = this.taskList;
  protected filterStatus!:Status;
  protected filterInput:string = "title";
  protected statusInstance = Status



  ngOnInit(){
    console.log(this.filteredTaskList)
  }

  fitlerByStatus(status: Status){
    this.filterStatus
  }
  changeFilterType(filterType: string){
    this.filterInput = filterType
  }
}
