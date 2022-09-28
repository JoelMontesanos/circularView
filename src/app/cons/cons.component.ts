import { Component, OnInit } from '@angular/core';
import {ClouthesService} from '../services/clouthes.service';
import { Product } from 'src/app/models/Product';
import {Tipo} from '../models/Tipos';
import {Estados} from '../models/Tipos';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-cons',
  templateUrl: './cons.component.html',
  styleUrls: ['./cons.component.css']
})
export class ConsComponent implements OnInit {

  products:any=[];    valorTotalPrenda:number=0;
  marcas: any=[];     creditoTotalCLiente:number=0;
  tip: Tipo[];        valorTotalTienda:number=0;   
  edo: Estados[];   

  estadoSelected2:any; estadoSelected3:any; estadoSelected4:any; estadoSelected5:any;
  estadoSelected6:any; estadoSelected7:any; estadoSelected8:any; estadoSelected9:any;
  estadoSelected10:any;


  marcaSelected2:any; marcaSelected3:any; marcaSelected4:any; marcaSelected5:any;
  marcaSelected6:any; marcaSelected7:any; marcaSelected8:any; marcaSelected9:any;
  marcaSelected10:any;


  tipoSelected2:any; tipoSelected3:any; tipoSelected4:any; tipoSelected5:any; tipoSelected6:any;
  tipoSelected7:any; tipoSelected8:any; tipoSelected9:any; tipoSelected10:any;


  edoSeleccion2:string; edoSeleccion3:string; edoSeleccion4:string; edoSeleccion5:string;
  edoSeleccion6:string; edoSeleccion7:string; edoSeleccion8:string; edoSeleccion9:string;
  edoSeleccion10:string;

           
  //variables resultantes segundo renglón
  valorOriginal2:number=0;       valorTienda2:number=0;
  valorPrenda2:number=0;         creditoCliente2:number=0;
  //variables resultantes tercer renglón
  valorOriginal3:number=0;       valorTienda3:number=0;
  valorPrenda3:number=0;         creditoCliente3:number=0;
  //variables resultantes cuarto renglón
  valorOriginal4:number=0;       valorTienda4:number=0;
  valorPrenda4:number=0;         creditoCliente4:number=0;
  //variables resultantes quinto renglón
  valorOriginal5:number=0;       valorTienda5:number=0;
  valorPrenda5:number=0;         creditoCliente5:number=0;
  //variables resultantes sexto renglón
  valorOriginal6:number=0;       valorTienda6:number=0;
  valorPrenda6:number=0;         creditoCliente6:number=0;
  //variables resultantes septimo renglón
  valorOriginal7:number=0;       valorTienda7:number=0;
  valorPrenda7:number=0;         creditoCliente7:number=0;
  //variables resultantes octavo renglón
  valorOriginal8:number=0;       valorTienda8:number=0;
  valorPrenda8:number=0;         creditoCliente8:number=0;
  //variables resultantes noveno renglón
  valorOriginal9:number=0;       valorTienda9:number=0;
  valorPrenda9:number=0;         creditoCliente9:number=0;
  //variables resultantes segundo renglón
  valorOriginal10:number=0;       valorTienda10:number=0;
  valorPrenda10:number=0;         creditoCliente10:number=0;

  constructor(private clouthesService:ClouthesService) { }

  ngOnInit(): void {
    this.iniciar();
  }
    //Renglón 1
    jas:any;        marcaSelected:any;
    estadoSelected:any;
    tipoSelected:any;
    valO:number=0;
    valP:number=0;
    creditoC:number=0;
    valT:number=0;
    a:number=0; f:number=0; k:number=0;
    b:number=0; g:number=0; l:number=0;
    c:number=0; h:number=0; m:number=0;
    d:number=0; i:number=0;
    e:number=0; j:number=0;
  //Saber Marcas
  saberMarca(marca:any){
    this.jas=marca.marca;      
    this.a= marca.playera;  this.f=marca.chamarra;
    this.b= marca.blusa;    this.g= marca.saco;       this.k = marca.vestido;
    this.c= marca.camisa;   this.h = marca.sueter;    this.l = marca.bolsa;
    this.d=marca.pantalon;  this.i = marca.sudadera;  this.m = marca.monoEnterizo;
    this.e=marca.falda;     this.j = marca.zapatos;
  }
  //Saber tipo
  saberTipo(tipo:string){
    switch (tipo) {
      case 'playera':
        this.valO= this.a;
        break;
      case 'blusa':
        this.valO= this.b;
        break; 
      case 'camisa':
        this.valO= this.c;
        break;
      case 'pantalon':
        this.valO= this.d;
        break;
      case 'falda':
        this.valO= this.e;
        break;
      case 'chamarra':
        this.valO= this.f;
        break;
      case 'saco':
        this.valO= this.g;
        break;
      case 'sueter':
        this.valO= this.h;
        break;
      case 'sudadera':
        this.valO= this.i;
        break;
      case 'zapatos':
        this.valO= this.j;
        break;
      case 'vestido':
        this.valO= this.k;
        break;
      case 'bolsa':
        this.valO= this.l;
        break;
      case 'monoEnterizo':
        this.valO= this.m;
        break;
      default:
        break;
    }
  }
  //Saber Estado
  saberEstado(estado:string){
    switch (estado) {
      case 'Nuevo':
        this.valP = this.valO * .60;
        this.valT = this.valP *1.16;
        this.creditoC = this.valP/2;
        break;
      case 'Perfecto':
        this.valP = this.valO * .20;
        this.valT = this.valP * 1.16;
        this.creditoC = this.valP/2;
        break;
      case 'Bueno':
        this.valP = ((this.valO * .20)-(this.valO *.02));
        this.valT = this.valP * 1.16;
        this.creditoC = this.valP/2;
        break;
    
      default:
        break;
    }
    console.log(this.valP);
    console.log(this.valT);
    console.log(this.creditoC);
    this.totales();
  }

  a2:number=0; f2:number=0; k2:number=0;
  b2:number=0; g2:number=0; l2:number=0;
  c2:number=0; h2:number=0; m2:number=0;
  d2:number=0; i2:number=0; jes:any;
  e2:number=0; j2:number=0;

saberMarca2(marca2:any){
  this.jes=marca2.marca;      
  this.a2= marca2.playera;  this.f2=marca2.chamarra;
  this.b2= marca2.blusa;    this.g2= marca2.saco;       this.k2 = marca2.vestido;
  this.c2= marca2.camisa;   this.h2 = marca2.sueter;    this.l2 = marca2.bolsa;
  this.d2=marca2.pantalon;  this.i2 = marca2.sudadera;  this.m2 = marca2.monoEnterizo;
  this.e2=marca2.falda;     this.j2 = marca2.zapatos;
}
saberTipo2(tipo2:string){
  switch (tipo2) {
    case 'playera':
      this.valorOriginal2= this.a2;
      break;
    case 'blusa':
      this.valorOriginal2= this.b2;
      break; 
    case 'camisa':
      this.valorOriginal2= this.c2;
      break;
    case 'pantalon':
      this.valorOriginal2= this.d2;
      break;
    case 'falda':
      this.valorOriginal2= this.e2;
      break;
    case 'chamarra':
      this.valorOriginal2= this.f2;
      break;
    case 'saco':
      this.valorOriginal2= this.g2;
      break;
    case 'sueter':
      this.valorOriginal2= this.h2;
      break;
    case 'sudadera':
      this.valorOriginal2= this.i2;
      break;
    case 'zapatos':
      this.valorOriginal2= this.j2;
      break;
    case 'vestido':
      this.valorOriginal2= this.k2;
      break;
    case 'bolsa':
      this.valorOriginal2= this.l2;
      break;
    case 'monoEnterizo':
      this.valorOriginal2= this.m2;
      break;
    default:
      break;
  }
}
saberEstado2(estado:string){
  switch (estado) {
    case 'Nuevo':
      this.valorPrenda2 = this.valorOriginal2 * .60;
      this.valorTienda2 = this.valorPrenda2 *1.16;
      this.creditoCliente2 = this.valorPrenda2/2;
      break;
    case 'Perfecto':
      this.valorPrenda2 = this.valorOriginal2 * .20;
      this.valorTienda2 = this.valorPrenda2 * 1.16;
      this.creditoCliente2 = this.valorPrenda2/2;
      break;
    case 'Bueno':
      this.valorPrenda2 = ((this.valorOriginal2 * .20)-(this.valorOriginal2 *.02));
      this.valorTienda2 = this.valorPrenda2 * 1.16;
      this.creditoCliente2 = this.valorPrenda2/2;
      break;
  
    default:
      break;
  }
  console.log(this.valorPrenda2);
  console.log(this.valorTienda2);
  console.log(this.creditoCliente2);
  this.totales();
}

    a3:number=0; f3:number=0; k3:number=0;
    b3:number=0; g3:number=0; l3:number=0;
    c3:number=0; h3:number=0; m3:number=0;
    d3:number=0; i3:number=0; jis:any;
    e3:number=0; j3:number=0;

saberMarca3(marca3:any){
  this.jis=marca3.marca;      
  this.a3= marca3.playera;  this.f3=marca3.chamarra;
  this.b3= marca3.blusa;    this.g3= marca3.saco;       this.k3 = marca3.vestido;
  this.c3= marca3.camisa;   this.h3 = marca3.sueter;    this.l3 = marca3.bolsa;
  this.d3=marca3.pantalon;  this.i3 = marca3.sudadera;  this.m3 = marca3.monoEnterizo;
  this.e3=marca3.falda;     this.j3 = marca3.zapatos;
}
saberTipo3(tipo3:string){
  switch (tipo3) {
    case 'playera':
      this.valorOriginal3= this.a3;
      break;
    case 'blusa':
      this.valorOriginal3= this.b3;
      break; 
    case 'camisa':
      this.valorOriginal3= this.c3;
      break;
    case 'pantalon':
      this.valorOriginal3= this.d3;
      break;
    case 'falda':
      this.valorOriginal3= this.e3;
      break;
    case 'chamarra':
      this.valorOriginal3= this.f3;
      break;
    case 'saco':
      this.valorOriginal3= this.g3;
      break;
    case 'sueter':
      this.valorOriginal3= this.h3;
      break;
    case 'sudadera':
      this.valorOriginal3= this.i3;
      break;
    case 'zapatos':
      this.valorOriginal3= this.j3;
      break;
    case 'vestido':
      this.valorOriginal3= this.k3;
      break;
    case 'bolsa':
      this.valorOriginal3= this.l3;
      break;
    case 'monoEnterizo':
      this.valorOriginal3= this.m3;
      break;
    default:
      break;
  }
}
saberEstado3(estado:string){
  switch (estado) {
    case 'Nuevo':
      this.valorPrenda3 = this.valorOriginal3 * .60;
      this.valorTienda3 = this.valorPrenda3 *1.16;
      this.creditoCliente3 = this.valorPrenda3/2;
      break;
    case 'Perfecto':
      this.valorPrenda3 = this.valorOriginal3 * .20;
      this.valorTienda3 = this.valorPrenda3 * 1.16;
      this.creditoCliente3 = this.valorPrenda3/2;
      break;
    case 'Bueno':
      this.valorPrenda3 = ((this.valorOriginal3 * .20)-(this.valorOriginal3 *.02));
      this.valorTienda3 = this.valorPrenda3 * 1.16;
      this.creditoCliente3 = this.valorPrenda3/2;
      break;
  
    default:
      break;
  }
  console.log(this.valorPrenda3);
  console.log(this.valorTienda3);
  console.log(this.creditoCliente3);
  this.totales();
}


    a4:number=0; f4:number=0; k4:number=0;
    b4:number=0; g4:number=0; l4:number=0;
    c4:number=0; h4:number=0; m4:number=0;
    d4:number=0; i4:number=0; jos:any;
    e4:number=0; j4:number=0;
saberMarca4(marca4:any){
  this.jos=marca4.marca;      
  this.a4= marca4.playera;  this.f4=marca4.chamarra;
  this.b4= marca4.blusa;    this.g4= marca4.saco;       this.k4 = marca4.vestido;
  this.c4= marca4.camisa;   this.h4 = marca4.sueter;    this.l4 = marca4.bolsa;
  this.d4=marca4.pantalon;  this.i4 = marca4.sudadera;  this.m4 = marca4.monoEnterizo;
  this.e4=marca4.falda;     this.j4 = marca4.zapatos;
}
saberEstado4(estado:string){
  switch (estado) {
    case 'Nuevo':
      this.valorPrenda4 = this.valorOriginal4 * .60;
      this.valorTienda4 = this.valorPrenda4 *1.16;
      this.creditoCliente4 = this.valorPrenda4/2;
      break;
    case 'Perfecto':
      this.valorPrenda4 = this.valorOriginal4 * .20;
      this.valorTienda4 = this.valorPrenda4 * 1.16;
      this.creditoCliente4 = this.valorPrenda4/2;
      break;
    case 'Bueno':
      this.valorPrenda4 = ((this.valorOriginal4 * .20)-(this.valorOriginal4 *.02));
      this.valorTienda4 = this.valorPrenda4 * 1.16;
      this.creditoCliente4 = this.valorPrenda4/2;
      break;
  
    default:
      break;
  }
  console.log(this.valorPrenda4);
  console.log(this.valorTienda4);
  console.log(this.creditoCliente4);
  this.totales();
}
saberTipo4(tipo4:string){
  switch (tipo4) {
    case 'playera':
      this.valorOriginal4= this.a4;
      break;
    case 'blusa':
      this.valorOriginal4= this.b4;
      break; 
    case 'camisa':
      this.valorOriginal4= this.c4;
      break;
    case 'pantalon':
      this.valorOriginal4= this.d4;
      break;
    case 'falda':
      this.valorOriginal4= this.e4;
      break;
    case 'chamarra':
      this.valorOriginal4= this.f4;
      break;
    case 'saco':
      this.valorOriginal4= this.g4;
      break;
    case 'sueter':
      this.valorOriginal4= this.h4;
      break;
    case 'sudadera':
      this.valorOriginal4= this.i4;
      break;
    case 'zapatos':
      this.valorOriginal4= this.j4;
      break;
    case 'vestido':
      this.valorOriginal4= this.k4;
      break;
    case 'bolsa':
      this.valorOriginal4= this.l4;
      break;
    case 'monoEnterizo':
      this.valorOriginal4= this.m4;
      break;
    default:
      break;
  }
}


    a5:number=0; f5:number=0; k5:number=0;
    b5:number=0; g5:number=0; l5:number=0;
    c5:number=0; h5:number=0; m5:number=0;
    d5:number=0; i5:number=0; jus:any;
    e5:number=0; j5:number=0;
saberMarca5(marca5:any){
  this.jus=marca5.marca;      
  this.a5= marca5.playera;  this.f5=marca5.chamarra;
  this.b5= marca5.blusa;    this.g5= marca5.saco;       this.k5 = marca5.vestido;
  this.c5= marca5.camisa;   this.h5 = marca5.sueter;    this.l5 = marca5.bolsa;
  this.d5=marca5.pantalon;  this.i5 = marca5.sudadera;  this.m5 = marca5.monoEnterizo;
  this.e5=marca5.falda;     this.j5 = marca5.zapatos;
}
saberTipo5(tipo5:string){
  switch (tipo5) {
    case 'playera':
      this.valorOriginal5= this.a5;
      break;
    case 'blusa':
      this.valorOriginal5= this.b5;
      break; 
    case 'camisa':
      this.valorOriginal5= this.c5;
      break;
    case 'pantalon':
      this.valorOriginal5= this.d5;
      break;
    case 'falda':
      this.valorOriginal5= this.e5;
      break;
    case 'chamarra':
      this.valorOriginal5= this.f5;
      break;
    case 'saco':
      this.valorOriginal5= this.g5;
      break;
    case 'sueter':
      this.valorOriginal5= this.h5;
      break;
    case 'sudadera':
      this.valorOriginal5= this.i5;
      break;
    case 'zapatos':
      this.valorOriginal5= this.j5;
      break;
    case 'vestido':
      this.valorOriginal5= this.k5;
      break;
    case 'bolsa':
      this.valorOriginal5= this.l5;
      break;
    case 'monoEnterizo':
      this.valorOriginal5= this.m5;
      break;
    default:
      break;
  }
}
saberEstado5(estado:string){
  switch (estado) {
    case 'Nuevo':
      this.valorPrenda5 = this.valorOriginal5 * .60;
      this.valorTienda5 = this.valorPrenda5 *1.16;
      this.creditoCliente5 = this.valorPrenda5/2;
      break;
    case 'Perfecto':
      this.valorPrenda5 = this.valorOriginal5 * .20;
      this.valorTienda5 = this.valorPrenda5 * 1.16;
      this.creditoCliente5 = this.valorPrenda5/2;
      break;
    case 'Bueno':
      this.valorPrenda5 = ((this.valorOriginal5 * .20)-(this.valorOriginal5 *.02));
      this.valorTienda5 = this.valorPrenda5 * 1.16;
      this.creditoCliente5 = this.valorPrenda5/2;
      break;
  
    default:
      break;
  }
  console.log(this.valorPrenda5);
  console.log(this.valorTienda5);
  console.log(this.creditoCliente5);
  this.totales();
}



    a6:number=0; f6:number=0; k6:number=0;
    b6:number=0; g6:number=0; l6:number=0;
    c6:number=0; h6:number=0; m6:number=0;
    d6:number=0; i6:number=0; jaas:any;
    e6:number=0; j6:number=0;
saberMarca6(marca6:any){
  this.jaas=marca6.marca;      
  this.a6= marca6.playera;  this.f5=marca6.chamarra;
  this.b6= marca6.blusa;    this.g5= marca6.saco;       this.k6 = marca6.vestido;
  this.c6= marca6.camisa;   this.h5 = marca6.sueter;    this.l6 = marca6.bolsa;
  this.d6=marca6.pantalon;  this.i5 = marca6.sudadera;  this.m6 = marca6.monoEnterizo;
  this.e6=marca6.falda;     this.j5 = marca6.zapatos;
}
saberTipo6(tipo6:string){
  switch (tipo6) {
    case 'playera':
      this.valorOriginal6= this.a6;
      break;
    case 'blusa':
      this.valorOriginal6= this.b6;
      break; 
    case 'camisa':
      this.valorOriginal6= this.c6;
      break;
    case 'pantalon':
      this.valorOriginal6= this.d6;
      break;
    case 'falda':
      this.valorOriginal6= this.e6;
      break;
    case 'chamarra':
      this.valorOriginal6= this.f6;
      break;
    case 'saco':
      this.valorOriginal6= this.g6;
      break;
    case 'sueter':
      this.valorOriginal6= this.h6;
      break;
    case 'sudadera':
      this.valorOriginal6= this.i6;
      break;
    case 'zapatos':
      this.valorOriginal6= this.j6;
      break;
    case 'vestido':
      this.valorOriginal6= this.k6;
      break;
    case 'bolsa':
      this.valorOriginal6= this.l6;
      break;
    case 'monoEnterizo':
      this.valorOriginal6= this.m6;
      break;
    default:
      break;
  }
}
saberEstado6(estado6:string){
  switch (estado6) {
    case 'Nuevo':
      this.valorPrenda6 = this.valorOriginal6 * .60;
      this.valorTienda6 = this.valorPrenda6 *1.16;
      this.creditoCliente6 = this.valorPrenda6/2;
      break;
    case 'Perfecto':
      this.valorPrenda6 = this.valorOriginal6 * .20;
      this.valorTienda6 = this.valorPrenda6 * 1.16;
      this.creditoCliente6 = this.valorPrenda6/2;
      break;
    case 'Bueno':
      this.valorPrenda6 = ((this.valorOriginal6 * .20)-(this.valorOriginal6 *.02));
      this.valorTienda6 = this.valorPrenda6 * 1.16;
      this.creditoCliente6 = this.valorPrenda6/2;
      break;
  
    default:
      break;
  }
  console.log(this.valorPrenda6);
  console.log(this.valorTienda6);
  console.log(this.creditoCliente6);
  this.totales();
}




    a7:number=0; f7:number=0; k7:number=0;
    b7:number=0; g7:number=0; l7:number=0;
    c7:number=0; h7:number=0; m7:number=0;
    d7:number=0; i7:number=0; jees:any;
    e7:number=0; j7:number=0;
saberMarca7(marca7:any){
  this.jees=marca7.marca;      
  this.a7= marca7.playera;  this.f7=marca7.chamarra;
  this.b7= marca7.blusa;    this.g7= marca7.saco;       this.k7 = marca7.vestido;
  this.c7= marca7.camisa;   this.h7 = marca7.sueter;    this.l7 = marca7.bolsa;
  this.d7=marca7.pantalon;  this.i7 = marca7.sudadera;  this.m7 = marca7.monoEnterizo;
  this.e7=marca7.falda;     this.j7 = marca7.zapatos;
}
saberTipo7(tipo7:string){
  switch (tipo7) {
    case 'playera':
      this.valorOriginal7= this.a7;
      break;
    case 'blusa':
      this.valorOriginal7= this.b7;
      break; 
    case 'camisa':
      this.valorOriginal7= this.c7;
      break;
    case 'pantalon':
      this.valorOriginal7= this.d7;
      break;
    case 'falda':
      this.valorOriginal7= this.e7;
      break;
    case 'chamarra':
      this.valorOriginal7= this.f7;
      break;
    case 'saco':
      this.valorOriginal7= this.g7;
      break;
    case 'sueter':
      this.valorOriginal7= this.h7;
      break;
    case 'sudadera':
      this.valorOriginal7= this.i7;
      break;
    case 'zapatos':
      this.valorOriginal7= this.j7;
      break;
    case 'vestido':
      this.valorOriginal7= this.k7;
      break;
    case 'bolsa':
      this.valorOriginal7= this.l7;
      break;
    case 'monoEnterizo':
      this.valorOriginal7= this.m7;
      break;
    default:
      break;
  }
}
saberEstado7(estado7:string){
  switch (estado7) {
    case 'Nuevo':
      this.valorPrenda7 = this.valorOriginal7 * .60;
      this.valorTienda7 = this.valorPrenda7 *1.16;
      this.creditoCliente7 = this.valorPrenda7/2;
      break;
    case 'Perfecto':
      this.valorPrenda7 = this.valorOriginal7 * .20;
      this.valorTienda7 = this.valorPrenda7 * 1.16;
      this.creditoCliente7 = this.valorPrenda7/2;
      break;
    case 'Bueno':
      this.valorPrenda7 = ((this.valorOriginal7 * .20)-(this.valorOriginal7 *.02));
      this.valorTienda7 = this.valorPrenda7 * 1.16;
      this.creditoCliente7 = this.valorPrenda7/2;
      break;
  
    default:
      break;
  }
  console.log(this.valorPrenda7);
  console.log(this.valorTienda7);
  console.log(this.creditoCliente7);
  this.totales();
}


    a8:number=0; f8:number=0; k8:number=0;
    b8:number=0; g8:number=0; l8:number=0;
    c8:number=0; h8:number=0; m8:number=0;
    d8:number=0; i8:number=0; jiis:any;
    e8:number=0; j8:number=0;
saberMarca8(marca8:any){
  this.jiis=marca8.marca;      
  this.a8= marca8.playera;  this.f8=marca8.chamarra;
  this.b8= marca8.blusa;    this.g8= marca8.saco;       this.k8 = marca8.vestido;
  this.c8= marca8.camisa;   this.h8 = marca8.sueter;    this.l8 = marca8.bolsa;
  this.d8=marca8.pantalon;  this.i8 = marca8.sudadera;  this.m8 = marca8.monoEnterizo;
  this.e8=marca8.falda;     this.j8 = marca8.zapatos;
}
saberTipo8(tipo8:string){
  switch (tipo8) {
    case 'playera':
      this.valorOriginal8= this.a8;
      break;
    case 'blusa':
      this.valorOriginal8= this.b8;
      break; 
    case 'camisa':
      this.valorOriginal8= this.c8;
      break;
    case 'pantalon':
      this.valorOriginal8= this.d8;
      break;
    case 'falda':
      this.valorOriginal8= this.e8;
      break;
    case 'chamarra':
      this.valorOriginal8= this.f8;
      break;
    case 'saco':
      this.valorOriginal8= this.g8;
      break;
    case 'sueter':
      this.valorOriginal8= this.h8;
      break;
    case 'sudadera':
      this.valorOriginal8= this.i8;
      break;
    case 'zapatos':
      this.valorOriginal8= this.j8;
      break;
    case 'vestido':
      this.valorOriginal8= this.k8;
      break;
    case 'bolsa':
      this.valorOriginal8= this.l8;
      break;
    case 'monoEnterizo':
      this.valorOriginal8= this.m8;
      break;
    default:
      break;
  }
}
saberEstado8(estado8:string){
  switch (estado8) {
    case 'Nuevo':
      this.valorPrenda8 = this.valorOriginal8 * .60;
      this.valorTienda8 = this.valorPrenda8 *1.16;
      this.creditoCliente8 = this.valorPrenda8/2;
      break;
    case 'Perfecto':
      this.valorPrenda8 = this.valorOriginal8 * .20;
      this.valorTienda8 = this.valorPrenda8 * 1.16;
      this.creditoCliente8 = this.valorPrenda8/2;
      break;
    case 'Bueno':
      this.valorPrenda8 = ((this.valorOriginal8 * .20)-(this.valorOriginal8 *.02));
      this.valorTienda8 = this.valorPrenda8 * 1.16;
      this.creditoCliente8 = this.valorPrenda8/2;
      break;
  
    default:
      break;
  }
  console.log(this.valorPrenda8);
  console.log(this.valorTienda8);
  console.log(this.creditoCliente8);
  this.totales();
}

    a9:number=0; f9:number=0; k9:number=0;
    b9:number=0; g9:number=0; l9:number=0;
    c9:number=0; h9:number=0; m9:number=0;
    d9:number=0; i9:number=0; joos:any;
    e9:number=0; j9:number=0;
saberMarca9(marca9:any){
  this.jus=marca9.marca;      
  this.a9= marca9.playera;  this.f9=marca9.chamarra;
  this.b9= marca9.blusa;    this.g9= marca9.saco;       this.k9 = marca9.vestido;
  this.c9= marca9.camisa;   this.h9 = marca9.sueter;    this.l9 = marca9.bolsa;
  this.d9=marca9.pantalon;  this.i9 = marca9.sudadera;  this.m9 = marca9.monoEnterizo;
  this.e9=marca9.falda;     this.j9 = marca9.zapatos;
}
saberTipo9(tipo9:string){
  switch (tipo9) {
    case 'playera':
      this.valorOriginal9= this.a9;
      break;
    case 'blusa':
      this.valorOriginal9= this.b9;
      break; 
    case 'camisa':
      this.valorOriginal9= this.c9;
      break;
    case 'pantalon':
      this.valorOriginal9= this.d9;
      break;
    case 'falda':
      this.valorOriginal9= this.e9;
      break;
    case 'chamarra':
      this.valorOriginal9= this.f9;
      break;
    case 'saco':
      this.valorOriginal9= this.g9;
      break;
    case 'sueter':
      this.valorOriginal9= this.h9;
      break;
    case 'sudadera':
      this.valorOriginal9= this.i9;
      break;
    case 'zapatos':
      this.valorOriginal9= this.j9;
      break;
    case 'vestido':
      this.valorOriginal9= this.k9;
      break;
    case 'bolsa':
      this.valorOriginal9= this.l9;
      break;
    case 'monoEnterizo':
      this.valorOriginal9= this.m9;
      break;
    default:
      break;
  }
}
saberEstado9(estado9:string){
  switch (estado9) {
    case 'Nuevo':
      this.valorPrenda9 = this.valorOriginal9 * .60;
      this.valorTienda9 = this.valorPrenda9 *1.16;
      this.creditoCliente9 = this.valorPrenda9/2;
      break;
    case 'Perfecto':
      this.valorPrenda9 = this.valorOriginal9 * .20;
      this.valorTienda9 = this.valorPrenda9 * 1.16;
      this.creditoCliente9 = this.valorPrenda9/2;
      break;
    case 'Bueno':
      this.valorPrenda9 = ((this.valorOriginal9 * .20)-(this.valorOriginal9 *.02));
      this.valorTienda9 = this.valorPrenda9 * 1.16;
      this.creditoCliente9 = this.valorPrenda9/2;
      break;
  
    default:
      break;
  }
  console.log(this.valorPrenda9);
  console.log(this.valorTienda9);
  console.log(this.creditoCliente9);
  this.totales();
}


    a10:number=0; f10:number=0; k10:number=0;
    b10:number=0; g10:number=0; l10:number=0;
    c10:number=0; h10:number=0; m10:number=0;
    d10:number=0; i10:number=0; juus:any;
    e10:number=0; j10:number=0;
saberMarca10(marca10:any){
  this.juus=marca10.marca;      
  this.a10= marca10.playera;  this.f10=marca10.chamarra;
  this.b10= marca10.blusa;    this.g10= marca10.saco;       this.k10 = marca10.vestido;
  this.c10= marca10.camisa;   this.h10 = marca10.sueter;    this.l10 = marca10.bolsa;
  this.d10=marca10.pantalon;  this.i10 = marca10.sudadera;  this.m10 = marca10.monoEnterizo;
  this.e10=marca10.falda;     this.j10 = marca10.zapatos;
}
saberTipo10(tipo10:string){
  switch (tipo10) {
    case 'playera':
      this.valorOriginal10= this.a10;
      break;
    case 'blusa':
      this.valorOriginal10= this.b10;
      break; 
    case 'camisa':
      this.valorOriginal10= this.c10;
      break;
    case 'pantalon':
      this.valorOriginal10= this.d10;
      break;
    case 'falda':
      this.valorOriginal10= this.e10;
      break;
    case 'chamarra':
      this.valorOriginal10= this.f10;
      break;
    case 'saco':
      this.valorOriginal10= this.g10;
      break;
    case 'sueter':
      this.valorOriginal10= this.h10;
      break;
    case 'sudadera':
      this.valorOriginal10= this.i10;
      break;
    case 'zapatos':
      this.valorOriginal10= this.j10;
      break;
    case 'vestido':
      this.valorOriginal10= this.k10;
      break;
    case 'bolsa':
      this.valorOriginal10= this.l10;
      break;
    case 'monoEnterizo':
      this.valorOriginal10= this.m10;
      break;
    default:
      break;
  }
}
saberEstado10(estado10:string){
  switch (estado10) {
    case 'Nuevo':
      this.valorPrenda10 = this.valorOriginal10 * .60;
      this.valorTienda10 = this.valorPrenda10 *1.16;
      this.creditoCliente10 = this.valorPrenda10/2;
      break;
    case 'Perfecto':
      this.valorPrenda10 = this.valorOriginal10 * .20;
      this.valorTienda10 = this.valorPrenda10 * 1.16;
      this.creditoCliente10 = this.valorPrenda10/2;
      break;
    case 'Bueno':
      this.valorPrenda10 = ((this.valorOriginal10 * .20)-(this.valorOriginal10 *.02));
      this.valorTienda10 = this.valorPrenda10 * 1.16;
      this.creditoCliente10 = this.valorPrenda10/2;
      break;
  
    default:
      break;
  }
  console.log(this.valorPrenda10);
  console.log(this.valorTienda10);
  console.log(this.creditoCliente10);
  this.totales();
}

totales(){
  this.valorTotalPrenda= this.valP+this.valorPrenda2+this.valorPrenda3+this.valorPrenda4+this.valorPrenda5+this.valorPrenda6+this.valorPrenda7+this.valorPrenda8+this.valorPrenda9+this.valorPrenda10;
  this.creditoTotalCLiente= this.creditoC+this.creditoCliente2+this.creditoCliente3+this.creditoCliente4+this.creditoCliente5+this.creditoCliente6+this.creditoCliente7+this.creditoCliente8+this.creditoCliente9+this.creditoCliente10;
  this.valorTotalTienda= this.valT+this.valorTienda2+this.valorTienda3+this.valorTienda4+this.valorTienda5+this.valorTienda6+this.valorTienda7+this.valorTienda8+this.valorTienda9+this.valorTienda10;
}


iniciar(){
  this.clouthesService.getClouthes().subscribe(
    res => {
      console.log(res);
      this.products = res; // there's an array for each product
      this.marcas=res;
      this.tip = [
          {id:1,nombre:'playera'},
          {id:2,nombre:'blusa'},
          {id:3,nombre:'camisa'},
          {id:4,nombre:'pantalon'},
          {id:5,nombre:'falda'},
          {id:6,nombre:'chamarra'},
          {id:7,nombre:'saco'},
          {id:8,nombre:'sueter'},
          {id:9,nombre:'sudadera'},
          {id:10,nombre:'zapatos'},
          {id:11,nombre:'vestido'},
          {id:12,nombre:'bolsa'},
          {id:13,nombre:'monoEnterizo'}
      ];
      this.edo=[
        {id:1,nombre:'Nuevo'},
        {id:2,nombre:'Perfecto'},
        {id:3,nombre:'Bueno'},
      ];
      this.marcaSelected= {};
      this.marcaSelected2={};
      this.marcaSelected3={};
      this.marcaSelected4={};
      this.marcaSelected5={};
      this.marcaSelected6={};
      this.marcaSelected7={};
      this.marcaSelected8={};
      this.marcaSelected9={};
      this.marcaSelected10={};
      this.tipoSelected={};
      this.tipoSelected2={};
      this.tipoSelected3={};
      this.tipoSelected4={};
      this.tipoSelected5={};
      this.tipoSelected6={};
      this.tipoSelected7={};
      this.tipoSelected8={};
      this.tipoSelected9={};
      this.tipoSelected10={};
      this.estadoSelected={};
      this.estadoSelected2={};
      this.estadoSelected3={};
      this.estadoSelected4={};
      this.estadoSelected5={};
      this.estadoSelected6={};
      this.estadoSelected7={};
      this.estadoSelected8={};
      this.estadoSelected9={};
      this.estadoSelected10={};
    },
    err => console.log(err)
  );
}
}