import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfCnpj'
})
export class CpfCnpjPipe implements PipeTransform {

  transform(cpf: string): string {
    cpf = cpf?.replace(/\D/g, '');
    //TODO tratar length de digitos

    let mask = cpf?.toString()?.replace(cpf, '');
    const tamMask = mask?.length;
   // console.log('TAM', tamMask)


    if(cpf) {
      if(cpf.length > 14) {

        console.log('TAM', cpf)

        alert("erro")
        cpf = cpf.substring(0, -1);
      }
      if (cpf.length <= 11) {
        cpf = cpf.substring(0, 11);
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      } else {
        cpf = cpf.substring(0, 14);

        cpf = cpf.replace(/^(\d{2})(\d)/, '$1.$2');
        cpf = cpf.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
        cpf = cpf.replace(/\.(\d{3})(\d)/, '.$1/$2');
        cpf = cpf.replace(/(\d{4})(\d)/, '$1-$2');
      }
    }


    return cpf;
  }

}
