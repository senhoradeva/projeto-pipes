import { AgePipe } from './age.pipe';

describe(AgePipe.name, () => {
  const pipe = new AgePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should  user return your age', () => {
   const users = [
      {
        name: 'Chapolim Colorado',
        age: 38,
      },
    ];

    const minAge = [3];

    pipe.transform(users, minAge);

    expect(users.filter(user => user.age >= minAge[0])).toBeTruthy();
  });

});
