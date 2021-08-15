import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { RoomCreateComponent } from './components/views/room-create/room-create.component';
import { RoomListComponent } from './components/views/room-list/room-list.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'rooms',
    component: RoomListComponent
  },
  {
    path:'rooms/create',
    component: RoomCreateComponent
  },
  {
    path:'rooms/create/:id',
    component: RoomCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
