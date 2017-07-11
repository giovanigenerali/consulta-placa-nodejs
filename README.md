# Consulta Placa de Veículo SINESP

## Como funciona?

Basta você passar via GET a placa do veículo "placa".

### Placa existente (sem restrição):

[http://placa-wgenial.rhcloud.com/AFT0017](http://placa-wgenial.rhcloud.com/AFT0017)

```javascript
{
  "codigoRetorno": "0",
  "mensagemRetorno": "Sem erros.",
  "codigoSituacao": "0",
  "situacao": "Sem restrição",
  "modelo": "I/FERRARI 360 MODENA",
  "marca": "I/FERRARI 360 MODENA",
  "cor": "VERMELHA",
  "ano": "1999",
  "anoModelo": "2000",
  "placa": "AFT0017",
  "data": "11/07/2017 às 15:47:49",
  "uf": "PR",
  "municipio": "QUATRO BARRAS",
  "chassi": "************15765"
}
```

### Placa existente (roubo/furto):

[http://placa-wgenial.rhcloud.com/FFF0012](http://placa-wgenial.rhcloud.com/FFF0012)

```javascript
{
  "codigoRetorno": "0",
  "mensagemRetorno": "Sem erros.",
  "codigoSituacao": "1",
  "situacao": "Roubo/Furto",
  "modelo": "I/MMC L200 4X4",
  "marca": "I/MMC L200 4X4",
  "cor": "PRETA",
  "ano": "1992",
  "anoModelo": "1993",
  "placa": "FFF0012",
  "data": "11/07/2017 às 15:49:03",
  "uf": "SP",
  "municipio": "SAO PAULO",
  "chassi": "************01561"
}
```

### Placa não encontrada:

[http://placa-wgenial.rhcloud.com/AAA0000](http://placa-wgenial.rhcloud.com/AAA0000)

```javascript
{
  "codigoRetorno": "3",
  "mensagemRetorno": "Veículo não encontrado."
}
```

### Erro de comunicação com o SINESP

```javascript
{
  "error": "<mensagem de erro>"
}
```

## Atenção

Este projeto não possui nenhum vínculo oficial com o Sistema Nacional de Informações de Segurança Pública (SINESP). O software é disponibilizado da forma como está aqui e não há garantias que ele irá funcionar sempre. Como a API do SINESP não é publicamente documentada, esta biblioteca pode parar de funcionar a qualquer momento sem aviso prévio.


## Dependência

Este projeto utiliza o package 'sinesp-nodejs', para mais informações em como utilizar acesse o repositório do projeto:

- GitHub
  
  [https://github.com/bbarreto/sinesp-nodejs](https://github.com/bbarreto/sinesp-nodejs)

- NPM
  
  [https://www.npmjs.com/package/sinesp-nodejs](https://www.npmjs.com/package/sinesp-nodejs)
