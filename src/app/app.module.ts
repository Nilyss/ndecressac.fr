// ********** COMPONENTS **********
import { AppComponent } from './app.component'

// ********** MODULES **********
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HomeModule } from './views/home/home.module'

// ********** NGRX **********
import { StoreModule } from '@ngrx/store'
import { logMetaReducer } from './data/NgRx/metaReducers/logs'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FontAwesomeModule,
    StoreModule.forRoot({}, { metaReducers: [logMetaReducer] }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
