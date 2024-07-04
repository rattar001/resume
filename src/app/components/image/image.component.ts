import { Component, Input } from '@angular/core';

@Component({
  selector: 'rsm-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  @Input('imgSrc') imageSrc: string = '';

  handlerErrorImage(){
    
  }
}
