import { Injectable } from '@angular/core';
import {questions} from '../data/questions';

@Injectable()
export class QuestionsService {
    questions = questions;

    getQuestionById(questionId) {
        return this.questions.find((question) => {
            return question.id === questionId;
        });
    }
}
