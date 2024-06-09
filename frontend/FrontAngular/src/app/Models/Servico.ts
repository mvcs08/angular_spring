export interface Servico{
  id: Number;
	/*tipo: String;
	valor: Number;
	descricao: String;*/
  titulo: String;
  fornecedor: String;
  numeroNota: Number;
  formaPagamento: String;
  parcelas: Number;
  vencimento: String;
  centroCusto: String;
  statusPagamento: String;
}
