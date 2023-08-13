import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private path = '/registers';
  private ref: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.ref = firestore.collection(this.path);
  }

  public createRegister(data: any) {
    return this.ref.add(data);
  }
}
