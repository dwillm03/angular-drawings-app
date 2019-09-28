import { Component, OnInit } from '@angular/core';
import { IDrawing } from '../shared/drawing';
import { DrawingService } from '../shared/drawing.service';
import { IDrawingFavoriteList } from './model/DrawingFavoriteList';
import { FavoriteDrawingsComponent } from '../favorite-drawings/favorite-drawings.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drawing-list',
  templateUrl: './drawing-list.component.html',
  styleUrls: ['./drawing-list.component.css']
})
export class DrawingListComponent implements OnInit {
  pageTitle: string = "Drawing List";
  favorites: IDrawingFavoriteList[] = [];
  isFav: boolean = false;
  favIndexes: number[];
  favList;
  public drawings: IDrawing[];
  firstName: string;

  constructor(private drawingService: DrawingService,
              private router: Router) {
  }

  ngOnInit() {

    this.drawingService.getDrawings().subscribe(drawings =>
    {
      this.drawings = drawings;
    });

  }
  favAdded(list: string)
  {
    this.favList = list;
  }

  trackDrawing(index, drawing)
  {
    return this.favorites.push(drawing);
  }
  onClick(){
    this.isFav = true;

  }

  onClickDetail (id: number)
    {
        this.router.navigate(['/drawings', id]);
    }
    clickCancel()
    {
      this.router.navigate(['/drawings']);
    }
}
