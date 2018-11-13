// point/rect/layout
const _x = 0;
const _y = 1;

// rect
const _w = 2;
const _h = 3;

// hotspot = rect + id 
const _id = 4;

// layout
const _ox = 2;
const _oy = 3;
const _mode = 4;
const _padding = 5;
const _maxw = 6;
const _maxh = 7;
const _totalw = 8;
const _totalh = 9;

// drawstate
const _Hovered = 0;
const _Held = 1;

// layout modes
const _none = 0;
const _vertical = 1;
const _horizontal = 2;
// later: 'grid', 'columns', 'rows'

// colors
const _r = 0;
const _g = 1;
const _b = 2;
const _a = 3;

// mouse buttons
const _left = 0;
const _middle = 1;
const _right = 2;

function sum(a) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        let v = a[i];
        result += v;
    }
    return result;
}
console.assert(sum([1, 2, 3]) == 6);