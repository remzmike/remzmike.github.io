const _x = 0;
const _y = 1;
const _w = 2;
const _h = 3;

let round = Math.round;
let assert = console.assert;
let log = console.log;

var box_gradient_x1 = 112; //40;
var box_gradient_y1 = -100; //0;
var box_gradient_x2 = 260; //200;
var box_gradient_y2 = 121; //240;
var box_gradient_color_stop1 = { r: 15, g: 15, b: 76, a: 0.39166666666666666 };
var box_gradient_color_stop2 = { r: 72, g: 157, b: 210, a: 0.21666666666666667 };
var bg_color = { r: 0, g: 15, b: 38, a: 1 };
var panel_color1 = { r: 26, g: 38, b: 64, a: 1 };
var panel_color2 = { r: 51, g: 77, b: 102, a: 1 };

var window_active = true;

_mouse_pos = { x: 0, y: 0 };

function sum(a) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        let v = a[i];
        result += v;
    }
    return result;
}
assert(sum([1, 2, 3]) == 6);

function init_array(size, init_val) {
    let a = [];
    for (let i = 0; i < size; i++) {
        a[i] = init_val;
    }
    return a;
}

function str(s) { return s + ''; }

function set_size() {
    canvas.width = window.innerWidth - app.canvas_size_hack;
    canvas.height = window.innerHeight - app.canvas_size_hack;

    canvas.width = Math.max(canvas.width, 800);
    canvas.height = Math.max(canvas.height, 600);
    // later: always stay the max size we see... (maybe)

    canvas_screen.width = canvas.width;
    canvas_screen.height = canvas.height;
}

function randomize_color(color) {
    let a = ['r', 'g', 'b', 'a'];
    for (let i = 0; i < a.length; i++) {
        let k = a[i];
        let v;
        if (k == 'a') {
            v = 0.5 + Math.random() / 2;
        } else {
            v = 55 + Math.round(Math.random() * 200);
        }
        color[k] = v;
    }
}

function on_mouse_move(evt) {
    let rect = canvas.getBoundingClientRect();
    _mouse_pos[_x] = evt.clientX - rect.left;
    _mouse_pos[_y] = evt.clientY - rect.top;
}

function on_mouse_down(evt) {
    //log(evt);
    let x = evt.clientX;
    let y = evt.clientY;
    let button = evt.button;
    // Left button=0, middle button=1 (if present), right button=2
    if (button == 0) button = 'l';
    if (button == 1) button = 'm';
    if (button == 2) button = 'r';
    ui.on_mousepressed(x, y, button);
}

function on_mouse_up(evt) {
    let x = evt.clientX;
    let y = evt.clientY;
    let button = evt.button;
    if (button == 0) button = 'l';
    if (button == 1) button = 'm';
    if (button == 2) button = 'r';
    ui.on_mousereleased(x, y, button);
}

// meh
function on_touch_start(evt) {
    let x = evt.clientX;
    let y = evt.clientY;
    ui.on_mousepressed(x, y, 'l');
}

function on_touch_end(evt) {
    let x = evt.clientX;
    let y = evt.clientX;
    ui.on_mousereleased(x, y, 'l');
}


function make_css_color(color) {
    let css;

    let use_alpha = true;

    if (document.body.ui) { // todo nolive hax : temporal include dilemma
        // window.ui also works
        use_alpha = ui.config.drawbox_gradient_enable;
    }

    if (use_alpha) {
        css = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    } else {
        css = `rgba(${color.r}, ${color.g}, ${color.b}, 1)`;
    }

    return css;
}

function make_drawbox_gradient(context, x1, y1, x2, y2, colorstop1, colorstop2) {
    assert(context);
    let grd = context.createLinearGradient(x1, y1, x2, y2);
    grd.addColorStop(0.0, make_css_color(colorstop1));
    grd.addColorStop(0.5, make_css_color(colorstop2));
    return grd;
}

/* -------------------------------------------------------------------------- */

let canvas_screen = document.getElementById('myCanvas');
let canvas_off = document.createElement('canvas');
let canvas = canvas_screen; // screen seems slightly faster
assert(canvas);
let context = canvas.getContext('2d');

canvas.addEventListener('mousemove', on_mouse_move, false);
// touch move?
canvas.addEventListener('mousedown', on_mouse_down, false);
//canvas.addEventListener('touchdown', on_touch_down, false);
canvas.addEventListener('mouseup', on_mouse_up, false);
canvas.addEventListener('touchend', on_touch_end, false);


/* */

function GetCursorX() {
    return _mouse_pos[_x];
}

function GetCursorY() {
    return _mouse_pos[_y];
}

function GetFontSize() {
    return 14;
}

let fonts = [
    { name: 'sans-serif', size: 14, line_size: 14 },
    { name: 'VJ Nina', size: 14, line_size: 14 },
    { name: 'UPF Mana-16', size: 8, line_size: 14 },
    { name: 'UPF Elementar Basica 13.11.4 a', size: 8, line_size: 14 }
];
function DrawText_Stroke(text, x, y, color) {
    //context.beginPath();
    let fontsize = GetFontSize();
    let font = fonts[2];
    context.font = font.size + "px '" + font.name + "'";
    if (color == null) {
        color = m_simpleui.add_color(1, 1, 1, 1);
    }
    context.fillStyle = make_css_color(color);
    let yoffset = fontsize - 2;
    context.fillText(text, x, y + yoffset);
    //context.closePath();
}

function DrawText_Bitmap(text, x, y, color) {
    for (let i = 0; i < text.length; i++) {
        let idx = text.charCodeAt(i);
        let def = bmfont_mana.chars[idx - 31];

        // replace unknown chars with ?
        if (!def) {
            idx = "?".charCodeAt(0);
            def = bmfont_mana.chars[idx - 31];
        }

        context.drawImage(
            bmfont_mana_img,
            def.x, def.y, def.width, def.height,
            x + def.xoffset, y + def.yoffset, def.width, def.height
        );
        x += def.xadvance;
    }
}

// new idea, cache bitmaps instead of worrying about batching
let _drawtext_cache = {};
function DrawText_Cached(text, x, y, color) {

    // draw normal if it's a number?
    //return DrawText_Original(text, x, y, color);
    //return;

    let key = text;
    if (!(key in _drawtext_cache)) {

        let prev_context = context;
        let prev_canvas = canvas;

        let cv = document.createElement('canvas');

        let ctx = cv.getContext('2d');
        cv.width = text.length * 10;
        cv.height = 20;
        //document.body.appendChild(cv);
        let o = { 'canvas': cv, 'context': ctx };

        // draw into custom
        canvas = o.canvas;
        context = o.context;
        {
            DrawText_Original(text, 0, 0, color);
        }
        context = prev_context;
        canvas = prev_canvas;

        _drawtext_cache[key] = o;
    }

    // now just draw the cached canvas onto screen canvas
    context.drawImage(_drawtext_cache[key].canvas, x, y);

}

function DrawText_Original(text, x, y, color) { // 10-12 ms ff
    if (ui.config.drawtext_bitmap) {
        DrawText_Bitmap(text, x, y, color);
    } else {
        DrawText_Stroke(text, x, y, color);
    }
}
let DrawText = DrawText_Cached; // cached works now, and does increase performance.

let _drawbox_cache = {};
// a box cache that uses a single canvas might be possible...
//let _drawbox_cache_canvas;
function DrawBox_Cached(rect, color) {

    let x = rect[_x];
    let y = rect[_y];
    let width = rect[_w];
    let height = rect[_h];

    /*
    if (width==0) {
        //console.error('width 0 in DrawBox_Cached');
        return;
    }
    
    if (height==0) {
        //console.error('height 0 in DrawBox_Cached');
        return;
    }*/

    // original is 2, cached is 6-7, lets find out which rects are causing this?
    let use_original = false;
    //use_original = use_original || width<40; // 6-7 becomes 5-6...
    use_original = use_original || width == 0 || height == 0; // 6-7 becomes... 2-3...
    // so big ones are a problem apparently...
    // apparently drawing boxes is already fast...
    // i wonder if making them their own dom elements helps anything..
    // can make simpleui without canvas...?

    if (use_original) {
        return DrawBox_Original(x, y, width, height, color);
    }

    let key_elements = [width, height];

    if (color) {
        key_elements.push(
            round(color.r * 100),
            round(color.g * 100),
            round(color.b * 100),
            round(color.a * 100)
        );
    }
    let key = key_elements.join(',');

    if (!(key in _drawbox_cache)) {

        let prev_context = context;
        let prev_canvas = canvas;

        let cv = document.createElement('canvas');

        let ctx = cv.getContext('2d');
        cv.width = width;
        cv.height = height;
        let o = { 'canvas': cv, 'context': ctx };

        // draw into custom
        canvas = o.canvas;
        context = o.context;
        {
            DrawBox_Original(0, 0, width, height, color);
        }
        context = prev_context;
        canvas = prev_canvas;

        _drawbox_cache[key] = o;
    }

    // now just draw the cached canvas onto screen canvas
    context.drawImage(_drawbox_cache[key].canvas, x, y); // this seems to be more of a bottleneck than just drawing boxes themselves

}

function DrawBox_Original(rect, color) {

    let x = rect[_x];
    let y = rect[_y];
    let width = rect[_w];
    let height = rect[_h];

    // what if, we dont pass color... we pass something else, like an id or a key.. maybe 'purpose' or 'intent' lol (of the box)
    const soft = m_simpleui.config.drawbox_soft_enable;

    if (color) {
        context.fillStyle = make_css_color(color);
        //context.strokeStyle = make_css_color(color);
    }

    if (soft) {
        const z = 1;
        //let z2 = z*2;
        const lines = 1; // adjustor
        context.fillRect(x, y + lines, width, height - (lines * 2)); // mid

        //for (let i=1; i<=lines; i++) {

        // faster than making a path, in pixi anyway
        const i = 1;
        const top_x1 = x + i;
        const top_y1 = y + (lines - i);
        const top_w = width - (i * 2);
        context.fillRect(top_x1, top_y1, top_w, 1); //top
        const bot_x1 = x + i;
        const bot_y1 = y + height - 1 - (lines - i);
        const bot_w = width - (i * 2);
        context.fillRect(bot_x1, bot_y1, bot_w, 1); //bot

    } else {
        context.fillRect(x, y, width, height);
    }

    let use_gradient = m_simpleui.config.drawbox_gradient_enable;

    if (use_gradient) {
        let is_size_excluded = width > 200 || height > 200; // || (width<20 && height<20);
        if (is_size_excluded) {
            use_gradient = false;
        }
    }
    if (use_gradient) {
        context.translate(x, y); // for gradient
        context.fillStyle = m_simpleui.config.drawbox_gradient;
        context.fillRect(1, 1, width - 2, height - 2);
        context.translate(-x, -y); // this appears to be faster than wrapping save/restore :->
    }

}

const DrawBox = DrawBox_Original;

function Color(r, g, b, a) {
    if (a == null) {
        a = 1;
    }
    return { r: round(r * 255), g: round(g * 255), b: round(b * 255), a: a };
}