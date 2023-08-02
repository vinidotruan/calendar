import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class GoalsService {
  private collectionName = 'goals';

  constructor(private firestore: Firestore) {}

  getGoals() {
    return collectionData(collection(this.firestore, this.collectionName));
  }
}
