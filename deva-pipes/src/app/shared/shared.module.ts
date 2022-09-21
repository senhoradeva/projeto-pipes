import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfCnpjPipe } from './cpf-cnpj-pipe/cpf-cnpj.pipe';



@NgModule({
  declarations: [
    CpfCnpjPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [CpfCnpjPipe]
})
export class SharedModule { }
