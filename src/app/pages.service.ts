import { Injectable, Injector, Inject, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Route } from '@angular/router';

// Components
import { Page404Component } from './page-404/page-404.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

import { RouterService } from './router.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

interface IWindow extends Window {
	routes: any;
}

function getRoutesComponents(routesMap: any, componentsList: { [key: string]: Component }, store: any[] = []): any[] {
	routesMap.forEach((route: any) => {
		if (route.component) {
			store.push({
				path: route.path,
				component: componentsList[route.component]
			});
		}
		if (route.children) {
			store.push(getRoutesComponents(route.children, componentsList));
		}
	});
	return store;
};

const components: { [key: string]: Component } = {
	HomeComponent,
	ContactsComponent,
	Page404Component
};

@Injectable()
export class PagesService {
	public routes: Route[];
	public constructor(
		private _http: HttpClient
	) {}

	public getRoutes(): Promise<any> {
		console.log(this);
		return this._http.get('/assets/pages.json')
			.toPromise()
				.then((data: any) => {
					const routes: any = getRoutesComponents(data, components);
					this.routes = routes;
					console.log(routes);
					return true;
				});
	}
}

// win.routes = [{
// 	path: '',
// 	component: HomeComponent
// },{
// 	path: 'contacts',
// 	component: ContactsComponent
// },{
// 	path: '**',
// 	component: Page404Component
// }];
