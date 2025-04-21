// import { Component, computed, signal } from '@angular/core';
import { Component, EventEmitter, Input, Output, computed, input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { computeMsgId } from '@angular/compiler';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string
  @Input({required: true}) avatar!: string;
  // // definitely will be a string value 
  @Input({required: true}) name!: string;
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => './assets/users/' + this.selectedUser().avatar);
  @Output() select = new EventEmitter();


  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // });

  get imagePath()
  {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() 
  {
    // this.avatar.set();
    this.select.emit(this.id);
  }

}
