import { Component, EventEmitter, Input, Output } from '@angular/core';

interface UserModel {
  name: string;
  id: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  standalone: true,
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: UserModel;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
