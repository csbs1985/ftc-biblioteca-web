import { Component, OnInit } from '@angular/core';
import { LogoEnum } from '../../enums/logo.enum';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EntrarClass } from '../../class/entrar.class';

@Component({
  selector: 'ftc-formulario-entrar',
  templateUrl: './formulario-entrar.component.html',
  styleUrls: ['./formulario-entrar.component.scss'],
})
export class FormularioEntrarComponent implements OnInit {
  public formEntrar!: FormGroup;
  public logo!: LogoEnum;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormulario(new EntrarClass());
  }

  private criarFormulario(usuario: EntrarClass): void {
    this.formEntrar = this.formBuilder.group({
      senha: [usuario.senha],
      usuario: [usuario.usuario],
    });
  }

  public formularioEntrarClique(): void {
    console.log(this.formEntrar.value); // TODO: criar função
    this.criarFormulario(new EntrarClass());
  }

  public formularioEntrarProblema(): void {
    window.open('https://fleetcor.identitynow.com/ui/d/dashboard', '_blank');
  }

  public get LogoEnum(): typeof LogoEnum {
    return LogoEnum;
  }
}
