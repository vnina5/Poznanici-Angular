import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-person',
  imports: [RouterModule],
  template: `
    <!-- <div class="navbar-person">
      <a routerLink='/list' class="nav-item nav-link">List</a>
      <a routerLink='/get' class="nav-item nav-link">Get</a>
      <a routerLink='/insert' class="nav-item nav-link">Insert</a>
      <a routerLink='/update' class="nav-item nav-link">Update</a>
      <a routerLink='/delete' class="nav-item nav-link">Delete</a>
    </div> -->
    <h1>
      person works!
    </h1>
    
    <section class="content">
      <!-- <router-outlet></router-outlet> -->
    </section>
  `,
  styleUrl: './person.component.css'
})
export class PersonComponent {

}
