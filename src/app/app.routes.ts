import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { CityComponent } from './city/city.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Poznanici Angular - Home'
    },
    {
        path: 'persons',
        component: PersonComponent,
        title: 'Poznanici Angular - Person'
    },
    {
        path: 'cities',
        component: CityComponent,
        title: 'Poznanici Angular - City'
    }
];
