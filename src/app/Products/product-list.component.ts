import {Component,OnInit} from '@angular/core';

import {IProduct} from './product';

@Component({
	selector: 'pm-products',
	templateUrl: './product-list.component.html',
	styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
	pageTitle: string = 'Product List';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	
	filteredProductList: IProduct[] = [];

	constructor(){
		this.filteredProductList = this.products;
		this.listFilter = 'cart';
	}

	_listFilter: string;
	get listFilter():string{
		return this._listFilter;
	}

	set listFilter(item:string){console.log('ksusslfa');
		this._listFilter = item;
		this.filteredProductList = this._listFilter ? this.performFilter(this._listFilter):this.products;
 	}

	products: IProduct[]=[
	  
  ];

  performFilter(filterBy:string): IProduct[]{
  	filterBy = filterBy.toLowerCase();
  	return this.products.filter((product:IProduct)=>product.productName.toLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
  	this.showImage = !this.showImage;
  }

  ngOnInit(): void{
  	console.log('on init method fired');
  }

  onNotify(eventValue:string):void{
  	this.pageTitle = 'Product List ' + eventValue;
  }
  
}