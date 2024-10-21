import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'taskcard',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './taskcard.component.html',
  styleUrl: './taskcard.component.css'
})
export class TaskcardComponent {

}
