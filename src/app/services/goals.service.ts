import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Goal } from '@interfaces/goal';

@Injectable({
  providedIn: 'root',
})
export class GoalsService {
  private collectionName = 'goals';

  constructor(private firestore: Firestore) {}

  getGoals(): Observable<Goal[]> {
    return collectionData(collection(this.firestore, this.collectionName)).pipe(
      map((goal) => goal as Goal[]),
    );
  }
}
