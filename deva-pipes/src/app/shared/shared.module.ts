import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfCnpjPipe } from './cpf-cnpj-pipe/cpf-cnpj.pipe';
import { CreditCardPipe } from './credit-card-pipe/credit-card.pipe';
import { AgePipe } from './age-pipe/age.pipe';

@NgModule({
  declarations: [CpfCnpjPipe, CreditCardPipe, AgePipe],
  imports: [CommonModule],
  exports: [CpfCnpjPipe, CreditCardPipe, AgePipe],
})
export class SharedModule {}
