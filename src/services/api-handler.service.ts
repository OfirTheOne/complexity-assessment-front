import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiHandlerService {

    constructor(private http: HttpClient) { }

    public async postCodeToCompile(questionId, code) {
        const queryUrl = environment.api_url + 'analysis/' + 'compile/';
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
            throw error;
        }
    }

    public async getAllQuestions() {
        const queryUrl = environment.api_url + 'questions/';
        try {
            const res = await this.http.get(queryUrl, { observe: 'response' });
            console.log(res);
        } catch (error) {
            console.log(error);

        }
    }

    public async postCodeToAnalysis(questionId: string, code: string) {
        const queryUrl = environment.api_url + 'analysis/';
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
            throw error;
        }

    }
}
