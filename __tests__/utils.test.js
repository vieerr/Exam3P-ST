const { toCelsius, toFahrenheit, movingAverage } = require('../src/utils');

describe('toCelsius', () => {
    // Olivier Paspuel
    test('converts reference cases', () => {
        expect(toCelsius(32)).toBe(0.0);
        expect(toCelsius(-40)).toBe(-40.0);
        expect(toCelsius(212)).toBe(100.0);
    });

    test('rounds to one decimal', () => {
        expect(toCelsius(100)).toBe(37.8);
    });

    test('throws on non-numeric input', () => {
        expect(() => toCelsius('32')).toThrow(TypeError);
        expect(() => toCelsius(Number.NaN)).toThrow(TypeError);
    });
});

describe('toFahrenheit', () => {
    test('converts reference cases', () => {
        expect(toFahrenheit(0)).toBe(32.0);
        expect(toFahrenheit(100)).toBe(212.0);
        expect(toFahrenheit(-40)).toBe(-40.0);
    });

    test('rounds to one decimal', () => {
        expect(toFahrenheit(37.777)).toBe(100.0);
    });

    test('throws on non-numeric input', () => {
        expect(() => toFahrenheit(undefined)).toThrow(TypeError);
        expect(() => toFahrenheit(Infinity)).toThrow(TypeError);
    });
});

describe('movingAverage', () => {
    test('computes moving averages for window 2', () => {
        expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
    });

    // Olivier Paspuel
    test('computes moving averages for window 3', () => {
        expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
    });

    test('rounds to two decimals', () => {
        expect(movingAverage([1, 2, 2], 2)).toEqual([1.50, 2.00]);
    });

    test('throws on non-numeric series values', () => {
        expect(() => movingAverage([1, '2', 3], 2)).toThrow(TypeError);
    });

    test('throws on invalid window values', () => {
        expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError);
        expect(() => movingAverage([1, 2, 3], 4)).toThrow(RangeError);
        expect(() => movingAverage([1, 2, 3], 2.5)).toThrow(RangeError);
    });

    test('throws on non-numeric window', () => {
        expect(() => movingAverage([1, 2, 3], '2')).toThrow(TypeError);
    });
});
