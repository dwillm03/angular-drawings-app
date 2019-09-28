import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDrawing } from '../../shared/drawing';
import { DrawingService } from '../../shared/drawing.service';
import { map, first, take } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class DrawingResolveService implements Resolve<IDrawing>
{
    url = 'assets/drawings.json';
    constructor(private http: HttpClient, private route: ActivatedRoute, private drawingService: DrawingService, private router: Router){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDrawing> | IDrawing {

        let id = route.paramMap.get('id');
        console.log('Resolving for drawing id: ' + id);

    return this.drawingService.getDrawing(+id).pipe(map(drawing => {
    if (drawing) {
        return drawing;
    }
    else {
        this.router.navigate(['/404']);
        return null;
    }
    })
    );
    }
}
