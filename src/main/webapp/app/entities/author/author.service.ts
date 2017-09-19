import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils } from 'ng-jhipster';

import { Author } from './author.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class AuthorService {

    private resourceUrl = 'api/authors';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(author: Author): Observable<Author> {
        const copy = this.convert(author);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    update(author: Author): Observable<Author> {
        const copy = this.convert(author);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    find(id: number): Observable<Author> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            this.convertItemFromServer(jsonResponse[i]);
        }
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convertItemFromServer(entity: any) {
        entity.birthDate = this.dateUtils
            .convertLocalDateFromServer(entity.birthDate);
    }

    private convert(author: Author): Author {
        const copy: Author = Object.assign({}, author);
        copy.birthDate = this.dateUtils
            .convertLocalDateToServer(author.birthDate);
        return copy;
    }
}
