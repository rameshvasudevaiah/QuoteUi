import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AllianzQuoteMonoGradleSharedModule } from '../../shared';
import {
    AuthorService,
    AuthorPopupService,
    AuthorComponent,
    AuthorDetailComponent,
    AuthorDialogComponent,
    AuthorPopupComponent,
    AuthorDeletePopupComponent,
    AuthorDeleteDialogComponent,
    authorRoute,
    authorPopupRoute,
    AuthorResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...authorRoute,
    ...authorPopupRoute,
];

@NgModule({
    imports: [
        AllianzQuoteMonoGradleSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        AuthorComponent,
        AuthorDetailComponent,
        AuthorDialogComponent,
        AuthorDeleteDialogComponent,
        AuthorPopupComponent,
        AuthorDeletePopupComponent,
    ],
    entryComponents: [
        AuthorComponent,
        AuthorDialogComponent,
        AuthorPopupComponent,
        AuthorDeleteDialogComponent,
        AuthorDeletePopupComponent,
    ],
    providers: [
        AuthorService,
        AuthorPopupService,
        AuthorResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AllianzQuoteMonoGradleAuthorModule {}
