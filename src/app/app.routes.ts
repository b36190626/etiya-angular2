import { UpdateBrandPageComponent } from './routers/update-brand-page/update-brand-page.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { TestPageComponent } from './routers/test-page/test-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { CreateModelPageComponent } from './routers/create-model-page/create-model-page.component';
import { UpdateModelPageComponent } from './routers/update-model-page/update-model-page.component';
import { ModelDetailsPageComponent } from './routers/model-details-page/model-details-page.component';
import { CustomerPageComponent } from './routers/customer-page/customer-page.component';
import { RentalPageComponent } from './routers/rental-page/rental-page.component';
import { securedRouteGuard } from './shared/guards/SecuredRoute.guard';
import { logableRouteGuard } from './shared/guards/LogableRoute.guard';
import { canLeaveGuard } from './shared/guards/canLeave.guard';
import { CreateBrandPageComponent } from './routers/create-brand-page/create-brand-page.component';
//import { confirmationRouteGuard } from './shared/guards/confirmation-route.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home' //herhangibir şey yoksa home pathine yolla
  },
  {
    path: 'home', //  /home
    //pathMatch: 'prefix', //default olarak prefix zaten
    //component: HomePageComponent, //layout yapmak için
    component: MainLayoutComponent, //home ve altındaki sayfalar için, çalışması için html'ine router-outlet ekleriz
    children: [
      {
        path: 'models', // /home/models
        component: HomePageComponent
      },
      {
        path: "models/:modelId", //home/models/{id}
        component: ModelDetailsPageComponent
      },
      {
        path: 'brands',
        component: HomePageComponent
      },
      {
        path: "customers",
        component: CustomerPageComponent
      },
      {
        path:"rentals",
        component: RentalPageComponent
      }
    ]
  },
  {
    path: 'layout-test',
    component: TestPageComponent,
  },
  {
    path:'brands/create',
    component: CreateBrandPageComponent,
    canActivate: [securedRouteGuard, logableRouteGuard],
    canDeactivate: [canLeaveGuard],
    data: {
      requiredUserRole: 'admin',
    },
  },
  {
    path:'brands/update',
    component: UpdateBrandPageComponent,
  },

  {
    path:'models/create',
    component: CreateModelPageComponent,
    canDeactivate: [canLeaveGuard]
  },
  {
    path:'models/update',
    component: UpdateModelPageComponent
  },
  {
    path: '**', // her path'de çalışır, En sona yazılmalı
    redirectTo: 'not-found'
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent
  }
];
