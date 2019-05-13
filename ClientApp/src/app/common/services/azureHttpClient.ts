import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AzureHttpClient {
    constructor(private http: HttpClient) { }
    get(url: string, apiKey: string) {
        console.log(apiKey);
        const headers = new HttpHeaders();
        headers.set('Ocp-Apim-Subscription-Key', apiKey);
        return this.http.get(url, {
            headers: headers
        });
    }
    post(url, apiKey, data) {
        const headers = new HttpHeaders();
        headers.set('Ocp-Apim-Subscription-Key', apiKey);
        return this.http.post(url, data, {
            headers: headers
        });
    }
}
