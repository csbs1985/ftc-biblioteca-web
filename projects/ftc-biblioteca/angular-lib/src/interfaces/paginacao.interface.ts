export interface PaginacaoInterface {
  mostrandoAte: number;
  mostrandoDe: number;
  paginaAtual: number;
  paginaTotal: number;
  porPagina: number;
  proximasPaginas: number[];
  ultimaPagina: number;
  totalConteudo: number;
}
