import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserPlayload } from '../interfaces/playload-user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpClient = inject(HttpClient)

  getAll() {
    return this.httpClient.get<User[]>('/api/usuarios');
  }

  post(playload: UserPlayload) {
    return this.httpClient.post('/api/usuarios', playload)
  }

}
