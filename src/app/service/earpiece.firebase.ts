import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Earpiece} from '../data/earpiece';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService{
      earpiece: FirebaseListObservable<any[]>;

    constructor(private af:AngularFireDatabase, private http: Http){

    }

    getearpiece(){
        this.earpiece = this.af.list('/items') as FirebaseListObservable<any[]>
        return this.earpiece;
    }
}