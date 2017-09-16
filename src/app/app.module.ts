import { BrowserModule } from '@angular/platform-browser';
import { Component, Injector, NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Router, Route } from '@angular/router';


// Components
import { AppComponent } from './app.component';
import { Page404Component } from './page-404/page-404.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

// Services
import { PagesService } from './pages.service';

function getRouteComponents(routesMap: any, componentsList: { [key: string]: Component }, store: any[] = []): any[] {
	routesMap.forEach((route: any) => {
		if (route.component) {
			store.push({
				path: route.path,
				component: componentsList[route.component]
			});
		}
		if (route.children) {
			store.push(getRouteComponents(route.children, componentsList));
		}
	});
	return store;
};

const components: { [key: string]: Component } = {
	HomeComponent,
	ContactsComponent,
	Page404Component
};

export function configPagesService(configService: PagesService, injector: Injector): any {
	return () => configService.getRoutes();
}

@NgModule({
	declarations: [
		AppComponent,
		Page404Component,
		ContactsComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot([]),
	],
	providers: [
		PagesService,
		{
			provide: APP_INITIALIZER,
			useFactory: configPagesService,
			deps: [PagesService, Injector],
			multi: true
		}
	],
	bootstrap: [
		AppComponent
	],
	entryComponents: [
		HomeComponent,
		Page404Component,
		ContactsComponent
	]
})
export class AppModule {}
