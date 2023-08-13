import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {GoogleAuthProvider} from "@angular/fire/auth";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;

const provider = new GoogleAuthProvider();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: any;

  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) {
  }


  public signin() {
    return this.auth.signInWithPopup(provider).then((result) => {
      this.user = result.user;
      console.log(this.user);
    });
  }
}

export interface User {
  uid: string;
  email: string;
  photoURL: string;
  displayName: string;
}
