import { Component, OnInit } from '@angular/core';
import { Meta } from 'src/app/interfaces/interfaces.component';
import { MetasService } from 'src/app/services/metas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public retiro: {} = {}
  public montoRetirar: number = 0;
  public metaArr: Meta[] = [];
  public montoTotal: number = 0;

  constructor(private metasService: MetasService) { }

  ngOnInit(): void {
    this.metasService.meta().subscribe(meta => {
      console.log(meta)
      this.metaArr = meta;
      this.metaArr.map(meta => {
        meta.retirarTodo = false;
        meta.retirarOtroMonto = null;
      })
    })
  }

  sumaRetiro(){
    this.montoRetirar = 0;
    this.metaArr.forEach((meta:Meta) => {
      this.montoRetirar += meta.retirarOtroMonto
    })
    this.montoTotal = this.montoRetirar
    console.log(this.montoTotal)
  }

  retiroTotal(retiroTotal: boolean, metaId: number) {
    this.metaArr.forEach((meta: Meta) => {
       if (meta.metaId === metaId) { 

        meta.retirarTodo = retiroTotal
        if(retiroTotal){
          meta.retirarOtroMonto = meta.saldoDisponible;
        } else {
          meta.retirarOtroMonto = 0;
        }     
        this.sumaRetiro()
        
      } 
    })
  }

  validarInput(id: number) {
      this.metaArr.forEach((meta: Meta) => {
        const retirarOtroMonto: number = meta.retirarOtroMonto;
        if(meta.retirarOtroMonto > meta.saldoDisponible){
          meta.retirarOtroMonto = 0
        }
        if(meta.retirarOtroMonto < 0){
          meta.retirarOtroMonto = null
        }
        if (meta.metaId === this.metaArr[id].metaId && (retirarOtroMonto === null || isNaN(retirarOtroMonto))) {
            meta.retirarOtroMonto = 0 ;
        }
        if (meta.metaId === this.metaArr[id].metaId) {
          meta.retirarTodo = false
        }
    })  
      this.sumaRetiro();
  }

  seleccionar(){
    
    setTimeout(()=>{  
      this.metasService.disparador.emit({
        data: this.montoTotal
      })         
    }, 1);
  }

}


