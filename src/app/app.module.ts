import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WinlossViewComponent } from './winloss-view/winloss-view.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { WinLossServiceService} from './services/win-loss-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const appRoutes: Routes = [
  { path: '', redirectTo: '/winloss', pathMatch: 'full' },
  {
    path: 'winloss',
    component: WinlossViewComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WinlossViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [WinLossServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
