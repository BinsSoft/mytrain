import { Injectable } from '@angular/core';
@Injectable()
export class Global
{	
	
	constructor(
	    ) { 
	}
	

	searchStations : any ;
	setSearchStations(details)
	{
		this.searchStations = details;
	}
}