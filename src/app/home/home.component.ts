import { Component, OnInit } from '@angular/core';
import {TrainService} from '../train.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	trainNo : string = '';
	constructor(private train : TrainService) { }

	ngOnInit() {
	}
	loader : boolean = false;
	searchAction : boolean = false;
	details : any = {};
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
