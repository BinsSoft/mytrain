import {  Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainBetweenStationsComponent } from './train-between-stations/train-between-stations.component';
import { TrainDetailsComponent } from './train-details/train-details.component';
export const appRoute : Routes = [
	{
		path : '',
		component : HomeComponent
	},
	{
		path : 'train-between-stations',
		component : TrainBetweenStationsComponent
	},
	{
		path : 'train-details/:trainid/:source/:dest',
		component : TrainDetailsComponent
	}
];