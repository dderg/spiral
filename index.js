'use strict';
function spiral(size) {
    const result = [];
    let x = (size - 1) / 2;
    let y = x;
    const lastTravel = size - 1;
    let currentTravel = 1;
    let multiplier = -1;
    result.push([x, y]);
    while (currentTravel <= lastTravel) {
        for (let i = 0; i < currentTravel; i++) {
            y+= multiplier;
            result.push([x, y]);
        }
        for (let i = 0; i < currentTravel; i++) {
            x+= multiplier;
            result.push([x, y]);
        }
        currentTravel++;
        multiplier*= -1;
    }
    for (let i = 0; i < currentTravel - 1; i++) {
        y+= multiplier;
        result.push([x, y]);
    }
    return result;
}

module.exports = {
    spiral: spiral
};
