import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import {Produto} from '../modelo/Produto';

@Component({
  standalone: true,
  selector: 'app-api-componente',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, Produto ],
  templateUrl: './api-componente.html',
  styleUrl: './api-componente.css',
}),

export class ApiComponente {

  //Objeto de formulario
formulario = new FormGroup({

//Validators 
nome: new FormControl('', [Validators.required,Validators.minLength(3)]),
idade: new FormControl(null,[Validators.required,Validators.min(0),Validators.max(120)]),
cidade: new FormControl('',[Validators.required,Validators.minLength(3)] ),
sexo: new FormControl('M',[Validators.required])

})

//Visibilidade dos botões
btnCadastrar: boolean =true;

//Vetor Pessoa
vetor:Produto [] = [];

cadastrar(){
  //Cadastro no vetor
  this.vetor.push(this.formulario.value as Produto);

  //Limpeza dos inputs
  this.formulario.reset();

  //Visualização no console
  console.table(this.vetor);
}

//armazenar indice de pesssoa selecionada
indice: number = -1

//função selecionar
selecionar(indice: number){
  //armazenar indice de pesssoa selecionada
  this.indice = indice;

  //atribuir os dados da pessoa no formulário
  this.formulario.setValue({
    nome: this.vetor[this.indice].nome,
    idade: this.vetor[this.indice].idade,
    cidade: this.vetor[this.indice].cidade,
    sexo:this.vetor[this.indice].sexo
  });

  //visibilidade dos botões
  this.btnCadastrar = false;
}
//função para alterar dados do cadastro
 alterar(){
  //alterar os dados da pessoa no vetor
  this.vetor[this.indice] = this.formulario.value as Produto;  
 
  this.formulario.reset();

  //visibilidade dos botões
  this.btnCadastrar = true;
  }

  //funçao para remover dados do cadastro
  remover(){
  
    //removendo uma pessoa do vetor
  this.vetor.splice(this.indice,1);
  
  //limpar o formulário
  this.formulario.reset();

  //visibilidade dos botões
  this.btnCadastrar = true;
  }
  cancelar(){
    //limpar o formulário
    this.formulario.reset();

    //visibilidade dos botões
    this.btnCadastrar = true;
  }
}
