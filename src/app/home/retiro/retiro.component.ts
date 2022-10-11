
import { Component, OnInit} from '@angular/core';
import { MetasService } from '../../services/metas.service';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {

 
  public montoTotal: number = 0;

  constructor(private metasService: MetasService) { }

  ngOnInit(): void {
    console.log('hola')
    this.metasService.disparador.subscribe(data => {
      console.log('Recibiendo data', data)
      this.montoTotal = data.data;
    })

    
    
  }

    


}
