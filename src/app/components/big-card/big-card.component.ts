import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescripiton:string ="Max, o cão sábio: Uma história de lealdade e sabedoria canina que tocou corações e inspirou a todos a viverem melhor."
  @Input()
  Id:string="0"

constructor(){}

ngOnInit(): void {

}
}
