// ********** COMPONENTS **********
import { AppComponent } from './app.component'

// ********** MODULES **********
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HomeModule } from './views/home/home.module'

// ********** NGRX **********
import { StoreModule } from '@ngrx/store'
import { logMetaReducer } from './data/NgRx/metaReducers/logs'
import { ExternalLinkReducer } from './data/NgRx/controller/externalLink/externalLinkReducer'
import { StackReducer } from './data/NgRx/controller/stack/stackReducer'
import { ExperienceReducer } from './data/NgRx/controller/experience/experienceReducer'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    FontAwesomeModule,
    StoreModule.forRoot(
      {
        externalLink: ExternalLinkReducer,
        stack: StackReducer,
        experiences: ExperienceReducer,
      },
      { metaReducers: [logMetaReducer] }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
