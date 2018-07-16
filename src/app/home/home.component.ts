import { Component, OnInit } from '@angular/core';
import {TrainService} from '../train.service';
import { FormControl , FormGroup,  Validators  } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	trainNo : string = '';
	loader : boolean = false;
	searchAction : boolean = false;
	details : any = {};
	searchResult : any = [];
	trainFormControl : FormControl = new FormControl;
	constructor(private train : TrainService) {

		this.trainFormControl.valueChanges.subscribe(data=>{
			console.log(data);
			//if (data.length > 1) {
				this.train.searchTrainByCode(data).subscribe(responseData=>{
					this.searchResult = [];
					if (responseData != null){
						this.searchResult = responseData['body'];
					}	
				});
				
			//}
		})
	}

	ngOnInit() {
	}
	
	search()
	{
		if (this.trainNo != ''){
			this.loader = true;
			this.searchAction = true;
			this.train.searchTrainLiveStatus({trainid : this.trainNo}).subscribe((data)=>{
				this.loader = false;
				
	    		this.details = data['body'];
	    		
			})
		}
		
	}

}
