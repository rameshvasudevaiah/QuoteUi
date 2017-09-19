import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail.component';
import { BookPopupComponent } from './book-dialog.component';
import { BookDeletePopupComponent } from './book-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class BookResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const bookRoute: Routes = [
    {
        path: 'book',
        component: BookComponent,
        resolve: {
            'pagingParams': BookResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'allianzQuoteMonoGradleApp.book.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'book/:id',
        component: BookDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'allianzQuoteMonoGradleApp.book.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const bookPopupRoute: Routes = [
    {
        path: 'book-new',
        component: BookPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'allianzQuoteMonoGradleApp.book.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'book/:id/edit',
        component: BookPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'allianzQuoteMonoGradleApp.book.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'book/:id/delete',
        component: BookDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'allianzQuoteMonoGradleApp.book.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
