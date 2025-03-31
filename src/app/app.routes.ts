import { Routes } from '@angular/router';
import { SignupComponent } from '../components/signup/signup.component';

export const routes: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' }, // Default route to signup
  { path: 'signup', component: SignupComponent },
];
