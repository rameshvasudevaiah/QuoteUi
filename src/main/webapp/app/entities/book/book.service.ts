import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils } from 'ng-jhipster';

import { Book } from './book.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class BookService {

    private resourceUrl = 'api/books';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(book: Book): Observable<Book> {
        const copy = this.convert(book);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    update(book: Book): Observable<Book> {
        const copy = this.convert(book);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            this.convertItemFromServer(jsonResponse);
            return jsonResponse;
        });
    }

    find(id: number): Observable<Book> {
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
        entity.publicationDate = this.dateUtils
            .convertLocalDateFromServer(entity.publicationDate);
    }

    private convert(book: Book): Book {
        const copy: Book = Object.assign({}, book);
        copy.publicationDate = this.dateUtils
            .convertLocalDateToServer(book.publicationDate);
        return copy;
    }
}
