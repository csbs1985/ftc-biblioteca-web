import { NovidadesItemInterface } from './novidades-item.interface';

export interface NovidadesInterface {
  projeto: string;
  titulo: string;
  versao: string;
  data: string;
  itens: NovidadesItemInterface[];
}
