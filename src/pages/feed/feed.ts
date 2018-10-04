import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers: [MovieProvider]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Wilmar dos Santos",
    data: "30 de setembro de 2018",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    qntd_likes: 23,
    qntd_comments: 2,
    time_comment: "30 de setembro"
  }

  public lista_filmes = new Array<any>();

  public nome_usuario:string = "Wilmar dos Santos";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
   this.movieProvider.getLatestMovies().subscribe(
     data=>{
       const response = (data as any);
       console.log(response);
       this.lista_filmes = response.results;
     },
     error=>{
       console.log(error);
     }
     )
  }

}
