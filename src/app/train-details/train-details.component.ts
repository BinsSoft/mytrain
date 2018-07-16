import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TrainService} from '../train.service';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css']
})
export class TrainDetailsComponent implements OnInit {

  constructor(private train : TrainService, private activateRoute : ActivatedRoute, private route : Router) { }
  params : any = [];
  details : any = {};
  runData : any = [];
  availibity : any = [];
  loader : boolean = false;
  ngOnInit() {
  	this.activateRoute.params.subscribe(params => {
    	this.params = params;
    	this.loader = true;
    	this.train.getTrainDetails(this.params).subscribe((data)=> {
    		this.loader = false;
    		this.details = data['body'];
    		this.runData = this.train.runDays(this.details['train']['train']['runson']);

    		this.availibity = [];

    		for (let aIndex in this.details['availibity']) {
    			let row = {
    				day : aIndex,
    				result : []
    			}
    			for(let a in this.details['availibity'][aIndex]) {
    				row.result.push({
    					couch : a,
    					class : this.details['availibity'][aIndex][a]['class'],
    					value : this.details['availibity'][aIndex][a]['value'] 
    				})
    			}
    			this.availibity.push(row);
    		}
    	});
    });
  }

  goBackToList()
  {
  	this.route.navigate(['train-between-stations'])
  }

}
