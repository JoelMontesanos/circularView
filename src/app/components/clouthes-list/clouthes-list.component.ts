import { Component, OnInit, HostBinding } from '@angular/core';

import {ClouthesService} from '../../services/clouthes.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-clouthes-list',
  templateUrl: './clouthes-list.component.html',
  styleUrls: ['./clouthes-list.component.css']
})
export class ClouthesListComponent implements OnInit {

  @HostBinding('class') classes= 'row';
  products:any=[];

  constructor(private clouthesService:ClouthesService) {   }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.clouthesService.getClouthes().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
  }

  deleteProduct(id: string){
    this.clouthesService.deleteProduct(id). subscribe(
      res =>{
        console.log(res);
        this.getGames();
      },
      err=> console.log(err)
    );
  }
}
