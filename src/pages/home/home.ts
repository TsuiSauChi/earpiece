import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Earpiece} from  './earpiece';
import {FirebaseService} from '../../app/service/earpiece.firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AngularFireDatabase, FirebaseService]
})
export class HomePage {
  //earpieces : FirebaseListObservable<any[]>;
  earpiece: any[];
  piece : any;
  sensitivity = 95;
  private impedance = 30;
  private frequency = 20000;
  private price = 5;

  test:  FirebaseListObservable<Earpiece[]>;

  constructor(public navCtrl: NavController,  public db: AngularFireDatabase, _firebaseService: FirebaseService) {
       _firebaseService.getearpiece().subscribe(earpiece => {
         console.log(this.earpiece)
       });
        /*
       this.earpiece = this.db.list('earpiece', {
        query: {
        orderByChild: 'Sensitivity', 
        equalTo: this.sensitivity
      }
    });
    */

    this.test = this.db.list('/earpiece') as FirebaseListObservable<any[]>;
    this.test.subscribe(test => {
      test = test
    });
    console.log(this.test);
  }

/*
  change(){
    var sensitivity = this.sensitivity;
    var impedance = this.impedance;
    var frequency = this.frequency;
    var price = this.price;
    console.log(sensitivity, impedance, frequency, price);
    //var index = this.image(sensitivity, impedance, frequency, price)
  }
  */
/*
  change(sensitivity){
    sensitivity = this.sensitivity;
    this.earpiece = this.db.list('earpiece', {
      query: {
        orderByChild: 'Sensitivity', 
        equalTo: sensitivity
      }
    });
    console.log(sensitivity);
  }
  */

}
