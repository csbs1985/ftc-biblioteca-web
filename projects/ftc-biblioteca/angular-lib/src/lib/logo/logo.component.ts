import { Component, OnInit, Input } from '@angular/core';
import { LogoEnum } from '../../enums/logo.enum';

const BASE_PATH = 'assets/icons';

@Component({
  selector: 'ftc-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  public logoCaminho!: string;

  @Input() tipo!: LogoEnum;
  @Input() link!: string;
  @Input() blank: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.logo();
  }

  private logo() {
    this.logoCaminho = `${BASE_PATH}/${this.tipo}.svg`;
  }

  public clicouLogo() {
    if (this.link) window.open(this.link, this.blank ? '_blank' : '_self');
  }

  public get LogoEnum(): typeof LogoEnum {
    return LogoEnum;
  }
}
