import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {ChatService} from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public chats: Observable<any[]>;
   constructor(db: AngularFirestore, public _cs: ChatService) {
     this.chats = db.collection('chats').valueChanges();
   }

}
