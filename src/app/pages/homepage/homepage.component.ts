import { Component } from '@angular/core';
import { TaskcardComponent } from '../../components/taskcard/taskcard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [TaskcardComponent, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
