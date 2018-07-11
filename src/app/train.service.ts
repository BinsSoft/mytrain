import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable()
export class TrainService {

	//api : string = 'http://localhost:8080';
	api : string = 'https://apibinssoft.herokuapp.com';
	httpOptions : any ;
	constructor(private http : HttpClient) {
		this.api += '/train-api/';
		this.httpOptions = {
		  headers: new HttpHeaders({'Access-Control-Allow-Origin' : "*",
	  	"Access-Control-Allow-Credentials": "true",
	  	"Access-Control-Allow-Methods" : "GET,HEAD,OPTIONS,POST,PUT",
	  	"Access-Control-Allow-Headers": "access-control-allow-credentials,access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,content-type",
	    'Content-Type':  'application/json'})
		};
	 }

	getTrainDetails(trainNo) {
		let url = this.api+'train-details/'+trainNo;

		return this.http.get(url,this.httpOptions);
	}

	searchStationByCode(searchValue) {
		return this.http.get(this.api+'train-auto-search?s='+searchValue)
	}

	searchTrainBetweenStations(formData) {
		return this.http.post(this.api+'train-between-stations', JSON.stringify(formData), this.httpOptions);
	}

}
