import { AnalysisResult } from './../../models/analysis-result.model';
import { Question } from './../../models/question.model';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from './../../services/questions.service';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ApiHandlerService } from './../../services/api-handler.service';
import { LoadingComponent } from '../loading/loading.component';
import { HttpResponse } from '@angular/common/http';

/**
 * res for code editor :
 *  https://ace.c9.io
*/

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewInit {

  selectedQuestion: Question;
  codeEditor; // Editor
  analysisResult: AnalysisResult;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private questionsService: QuestionsService,
    private apiHandler: ApiHandlerService
  ) { }


  ngOnInit() {
    console.log(this.codeEditor);
    this.createCodeEditorElement();
    this.route.params.subscribe((params) => {
      this.selectedQuestion = this.questionsService.getQuestionById(params['id']);
      this.setCodeEditorText(this.selectedQuestion.startingText);
    });

  }

  ngAfterViewInit() {
    // this.openLoadingDialog();
   }

  private createCodeEditorElement(): any {
    this.codeEditor = window['ace'].edit(document.getElementById('codeEditor'));
    this.codeEditor.setTheme('ace/theme/github');
    this.codeEditor.getSession().setMode('ace/mode/java');
    this.codeEditor.setShowFoldWidgets(true);
  }

  /*
   * res : https://stackoverflow.com/questions/18614169/set-value-for-ace-editor-without-selecting-the-whole-editor
   * */
  private setCodeEditorText(text: string) {
    this.codeEditor.setValue(text, -1); // -1 moves cursor to the start
    // this.codeEditor.selection.$isEmpty = true;
  }

  public async onSubmitFinalCode() {
    const code = this.codeEditor.getValue();
    const id = this.selectedQuestion.id;

    const loadingDialogRef = this.openLoadingDialog();
    try {
      const res = await this.apiHandler.postQuestionCode(id, code);
      loadingDialogRef.close();
      this.setAnalysisResult(res.body['data'], false);
      console.log(res);

    } catch (error) {
      loadingDialogRef.close();
      this.setAnalysisResult(error, true);
      console.log(error);
    }
  }


  private openLoadingDialog(): MatDialogRef<LoadingComponent, any> {
    const dialogRef = this.dialog.open(LoadingComponent, {
      autoFocus: true,
      disableClose: true,
      panelClass: ['transparent-bg', 'no-shadow'],
      width: '250px',
    });
    return dialogRef;
  }

  private setAnalysisResult(serverRes: any, isError: boolean) {

    if (!isError) {
      this.analysisResult = {
        result: {
          samples : serverRes.samples,
          resultComplexity: serverRes.complexity
        },
        isError
      };
    } else {
      this.analysisResult = {
        result: {
          errorMessage: serverRes
        },
        isError
      };
    }
  }

  public onResetCodeEditor() {

    if (confirm('Are you sure ?')) {
      this.setCodeEditorText(this.selectedQuestion.startingText);
    }
  }
}

