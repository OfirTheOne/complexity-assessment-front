import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular matirial
import { MatDialogModule } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


// my components
import { AppComponent } from './app.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuestionComponent } from './question/question.component';
import { LoadingComponent } from './loading/loading.component';

// my services
import { ApiHandlerService } from './../services/api-handler.service';
import { QuestionsService } from './../services/questions.service';
import { ComplexityPipe } from '../pipes/complexity/complexity.pipe';
import { SnackbarService } from '../services/snackbar.service';
import { HowToComponent } from './how-to/how-to.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsListComponent,
    PageNotFoundComponent,
    QuestionComponent,
    LoadingComponent,
    ComplexityPipe,
    HowToComponent
  ],
  entryComponents: [LoadingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    QuestionsService,
    ApiHandlerService,
    SnackbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
