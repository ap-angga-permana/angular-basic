import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {BrowserModule} from "@angular/platform-browser";
import {RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink,
    HttpClientModule
  ]
})
export class CoreModule {
}
