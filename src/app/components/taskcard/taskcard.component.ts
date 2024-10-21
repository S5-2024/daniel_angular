import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Task } from '../../classes/Task';

@Component({
  selector: 'taskcard',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './taskcard.component.html',
  styleUrl: './taskcard.component.css'
})
export class TaskcardComponent {
  @Input() task!: Task
}
