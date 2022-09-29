import { CpfCnpjPipe } from './cpf-cnpj.pipe';

describe(CpfCnpjPipe.name, () => {
  const pipe = new CpfCnpjPipe();

  it('create an instance', () => {
    const pipe = new CpfCnpjPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "37350299060" to "373.502.990-60"', () => {
   expect(pipe.transform('37350299060')).toBe('373.502.990-60');
	});

  it('transforms "25112220000138" to "25.112.220/0001-38"', () => {
    expect(pipe.transform('25112220000138')).toBe('25.112.220/0001-38');
   });

   it('Should document lenght > 14 return empty string', () => {
    expect(pipe.transform('2511222000013866788888')).toBe('');
   });
});
