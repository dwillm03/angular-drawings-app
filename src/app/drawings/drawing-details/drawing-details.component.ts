import { Component, OnInit } from '@angular/core'
import { DrawingService } from '../../shared/drawing.service'
import { IDrawing } from '../../shared/drawing';
import { ActivatedRoute, Router, Params, ParamMap, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { DrawingRouteActivator } from './drawing-route-activator.service'
import { switchMap} from 'rxjs/operators';


@Component({
    templateUrl: './drawing-details.component.html',
    styleUrls: ['drawing-details.component.css']

})
export class DrawingDetailsComponent implements OnInit {
    drawing: IDrawing | undefined = {name: '', id: 1, description: "", imageUrl: ""};
    errorMessage: string = '';
    drawingDetails: any;

    constructor(private route: ActivatedRoute,
                private drawingService: DrawingService,
                private router: Router){ }

    ngOnInit() {
        this.route.data.subscribe(data => this.drawing = data['drawing'])


    }

    getDrawing(id: number) {
        let data;
        this.drawingService.getDrawing(id).subscribe(drawing => this.drawing = drawing,
            error => this.errorMessage = <any>error);
    }

    goBack() {
        this.router.navigate(['/drawings']);
    }

}

/* ngOnInit() {
    //this.route.data.subscribe(data => this.drawing = data);
    //this.drawingService.getDrawing(id).subscribe(data)
    //this.drawing = this.route.snapshot.data['drawing'];
    this.route.data.subscribe(data => this.drawing = data['drawing'])

    /* this.route.params.pipe(switchMap((params: Params) => this.drawingService.getDrawing(params['id']))
    .subscribe(drawing => this.drawing = drawing)); */

    /* let activatedRouteSnapshot: ActivatedRouteSnapshot;
    if (this.drawingRouteActivator.canActivate(activatedRouteSnapshot) === true)
    { */
    //let id = +this.route.snapshot.paramMap.get('id');
    //this.getDrawing(id);
    //}*/
