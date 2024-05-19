import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/card/card.component';
import { RouterLink } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/user.interface';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {  
  user: User[] = [];

  userService = inject(UserService);

  ngOnInit() {
    this.userService.getAll().subscribe((user)=>{
      this.user = user;
    })
  }
}
