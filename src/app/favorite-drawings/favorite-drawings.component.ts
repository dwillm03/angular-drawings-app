import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IDrawingFavoriteList } from '../drawings/model/DrawingFavoriteList';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-favorite-drawings',
  templateUrl: './favorite-drawings.component.html',
  styleUrls: ['./favorite-drawings.component.css']
})
export class FavoriteDrawingsComponent implements OnInit {

  constructor() { }
  @Output() addFavorite = new EventEmitter<string>();
  @Input() favName;
  @Input() myFav;
  @Input() favId;
  favList: string[] = [];
  favIdList: number[] = [];



  addFavoriteClick(): void {
    this.favList.push(this.myFav);   
    this.favIdList.push(this.favId);
    this.addFavorite.emit(`${this.favList} with ID of ${this.favIdList} is added to your favorites. `);
    this.favList = [];
    this.favIdList = [];
  }
  ngOnInit() {
  }

}
