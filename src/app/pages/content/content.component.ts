import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstQ43Dl5wkIqN4GZ0tnW_aZVFVqvZ6iMRqA&usqp=CAU"
  contentTitle:string = "Minha Noticia"
  contentDescription:string ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, autem."
}
