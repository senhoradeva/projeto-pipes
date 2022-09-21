import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfCnpj'
})
export class CpfCnpjPipe implements PipeTransform {

  transform(cpf: string): string {
    cpf = cpf.replace(/\D/g, '');
    //TODO tratar length de digitos

    if (cpf.length <= 11) {
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else {
      cpf = cpf.replace(/^(\d{2})(\d)/, '$1.$2');
      cpf = cpf.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
      cpf = cpf.replace(/\.(\d{3})(\d)/, '.$1/$2');
      cpf = cpf.replace(/(\d{4})(\d)/, '$1-$2');
    }

    return cpf;
  }

}
