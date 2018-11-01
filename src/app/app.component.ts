import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { UserService } from './serivece/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: User[];
  constructor(private serviceUser: UserService) {
  }

  ngOnInit() {
      this.darUsuarios();
  }


  /**
   * AAB (Noviembre 1, 2018)
   * Pide la lista de Usuairos
   */
  private darUsuarios (): void {
       this.serviceUser.darUsuarios().then( listUser => {
           this.users = listUser;
       }
       ).catch();
  }
}
