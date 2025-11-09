import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { routes as userRoutes } from './users/user.routes';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { resolveUserName, UserTasksComponent,resovleTitle } from './users/user-tasks/user-tasks.component';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn= (route, segments)=>{
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if(shouldGetAccess<.5){
    return true
  }
  return new RedirectCommand(router.parseUrl("/"))
}

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent, // the component to load for the root path
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    canMatch:[dummyCanMatch],
    data:{
      message:"Hello Data"
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',

    resolve:{
      userName:resolveUserName
    },
    title:resovleTitle
  },
];
