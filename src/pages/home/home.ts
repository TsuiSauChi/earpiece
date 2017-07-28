import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Earpiece} from  './earpiece';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AngularFireDatabase]
})
export class HomePage {
  earpiece : FirebaseListObservable<any[]>;
  piece : any;
  private price = 5;
  private priceRange;
  private priceRangeDisplay = "Under $100";

  test:  FirebaseListObservable<Earpiece[]>;

  constructor(public navCtrl: NavController,  public db: AngularFireDatabase) {
     
       this.earpiece = this.db.list('earpiece', {
        query: {
        orderByChild: 'PriceRange', 
        equalTo: this.priceRange
      }
      });
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

  change1(priceRange){
    priceRange = this.priceRange
    this.earpiece = this.db.list('earpiece', {
        query:{
          orderByChild:'PriceRange',
          equalTo: this.priceRange
        }
      });

    if(this.priceRange == 100){
      this.priceRangeDisplay = "Under $100";
    }
    if(this.priceRange == 200){
      this.priceRangeDisplay = "$100 -$200";
    }
    if(this.priceRange == 300){
      this.priceRangeDisplay = "$200 -$300";
    }
    if(this.priceRange == 400){
      this.priceRangeDisplay = "$300 -$400";
    }
    if(this.priceRange == 500){
      this.priceRangeDisplay = "$400 -$500";
    }
    if(this.priceRange == 600){
      this.priceRangeDisplay = "$500 -$600";
    }
    if(this.priceRange == 700){
      this.priceRangeDisplay = "$600+";
    }
  }

}
