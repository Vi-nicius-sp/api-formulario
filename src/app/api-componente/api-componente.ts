import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Produtos } from './modelo/Produtos';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-api-componente',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, Produtos, RouterOutlet ],
  templateUrl: './api-componente.html',
  styleUrl: './api-componente.css',
}),

export class ApiComponente {

}