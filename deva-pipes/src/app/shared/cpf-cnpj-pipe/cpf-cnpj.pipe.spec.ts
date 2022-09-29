import { CpfCnpjPipe } from './cpf-cnpj.pipe';

describe(CpfCnpjPipe.name, () => {
  const pipe = new CpfCnpjPipe();

  it('create an instance', () => {
    const pipe = new CpfCnpjPipe();
    expect(pipe).toBeTruthy();
  });

   [['37350299060', '373.502.990-60'],
   ['25112220000138', '25.112.220/0001-38'],
   ['2511222000013866788888', '']
  ].forEach(([doc, expected]) => {
    it(`Should return doc ${expected} for string ${doc}`, () => {
     expect(pipe.transform(doc)).toBe(expected);
    });
  })
});
