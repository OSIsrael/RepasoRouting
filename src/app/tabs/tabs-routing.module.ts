import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {//Instaciar la pagina fija Inicio
        path:"inicio",
        loadChildren: ()=>import("./inicio/inicio.module").then(a=>a.InicioPageModule)
      },
       {//Instaciar la pagina fija Inicio
        path:"nudo",
        loadChildren: ()=>import("./nudo/nudo.module").then(a=>a.NudoPageModule)
      },
       {//Instaciar la pagina fija Inicio
        path:"desenlace",
        loadChildren: ()=>import("./desenlace/desenlace.module").then(a=>a.DesenlacePageModule)
      },
      {//por defecto abrir inicio
        path:"",
        redirectTo:"inicio",
        pathMatch:"full"
      }
      
    ]
  },
{//padre por defecto
  path:"",
  redirectTo:"tabs",
  pathMatch:"full"
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
