import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { StarsComponent } from './components/stars/stars.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { RootComponent } from './components/root/root.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Code404Component } from './components/code404/code404.component';
import { ProductDescComponent } from './components/product-desc/product-desc.component';
import { SellerInfoComponent } from './components/seller-info/seller-info.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import {ProductService} from './shared/product.service';
import {AnotherProductService} from './shared/another-product.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    ProductComponent,
    StarsComponent,
    FooterComponent,
    SearchComponent,
    RootComponent,
    HomeComponent,
    Code404Component,
    ProductDescComponent,
    SellerInfoComponent,
    ChatComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ProductService, AnotherProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
