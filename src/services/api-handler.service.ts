import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiHandlerService {

    constructor(private http: HttpClient) { }

    public async getAllQuestions() {
        const queryUrl = environment.api_url + 'questions/';
        try {
            const res = await this.http.get(queryUrl, { observe: 'response' });
            console.log(res);
        } catch (error) {
            console.log(error);

        }
    }

    public async postQuestionCode(questionId: string, code: string) {
        const queryUrl = /*environment.api_url */ 'http://localhost:3000/' + 'analysis/';
        const requestBody = {
            id: questionId,
            code
        };
        try {
            const res = await this.http.post(queryUrl, requestBody, { observe: 'response' }).toPromise();
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
            if (error.error && error.error.stderr) {
                throw new Error(error.error.stderr);
            } else {
                throw error;
            }
        }

    }
}
