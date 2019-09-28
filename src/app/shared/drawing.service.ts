import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IDrawing } from './drawing';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';

@Injectable ({
    providedIn: 'root'
})
export class DrawingService {
    private productAPI = 'http://localhost:4000/api/drawings';
    private booksTestAPI = 'localhost:3000/api/books';
    drawings: IDrawing[] = [];

    constructor (private http: HttpClient) {
    }

     getDrawings(): Observable<IDrawing[]> {
        return this.http.get<IDrawing[]>(this.productAPI);
    }

   /*  getDrawingsResolve() {
        let subject = new Subject()
        setTimeout(() => {subject.next(this.drawings); subject.complete(); }, 2000);
        return subject;
    } */
   getDrawing(id: number): Observable<IDrawing | undefined> {
        return this.getDrawings().pipe(
            map((drawings: IDrawing[]) => drawings.find(d => d.id === id)));
    }
    getDrawingArray(id: number)
    {

    }

    saveDrawing(drawing)
    {
      drawing.id = 999;
      drawing.session = [];
      this.getDrawings().subscribe(d => {
        d.push(drawing);
        this.drawings = d;
      });
    }

}
