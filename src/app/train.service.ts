import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Global} from './global.config';
@Injectable()
export class TrainService {

	//api : string = 'http://localhost:8080';
	api : string = 'https://apibinssoft.herokuapp.com';
	httpOptions : any ;
	constructor(private http : HttpClient, private global : Global) {
		this.api += '/train-api/';
		this.httpOptions = {
		  headers: new HttpHeaders({'Access-Control-Allow-Origin' : "*",
	  	"Access-Control-Allow-Credentials": "true",
	  	"Access-Control-Allow-Methods" : "GET,HEAD,OPTIONS,POST,PUT",
	  	"Access-Control-Allow-Headers": "access-control-allow-credentials,access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,content-type",
	    'Content-Type':  'application/json'})
		};
	 }

	getTrainDetails(postData) {
		
		let url = this.api+'train-details';

		return this.http.post(url, JSON.stringify(postData), this.httpOptions);
	}

	searchStationByCode(searchValue) {
		let stationList = this.global.getStationList();
		return  stationList.find((i)=>{
			return i.code.startsWith(searchValue) || i.display.startsWith(searchValue) 
		});
	}

	searchTrainBetweenStations(formData) {
		return this.http.post(this.api+'train-between-stations', JSON.stringify(formData), this.httpOptions);
	}

	searchTrainLiveStatus(formData) {
		return this.http.post(this.api+'train-current-status', JSON.stringify(formData), this.httpOptions);
	}

	runDays(dayStr)
	{
		let dayDisplayArr = ['S','M','T','W','T','F','S'];
		let dayArr = dayStr.split('');
		var returnData = [];
		for(let d in dayDisplayArr) {
			returnData.push({
				day : dayDisplayArr[d],
				status : dayArr[d]
			})
		}
		return returnData;
	}


}
