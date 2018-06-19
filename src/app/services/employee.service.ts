import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Employee } from './../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
}
