import { Component } from '@angular/core';
import { DrawingListComponent } from './drawings/drawing-list.component';
import { AuthService } from './user/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthResolver } from './user/auth.resolver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DrawnWorks, LLC.';
  displayDropdown = false;
  lastName = '';
  firstName = 'Default';


  constructor(private route: ActivatedRoute, public auth: AuthService, private authService: AuthService, private router: Router, private authResolver: AuthResolver){

  }

  toggleDropdown() {
    this.displayDropdown = !this.displayDropdown;
  }

  ngOnit(){

  }
}
