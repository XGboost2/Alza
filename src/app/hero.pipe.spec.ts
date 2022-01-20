import { HeroPipe } from './hero.pipe';

describe('HeroPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroPipe();
    expect(pipe).toBeTruthy();
  });
});
