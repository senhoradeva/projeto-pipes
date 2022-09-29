import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfCnpjPipe } from './cpf-cnpj-pipe/cpf-cnpj.pipe';
import { CreditCardPipe } from './credit-card-pipe/credit-card.pipe';

@NgModule({
  declarations: [CpfCnpjPipe, CreditCardPipe],
  imports: [CommonModule],
  exports: [CpfCnpjPipe, CreditCardPipe],
})
export class SharedModule {}
