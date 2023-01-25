import { Component } from '@angular/core';

@Component({ //MétaDonnée
  selector: 'app-root',
  templateUrl: './app.component.html', //template
  styleUrls: ['./app.component.css']
})
export class AppComponent { //controller
  title : string = 'hello-angular';
}
