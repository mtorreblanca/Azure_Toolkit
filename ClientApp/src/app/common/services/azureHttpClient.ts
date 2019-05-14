import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AzureHttpClient {
    constructor(private http: HttpClient) { }
    get(url: string, apiKey: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Ocp-Apim-Subscription-Key': apiKey
            })
        };
        return this.http.get(url, httpOptions);
    }
    post(url, apiKey, data) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Ocp-Apim-Subscription-Key': apiKey
            })
        };
        return this.http.post(url, data, httpOptions);
    }
}
