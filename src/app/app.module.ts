import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { StoreModule } from '@ngrx/store';
import { adminReducer } from 'src/store/admin.reducer';

@NgModule({
  declarations: [AppComponent, AdminusersComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, StoreModule.forRoot({adminUser: adminReducer})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
