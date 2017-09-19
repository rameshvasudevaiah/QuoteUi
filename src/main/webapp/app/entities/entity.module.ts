import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AllianzQuoteMonoGradleAuthorModule } from './author/author.module';
import { AllianzQuoteMonoGradleBookModule } from './book/book.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AllianzQuoteMonoGradleAuthorModule,
        AllianzQuoteMonoGradleBookModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AllianzQuoteMonoGradleEntityModule {}
