import { Component, OnInit, HostBinding } from '@angular/core';
import { Product } from 'src/app/models/Product';
import {ClouthesService} from '../../services/clouthes.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clouthes-form',
  templateUrl: './clouthes-form.component.html',
  styleUrls: ['./clouthes-form.component.css']
})
export class ClouthesFormComponent implements OnInit {
  @HostBinding ('class') classes = 'row';
  
  marca:Product ={
    id:0,
    marca: "",
    playera: 0,
    blusa:0,
    camisa:0,
    pantalon:0,
    falda:0,
    chamarra:0,
    saco:0,
    sueter:0,
    sudadera:0,
    zapatos:0,
    vestido:0,
    bolsa:0,
    monoEnterizo:0,
    image:""
  }
  edit:boolean = false;

  constructor(private clouthesService: ClouthesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit():void {
    const params=this.activatedRoute.snapshot.params;
    if(params.id){
      this.clouthesService.getClouthe(params.id)
      .subscribe(
        res=>{
          /*console.log(res);
          console.log(this.marca);*/
          this.marca = <any> res;
          this.edit = true;
        },
        err=>console.log(err)
      );
    }
  }
  saveNewClouthe(){
    delete this.marca.id;
    this.clouthesService.saveProduct(this.marca)
      .subscribe(
        res =>{
          console.log(res);
          this.router.navigate(['/']);
        },
        err =>console.error(err)
      );
  }

  updateProduct(){
    console.log(this.marca);
    this.clouthesService.updateProduct(this.marca.id,this.marca)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.log(err)
        
      )
  }
}
