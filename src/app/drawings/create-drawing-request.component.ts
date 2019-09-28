import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrawingService } from '../shared/drawing.service';

@Component({
    templateUrl: 'create-drawing-request.component.html',
    styles: [`
        em {float: right;
            color: #E05C65;
            padding-left: 10px;}
            .error input {background-color:#E3C3C5;}
            .error ::-webkit-input-placeholder { color: #999; }
            .error ::-moz-placeholder {color: #999; }
            error :-moz-placeholder { color:#999; }
            .error :ms-input-placeholder { color: #999; }
        }
            div.container-fit {
                height: 100px;
            }
            img {
              width: 100px;
              height: auto;
            }
          `]

})
export class CreateDrawingRequest {
    newDrawing;
    isDirty:boolean = true;

    constructor(private router: Router, private drawingService: DrawingService)
    {

    }

    saveDrawing(formValues){
        this.drawingService.saveDrawing(formValues);
        this.isDirty = false;
        console.log(formValues)
        //this.router.navigate(['/drawings']);
    }

    cancel(){
      this.router.navigate(['/drawings']);
    }


}
