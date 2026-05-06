import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ApiComponente } from "./api-componente/api-componente";


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ApiComponente], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('api-formulario');
}
