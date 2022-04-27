export interface Model {
  _id:                string;
  idDono:             number;
  cpfcnpj:            string;
  nome:               string;
  email:              string;
  slogan:             string;
  logo:               string;
  telefone:           string;
  mediaNota:          number;
  totalAvaliacoes:    number;
  destaque:           boolean;
  formasPagamento:    string[];
  status:             number;
  status__comentario: string;
  endereco:           string;
  servicos:           string[];
  imagens:            string[];
  funcionarios:       string[];
  funcionamento:      string[];
}
