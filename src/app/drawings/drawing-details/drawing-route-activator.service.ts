import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, ActivatedRoute} from '@angular/router'
import { DrawingService } from '../../shared/drawing.service';
import { IDrawing } from '../../shared/drawing';
import { Observable } from 'rxjs';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { DrawingResolveService } from './drawing-resolve.service';

@Injectable(
{
        providedIn: 'root'
})

    
export class DrawingRouteActivator implements CanActivate
{
    url = 'assets/drawings.json';
    constructor(private drawingService: DrawingService, private router: Router,
        private http: HttpClient, private route: ActivatedRoute, private drawingResolveService: DrawingResolveService){

    }
    /* getDrawing(id: number): boolean {
     return !!this.http.get<IDrawing[]>(this.url).pipe(map((drawings: IDrawing[]) => drawings.find(d => d.id === id)))
    } */
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {      
        let id = +next.url[1].path;
        const drawingExists = !!this.drawingService.getDrawing(+this.route.params['id'])
        //this.drawingResolveService
        let drawingDataExists = !!this.drawingResolveService
        
        //const drawingExists = !!this.getDrawing(id)
        //if (isNaN(id) || id < 1)
        if (!drawingDataExists)
        //if (!drawingExists)
        {      
            /* alert("Invalid drawing ID");                  
            this.router.navigate(['/404']);
            return false */
        }
        else
        {
            return true
        }
         
    }
}