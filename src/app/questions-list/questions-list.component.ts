import { Question } from './../../models/question.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { questions } from '../../data/questions';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  questions;
  constructor(private router: Router) {
    this.questions = Object.freeze(questions);
  }

  ngOnInit() {
    // console.log(questions);
  }

  onSelectQuestion(question: Question) {
    // console.log(question);
    this.router.navigate(['/question', question.id]);
  }
}
