import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsercardComponent } from './usercard/usercard.component';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { UserlistService } from './userlist.service';
import {HttpModule} from '@angular/http';
import {OrderModule} from 'ngx-order-pipe';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatPaginatorModule, MatTableModule, MatSortModule , MatButtonModule,
MatInputModule, MatIconModule, MatRippleModule, MatDialogModule} from '@angular/material';
import {
  MatFormFieldModule, MatSelectModule, MatTooltipModule, MatButtonToggleModule, MatGridListModule,
  MatAutocompleteModule
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path: '', component: UserlistComponent},
  {path: 'userDetail/:id', component: UsercardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UsercardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatAutocompleteModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    OrderModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatRippleModule,
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UserlistService,
  RouterLinkActive],
  bootstrap: [AppComponent],
  exports: [MatTableModule]
})
export class AppModule { }
