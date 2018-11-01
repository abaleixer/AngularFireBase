import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public db: AngularFireDatabase) { }


  /**
   * AAB (Noviembre 1, 2018)
   * Retorna los usuarios
   */
  public darUsuarios(): Promise<User[]> {
    const user = [] as User[];
    return this.db.database.ref('leg').once('value').then(datos => {
      datos.forEach(item => {
         user.push(item.val());
      });
      return user;
    }
    );
  }

}
