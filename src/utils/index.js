// Olivier Paspuel 
const assertFiniteNumber = (value) => {
    if (!Number.isFinite(value)) {
        throw new TypeError('Value must be a finite number');
    }
};

// Olivier Paspuel 
const roundTo = (value, decimals) => {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
};


// Olivier Paspuel 
const toCelsius = (f) => {
    assertFiniteNumber(f);
    const result = (f - 32) * (5 / 9);
    return roundTo(result, 1);
};

// Olivier Paspuel
const toFahrenheit = (c) => {
    assertFiniteNumber(c);
    const result = (c * (9 / 5)) + 32;
    return roundTo(result, 1);
};

// Olivier Paspuel
const movingAverage = (series, window) => {
    if (!Array.isArray(series)) {
        throw new TypeError('series must be an array');
    }

    series.forEach((value, index) => {
        if (!Number.isFinite(value)) {
            throw new TypeError(`series[${index}] must be a finite number`);
        }
    });

    if (!Number.isFinite(window)) {
        throw new TypeError('window must be a finite number');
    }

    if (!Number.isInteger(window) || window < 2 || window > series.length) {
        throw new RangeError('window must be an integer between 2 and series.length');
    }

    const result = [];
    for (let i = 0; i <= series.length - window; i += 1) {
        let sum = 0;
        for (let j = 0; j < window; j += 1) {
            sum += series[i + j];
        }
        result.push(roundTo(sum / window, 2));
    }

    return result;
};

module.exports = {
    toCelsius,
    toFahrenheit,
    movingAverage,
};
