// import { Component, computed, signal } from '@angular/core';
import { Component, Input, computed, input} from '@angular/core';
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
  // @Input({required: true}) avatar!: string;
  // // definitely will be a string value 
  // @Input({required: true}) name!: string;
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => './assets/users/' + this.selectedUser().avatar);

  // get imagePath()
  // {
  //   return  'assets/users/' + this.selectedUser.avatar;
  // }


  // onSelectedUser()
  // {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //   // this.selectedUser = DUMMY_USERS[randomIndex];
  //   console.log('Clicked');
  // }

  // signal components that are down over here cannot be changed because they are read-only signals
  // avatar = input<string>();
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  // get imagePath()
  // {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() 
  {
    // this.avatar.set();
  }

}
