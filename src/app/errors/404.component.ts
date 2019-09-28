import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `<div class="container">
    <div class="row"><h1 class="errorMessage">404'd</h1>
    </div>
    <div class="container col-xs-4" style="padding-top:100px">
    <button (click) = "goBack()" class="btn btn-primary">Go back</button>
    </div>
    </div>
  `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
    }`]
})
export class Error404Component{
  constructor(private router: Router) {

  }
  goBack(){
    this.router.navigate(['/drawings']);
  }
}