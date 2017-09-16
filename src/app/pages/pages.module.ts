import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: []
})
export class PagesModule {
	public constructor(
		private _activatedRoute: ActivatedRoute
	) {
		console.log(this._activatedRoute);
		this._activatedRoute.data.subscribe((data: any) => {
			console.log(data);
		});
	}
}
