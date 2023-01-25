import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component ({
  selector: 'app-stars',
  templateUrl: './stars.component.html', //template
  styleUrls: ['./stars.component.scss']
 })

 export class StarComponant {


  //child component of hotel-list
  @Input()
  public rating : number = 0;

  @Output() newElement = new EventEmitter<string>();
  addNewElement(value : string) {
    this.newElement.emit(value);

  }

  public starsPrinter() : any { //ce start printer a pour but d'aider a afficher un nombre entier d'étoiles,ex : ici on affiche pas 3,5
   return new Array(this.rating).fill('');
  }



 }
