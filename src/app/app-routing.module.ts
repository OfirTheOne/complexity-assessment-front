import { QuestionsListComponent } from './questions-list/questions-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: QuestionsListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'question/:id', component: QuestionComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
