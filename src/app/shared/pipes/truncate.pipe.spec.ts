import { TruncatePipe } from './truncate.pipe';


describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(()=> {
    pipe = new TruncatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should do nothing', () => {
    const dummy = null;
    expect(pipe.transform(dummy)).toEqual(null);
    expect(pipe.transform(dummy)).toBeNull();
  });

  it('should not truncate the string', () => {
    const dummy = "not enough characters"
    expect(pipe.transform(dummy)).toEqual(dummy)
  });

  it('should not truncate the string either', () => {
    const dummy = "not enough characters"
    expect(pipe.transform(dummy, 50)).toEqual(dummy)
  });

  it('should truncate the string and add ...', () => {
    const dummy = "enough characters"
    const expected = "enough..."
    expect(pipe.transform(dummy, expected.length)).toEqual(expected)
  });
});
