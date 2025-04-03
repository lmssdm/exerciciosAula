import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { texto } from './modulo1';
import { MediaComponent } from './media/media/media.component';
import { DiasComponent } from './dias/dias.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MediaComponent, DiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = texto;
}
