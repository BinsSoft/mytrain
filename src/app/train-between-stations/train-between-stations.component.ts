import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup,  Validators  } from '@angular/forms';
import {TrainService} from '../train.service';
@Component({
  selector: 'app-train-between-stations',
  templateUrl: './train-between-stations.component.html',
  styleUrls: ['./train-between-stations.component.css']
})
export class TrainBetweenStationsComponent implements OnInit {
	form: FormGroup;
	station : any = {
		source : '',
		destination : ''
	}
	sourceSearch :FormControl = new FormControl;
	destinationSearch : FormControl = new FormControl;
	searchSourceResult : any = [];
	searchDestResult : any =[];
	constructor(private train : TrainService) {
		 this.form = new FormGroup({
	      source : new FormControl('',[Validators.required]),
	      destination : new FormControl('',[Validators.required]),
	    });
		this.sourceSearch.valueChanges.subscribe(data=>{
			this.form.controls['source'].setValue('');
			if (data.length > 1) {
				this.train.searchStationByCode(data).subscribe(responseData=>{
					this.searchSourceResult = [];
					if (responseData != null){
						this.searchSourceResult.push(responseData);
					}
				})
			}
		})
		this.destinationSearch.valueChanges.subscribe(data=>{
			this.form.controls['destination'].setValue('');
			if (data.length > 1) {
				this.train.searchStationByCode(data).subscribe(responseData=>{
					this.searchDestResult = [];
					if (responseData != null){
						this.searchDestResult.push(responseData);
					}
				})
			}
		})
	}

	ngOnInit() {
	}
	trainList : any = [];
	search()
	{
		this.train.searchTrainBetweenStations(this.form.value).subscribe((data)=>{
			this.trainList = [];
			if (data['body']) {
				if (data['body'].trains.length > 0) {
					this.trainList = data['body'].trains;
				}
			}
		})
	}

}
