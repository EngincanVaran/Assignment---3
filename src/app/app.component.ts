import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isClicked = false;
  myList = [];

  onClicked(){
    this.isClicked = !this.isClicked;
    //this.myList.push(this.myList.length+1);
    this.myList.push(new Date());
  }
}
