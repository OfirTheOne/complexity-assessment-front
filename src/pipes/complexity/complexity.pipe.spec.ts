import { ComplexityPipe } from './complexity.pipe';

describe('ComplexityPipe', () => {
  it('create an instance', () => {
    const pipe = new ComplexityPipe();
    expect(pipe).toBeTruthy();
  });
});
