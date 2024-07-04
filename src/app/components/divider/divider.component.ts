import { Component, Input } from '@angular/core';

@Component({
  selector: 'rsm-divider',
  standalone: true,
  imports: [],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css'
})
export class DividerComponent {
  @Input('type') type: 'default' | 'dash' | 'wave' = 'default'
  @Input('class') class = '';
}
