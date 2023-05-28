import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductManagerComponent } from './pages/product-manager/product-manager.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';

@NgModule({
	declarations: [AppComponent, DefaultLayoutComponent, AdminLayoutComponent, HomePageComponent, ProductListComponent, ProductDetailsComponent, ProductManagerComponent, ProductAddComponent, ProductUpdateComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
