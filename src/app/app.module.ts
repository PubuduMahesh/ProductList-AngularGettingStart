import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {ProductListComponent} from './Products/product-list.component';
import {ConvertToSpacesPipe} from './shared/convtert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import {WelcomeComponent} from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {path: 'products', componet: ProductListComponent},
    {path: 'products/:id',component: ProductDetailComponent},
    {path: 'welcome', component: WelcomeComponent}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
