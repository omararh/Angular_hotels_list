import {Component, OnInit} from '@angular/core';
import { HotelListService } from './hotel-list.service';
import { Ihotel } from './Ihotel';

@Component({
    selector : 'app-hotel-list',
    templateUrl : './hotel-list.componant.html',
    styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponant implements OnInit  {
    public title : string = "liste des Hotels";


    public hotels : Ihotel[] = [];
    public showBadge: boolean = false;

    constructor(private hotelListeService : HotelListService){

    }

  public isNewBadged() : void {
      this.showBadge = !this.showBadge;
  }

  private _hotelfilter =  '';

  public filteredHotels : Ihotel[] = [];
  public errMsg = '';
    ngOnInit(){
      this.hotelListeService.getHotels().subscribe({
        next: hotels => this.hotels = this.filteredHotels = hotels,
        error : err => this.errMsg = err
      });
      this.hotelFilter = '';
  }

  public get hotelFilter(): string {
    return this._hotelfilter;
  }

  public set hotelFilter(filter : string) {
    this._hotelfilter = filter;
    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  private filterHotels(criteria : string) : Ihotel[] {
    criteria = criteria.toLowerCase();
    const res = this.hotels.filter(
      (hotel : Ihotel) => hotel.hotelName.toLowerCase().indexOf(criteria) != -1);
    return res;
  }

}



