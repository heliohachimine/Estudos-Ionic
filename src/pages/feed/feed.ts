import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario: string = "Marty Mcfly";
  public post: any[] =[
    {nome_usuario: "Marty McFly",
    likes: 0, 
    data: "November 5, 1955",
    img_avatar: "assets/imgs/avatar.jpeg",
    img_feed: "assets/imgs/feed.jpg",
    txt: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."},

    {nome_usuario: "Emmett Brown",
    likes: 0, 
    data: "November 3, 1855",
    img_avatar: "assets/imgs/Doc_Brown.png",
    img_feed: "assets/imgs/34461.jpg",
    txt: "The future has not yet been written, it does not exist, your future is what you want to do. So do it well."},


  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(10, 99);
  }

  public darLike(i:number){
    this.post[i].likes++;
  }

}
