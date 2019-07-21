import {Component,OnInit,Input} from '@angular/core';
@Component({
	selector:'pm-star',
	templateUrl:'./star.component.html',
	styleUrls:['./star.component.css']
})
export class StarComponent implements OnInit{
	@Input() rating:number = 1;
	starWidth: number;

	ngOnInit():void{
		this.starWidth = 75*this.rating/5;
	}
}