import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router, Route } from '@angular/router';

import { Observable } from 'rxjs/Observable';

// import { PagesService } from './pages.service';

import { Page404Component } from './page-404/page-404.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public routesLoaded: boolean = false;
	public title: string = 'app works!';
	public constructor() {}

	public ngOnInit(): void {
		console.log('AppComponent');
	}
}
