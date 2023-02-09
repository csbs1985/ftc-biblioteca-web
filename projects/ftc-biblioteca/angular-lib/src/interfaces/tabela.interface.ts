import { PaginacaoInterface } from './paginacao.interface';

export interface TabelaInterface {
  conteudo: any[];
  paginacao: PaginacaoInterface;
  rotulo: string;
  titulo: string[];
}
