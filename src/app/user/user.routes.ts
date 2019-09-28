import { ProfileComponent } from "./profile.component";
import { LoginComponent } from './login.component';
import { CreateDrawingRequest } from '../drawings/create-drawing-request.component';

export const userRoutes =
[
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent},
]
