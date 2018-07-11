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
	search()
	{
		this.train.getTrainDetails(this.trainNo).subscribe((data)=>{
			console.log(data);	
		})
		
	}

}
