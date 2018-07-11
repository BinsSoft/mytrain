import {  Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainBetweenStationsComponent } from './train-between-stations/train-between-stations.component';
export const appRoute : Routes = [
	{
		path : '',
		component : HomeComponent
	},
	{
		path : 'train-between-stations',
		component : TrainBetweenStationsComponent
	}
];