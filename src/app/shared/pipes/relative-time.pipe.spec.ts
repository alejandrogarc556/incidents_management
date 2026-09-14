import { RelativeTimePipe } from "./relative-time.pipe.ts-pipe";

describe('RelativeTimePipe', () => {

    let pipe: RelativeTimePipe;

    beforeEach(() => {
        pipe = new RelativeTimePipe();
    });

    it('should return today', () => {
        const today = new Date();
        expect(
            pipe.transform(today)
        ).toBe('Today');
    });

    it('should return yesterday', () => {
        const yesterday = new Date(Date.now() - 86400000);
        expect(
            pipe.transform(yesterday)
        ).toBe('Yesterday');
    });

});