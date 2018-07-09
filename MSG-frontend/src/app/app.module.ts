import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, Input, LOCALE_ID } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewVisitComponent } from './new-visit/new-visit.component';
import { CookieService } from 'ngx-cookie-service';
import { EditVisitComponent } from './edit-visit/edit-visit.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatepickerComponent,
    DashboardComponent,
    NewVisitComponent,
    EditVisitComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
