import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TabComponent } from './tab/tab.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';

const routes: Routes = [
  { 
    path: 'home'
  , component: HomeComponent,
  data:{animation:'home'}
  
},
  { 
    path: 'tab'
  , component: TabComponent,
  data:{animation:'tab'}
  
},
  {
     path: 'tab2', 
     component: Tab2Component 
     ,
  data:{animation:'tab2'}
    
    },
  { 
    path: 'tab3', 
    component: Tab3Component ,
  data:{animation:'tab3'}

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  
}
