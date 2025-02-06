import { Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { FirstComponent } from './first/first.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { DashboardComponent } from './Auth/dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LocdashboardComponent } from './locdashboard/locdashboard.component';

export const routes: Routes = [
    { path: "", redirectTo: "first", pathMatch: "full" }, 
    { path: "work", component: WorkComponent },
    { path: "first", component: FirstComponent },
    { path: "profile", component: ProfileComponent },  
    { path: "profile/:id", component: ProfileComponent },  
    { path: "display/:id", component: DisplayComponent }, 
    { path: "forms", component: FormsComponent },
    { path: "reg", component: SignupComponent },
    { path: "login", component: LoginComponent },
    { path: "locdashboard", component: LocdashboardComponent },
    { path: "admin", children: [
        { path: "dashboard", component: DashboardComponent }
    ] },
    { path: '**', redirectTo: 'first' },

];


// WILDCARD ROUTING => Create a not-found component
// DYNAMIC ROUTING => Use a component to display different information 
// LAYOUT
// SERVICES
// ROUTE GUARDS || AUTH GUARDS
// httpClient
// Angular Materials
// pipes
