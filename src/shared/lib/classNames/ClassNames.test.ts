import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass'))
            .toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass test test3';

        expect(classNames('someClass', {}, ['test', 'test3']))
            .toBe(expected);
    });

    test('with mods class all active', () => {
        const expected = 'someClass test test3 hovered scrollable';

        expect(classNames('someClass', {
            hovered: true,
            scrollable: true
        }, ['test', 'test3']))
            .toBe(expected);
    });
    test('with mods class one of two active', () => {
        const expected = 'someClass test test3 scrollable';

        expect(classNames('someClass', {
            hovered: false,
            scrollable: true
        }, ['test', 'test3']))
            .toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass test test3';

        expect(classNames('someClass', {
            hovered: false,
            scrollable: undefined
        }, ['test', 'test3']))
            .toBe(expected);
    });
});
