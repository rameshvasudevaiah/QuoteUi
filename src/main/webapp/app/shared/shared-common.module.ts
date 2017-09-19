import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    AllianzQuoteMonoGradleSharedLibsModule,
    JhiLanguageHelper,
    FindLanguageFromKeyPipe,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        AllianzQuoteMonoGradleSharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        Title
    ],
    exports: [
        AllianzQuoteMonoGradleSharedLibsModule,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class AllianzQuoteMonoGradleSharedCommonModule {}
