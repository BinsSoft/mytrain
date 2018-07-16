import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup,  Validators  } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TrainService} from '../train.service';
import {Global} from '../global.config';

@Component({
  selector: 'app-train-between-stations',
  templateUrl: './train-between-stations.component.html',
  styleUrls: ['./train-between-stations.component.css']
})
export class TrainBetweenStationsComponent implements OnInit {
	loader : boolean = false;
	searchAction : boolean = false;
	form: FormGroup;
	station : any = {
		source : '',
		destination : ''
	}
	sourceSearch :FormControl = new FormControl;
	destinationSearch : FormControl = new FormControl;
	searchSourceResult : any = [];
	searchDestResult : any =[];
	constructor(private train : TrainService, private activateRoute : ActivatedRoute, private route : Router, private global : Global) {
		 this.form = new FormGroup({
	      source : new FormControl('',[Validators.required]),
	      destination : new FormControl('',[Validators.required]),
	    });

		 if (this.global.searchStations) {
			this.destinationSearch.setValue(this.global.searchStations.dest.name);
			this.sourceSearch.setValue(this.global.searchStations.source.name);
			this.form.setValue({
				source : this.global.searchStations.source.value,
				destination : this.global.searchStations.dest.value
			})
			this.search();
		}

		this.sourceSearch.valueChanges.subscribe(data=>{
			this.form.controls['source'].setValue('');
			if (data.length > 1) {
				let responseData = this.train.searchStationByCode(data);
				this.searchSourceResult = [];
				if (responseData != null){
					this.searchSourceResult.push(responseData);
				}
			}
		})
		this.destinationSearch.valueChanges.subscribe(data=>{
			this.form.controls['destination'].setValue('');
			if (data.length > 1) {
				let responseData = this.train.searchStationByCode(data)
				this.searchDestResult = [];
				if (responseData != null){
					this.searchDestResult.push(responseData);
				}
			}
		})
	}

	ngOnInit() {
		
	}
	trainList : any = [];
	search()
	{
		this.searchAction = true;
		this.loader = true;
		let searchData = {
			dest : {
				value : this.form.value.destination,
				name : this.destinationSearch.value
			},
			source : {
				value : this.form.value.source,
				name : this.sourceSearch.value
			}
		}
		this.global.setSearchStations(searchData);

		this.train.searchTrainBetweenStations(this.form.value).subscribe((data)=>{
			this.trainList = [];
			this.loader = false;
			if (data['body']) {
				if (data['body'].trains.length > 0) {
					this.trainList = data['body'].trains;
				}
			}
		})
	}

	reloadPage()
	{
		this.form.controls['destination'].setValue('');
		this.destinationSearch.setValue('');
		this.form.controls['source'].setValue('');
		this.sourceSearch.setValue('');
		this.trainList = [];
	}

	exchangeSearch()
	{
		let dest = {
			value : this.form.value.destination,
			display : this.destinationSearch.value
		}
		let source = {
			value : this.form.value.source,
			display : this.sourceSearch.value
		}
		this.destinationSearch.setValue(source.display);
		this.sourceSearch.setValue(dest.display);
		this.form.setValue({
			source : dest.value,
			destination : source.value
		})
		this.search();


	}

	goToTrainDetails(trainId)
	{
		this.route.navigate(['train-details/', trainId, this.form.get('source').value,  this.form.get('destination').value])
	}

}
