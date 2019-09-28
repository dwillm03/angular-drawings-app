
import { DrawingListComponent } from '../drawings/drawing-list.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../user/login.component';
import { DrawingDetailsComponent } from '../drawings/drawing-details/drawing-details.component'
import { Error404Component } from '../errors/404.component';
import { DrawingRouteActivator } from '../drawings/drawing-details/drawing-route-activator.service';
import { DrawingResolveService } from '../drawings/drawing-details/drawing-resolve.service';
import { AuthResolver } from '../user/auth.resolver';
import { AppComponent } from '../app.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { CreateDrawingRequest } from '../drawings/create-drawing-request.component';
import { ContactDetailsComponent } from '../contacts/contact-details.component';

export const routes =
[{path: 'home', component: HomeComponent},
      { path: 'drawings', component: DrawingListComponent},
      { path: 'drawings/:id', canActivate: [DrawingRouteActivator], component: DrawingDetailsComponent,
        resolve: {drawing: DrawingResolveService } },
      {path: 'create-drawing', component: CreateDrawingRequest},
      { path: 'about', component: ContactsComponent },
      { path: 'contact-detail', component: ContactDetailsComponent },
      { path: '404', component: Error404Component },
      { path: '*', component: HomeComponent, pathMatch: 'full'},
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'user', loadChildren: './user/user.module#UserModule' }]
