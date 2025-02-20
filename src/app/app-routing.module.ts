import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { PreasidiumComponent } from './components/pages/preasidium/preasidium.component';
import { EventsComponent } from './components/pages/events/events.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "preasidium", component: PreasidiumComponent },
  { path: "events", component: EventsComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [HomeComponent]
})
export class AppRoutingModule { }
