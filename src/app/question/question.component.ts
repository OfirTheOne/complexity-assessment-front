import { SnackbarService } from './../../services/snackbar.service';
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
  compileResult: {pass: boolean, msg: string};

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private snackbar: SnackbarService,
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

  ngAfterViewInit() { }

  private createCodeEditorElement(): any {
    this.codeEditor = window['ace'].edit(document.getElementById('codeEditor'));
    const lt = window['ace'].require('ace/ext/language_tools');
    console.log(lt);
    this.codeEditor.setTheme('ace/theme/github');
    this.codeEditor.setOptions({ // for editor resize and fit the contant
      maxLines: Infinity,
      enableBasicAutocompletion: true
    });
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

  public async onSubmitCode() {
    const code = this.codeEditor.getValue();
    const id = this.selectedQuestion.id;
    this.snackbar.openSnackBar('Analysist request sent.');
    const loadingDialogRef = this.openLoadingDialog();
    try {
      const res = await this.apiHandler.postCodeToAnalysis(id, code);
      loadingDialogRef.close();
      this.snackbar.openSnackBar('Analysis request finished.');
      this.setAnalysisResult(res.body['data']);
      console.log(res);

    } catch (error) {
      loadingDialogRef.close();
      this.snackbar.openSnackBar('Analysis request failed.');
      // this.setAnalysisResult(error, true);
      console.log(error);
    }
  }

  private setAnalysisResult(serverRes: any) {
    this.compileResult = undefined; // undisplay the build result part
    if (!serverRes['stderr']) {
      this.analysisResult = {
        result: {
          samples : serverRes.samples,
          resultComplexity: serverRes.complexity
        },
        isError: false
      };
    } else {
      this.analysisResult = {
        result: {
          errorMessage: serverRes['stderr']
        },
        isError: true
      };
    }
  }

  public async onBuildCode() {
    const code = this.codeEditor.getValue();
    const id = this.selectedQuestion.id;

    this.snackbar.openSnackBar('Build request sent.');
    const loadingDialogRef = this.openLoadingDialog();
    try {
      const res = await this.apiHandler.postCodeToCompile(id, code);
      const stderr = res.body['data'] ? res.body['data'].stderr : undefined;
      if (stderr) {
        this.compileResult = { pass : false, msg : stderr};

      } else {
        this.compileResult = { pass : true, msg : ''};
      }
      loadingDialogRef.close();
      this.snackbar.openSnackBar('Build request finished.');
      console.log(res);

    } catch (error) {
      console.log(error);
      this.compileResult = { pass : false, msg : error};
      loadingDialogRef.close();
      this.snackbar.openSnackBar('Build request failed.');

    }
  }

  public onResetCodeEditor() {

    if (confirm('Are you sure ?')) {
      this.setCodeEditorText(this.selectedQuestion.startingText);
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

}

