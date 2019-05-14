import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { AzureHttpClient } from './azureHttpClient';
import { BingSearchResponse } from '../models/bingSearchResponse';
import { ComputerVisionRequest, ComputerVisionResponse } from '../models/computerVisionResponse';

@Injectable()
export class CognitiveService {

    bingSearchAPIKey = 'f07de7827dc748bf9b04529f829d8495';
    computerVisionAPIKey = 'a34c4335431d424d995591227218f1f1';
    constructor(private http: AzureHttpClient) { }


    searchImages(searchTerm: string): Observable<BingSearchResponse> {
        return this.http.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${searchTerm}`, this.bingSearchAPIKey)
            .pipe(map(response => response as BingSearchResponse)).pipe(
                catchError(this.handleError));
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    analyzeImage(request: ComputerVisionRequest): Observable<ComputerVisionResponse> {
        return this.http.
            post('https://centralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description,Tags',
                this.computerVisionAPIKey, request)
            .pipe(map(response => response as BingSearchResponse)).pipe(
                catchError(this.handleError));
    }
}
