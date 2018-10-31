// later: modularize

    /* ------------------------------------------------------------------ */
    // gridfonts : later: breakout
    let _gridfonts = {
        'hint-four': {}
    }
    let _letters = 'abcdefghijklmnopqrstuvwxyz';
    let _f = _gridfonts['hint-four'];
    // list of segments, each segment is a standalone stroke from x1,y1 to x2,y2
    _f[' '] = [ ];
    _f.a = [ [0,2,1,2], [1,2,2,3], [2,3,1,4], [1,4,0,3], [0,3,1,3] ];
    _f.b = [ [0,0,0,1], [0,1,0,2], [0,2,0,3], [0,3,1,4], [1,4,2,3], [2,3,1,2] ];
    _f.c = [ [1,2,0,3], [0,3,1,4], [1,4,2,4] ];
    _f.d = [ [2,0,2,1], [2,1,2,2], [2,2,2,3], [2,3,1,4], [1,4,0,3], [0,3,1,2] ];
    _f.e = [ [1,3,2,3], [2,3,1,2], [1,2,0,3], [0,3,1,4], [1,4,2,4] ];
    _f.f = [ [2,0,1,1], [1,1,1,2], [1,2,1,3], [1,3,1,4], [0,2,1,2] ];
    _f.g = [ [1,4,0,3], [0,3,1,2], [1,2,2,3], [2,3,2,4], [2,4,2,5], [2,5,1,6] ];
    _f.h = [ [0,0,0,1], [0,1,0,2], [0,2,0,3], [0,3,1,2], [1,2,2,3], [2,3,2,4] ];
    _f.i = [ [1,2,1,3], [1,3,1,4], [1,1,2,0] ];
    _f.j = [ [1,2,1,3], [1,3,1,4], [1,4,1,5], [1,5,0,6], [1,1,2,0] ];
    _f.k = [ [0,0,0,1], [0,1,0,2], [0,2,0,3], [0,3,1,3], [1,3,2,2], [1,3,2,4] ];
    _f.l = [ [1,0,1,1], [1,1,1,2], [1,2,1,3], [1,3,2,4] ];
    _f.m = [ [0,4,0,3], [0,3,1,2], [1,2,2,3], [2,3,2,4], [1,3,1,4] ];
    _f.n = [ [0,4,0,3], [0,3,1,2], [1,2,2,3], [2,3,2,4] ];
    _f.o = [ [0,2,1,2], [1,2,2,3], [2,3,1,4], [1,4,0,3] ];
    _f.p = [ [0,6,0,5], [0,5,0,4], [0,4,0,3], [0,3,1,2], [1,2,2,3], [2,3,1,4] ];
    _f.q = [ [2,6,2,5], [2,5,2,4], [2,4,2,3], [2,3,1,2], [1,2,0,3], [0,3,1,4] ];
    _f.r = [ [0,4,0,3], [0,3,1,2], [1,2,2,2] ];
    _f.s = [ [1,2,0,3], [0,3,1,3], [1,3,2,3], [2,3,1,4], [1,4,0,4] ];
    _f.t = [ [1,1,1,2], [1,2,1,3], [1,3,1,4], [1,4,2,3], [0,2,1,2] ];
    _f.u = [ [0,2,0,3], [0,3,0,4], [0,4,1,4], [1,4,2,3], [2,3,2,2] ];
    _f.v = [ [0,2,0,3], [0,3,1,4], [1,4,2,3], [2,3,2,2] ];
    _f.w = [ [0,2,0,3], [0,3,1,4], [1,4,2,3], [2,3,2,2], [1,2,1,3] ];
    _f.x = [ [0,2,1,3], [1,3,2,4], [2,2,1,3], [1,3,0,4] ];
    _f.y = [ [0,2,0,3], [0,3,1,4], [1,4,2,3], [2,3,2,4], [2,4,2,5], [2,5,1,6] ];
    _f.z = [ [1,2,2,2], [2,2,1,3], [1,3,0,4], [0,4,1,4], [1,4,2,4] ];        

    let _gridfont_gradient = make_drawbox_gradient(
        context,
        400, 400,
        1000, 1000,
        Color(0x00/255, 0xB5/255, 0xE3/255, 1),
        Color(1,0,1,1)
    );

    //global init
    let _gridfont_chars_a = 'abcdefghijklmnopqrstuvwxyz '.split('');
    let _gridfont_chars = {};
    for(let i=0;i<_gridfont_chars_a.length; i++) {
        _gridfont_chars[_gridfont_chars_a[i]] = true;
    }

    function draw_line(x1,y1,x2,y2) {
        context.strokeStyle = _gridfont_gradient;
        context.beginPath();
        context.moveTo(round(x1), round(y1));
        context.lineTo(round(x2), round(y2));
        context.stroke();
    }

    // http://cogsci.indiana.edu/gridfonts.html
    // see also: hershey fonts: http://sol.gfxile.net/hershey/fontprev.html
    function do_gridfont(uiid, s, name, x, y, scale, reset) {
        let a = s.split('');
        let complete = true;
        let reset_complete = true;
        scale = scale || 6;
        for(let i=0; i<a.length; i++) {
            let letter = a[i];
            if (!_gridfont_chars[letter]) {
                letter = ' ';
            }
            _ = do_gridfont_letter(uiid+'-letter-'+str(i), name, x+i*(scale*3), y, letter, scale, reset);
            complete = complete && _.complete;
            reset_complete = reset_complete && _.reset_complete;
        }

        return {'complete': complete, 'reset_complete': reset_complete};
    }

    function _gridfont_letter_state_setter() {
        return {
            complete: false,
            reset_complete: false,
            segment: 1,
            partial: 0
        };
    }
    function do_gridfont_letter(uiid, name, x, y, letter, scale, reset) {
        let fl = _f[letter]; // font letter
        // nice place for lua coroutines... :-(

        const layout = ui.layout_peek();

        let state = ui.get_state(uiid, _gridfont_letter_state_setter);

        let segment = state.segment;
        let partial = state.partial;

        // draw lines up to segment count
        for (let i=0; i<fl.length; i++) {
            if (i==segment)
                break;
            let a1 = fl[i][0];
            let b1 = fl[i][1];
            let a2 = fl[i][2];
            let b2 = fl[i][3];
            let x1 = x + a1 * scale;
            let y1 = y + b1 * scale;
            let x2 = x + a2 * scale;
            let y2 = y + b2 * scale;
            draw_line(x1, y1, x2, y2);
        }
        // now draw current line... over multiple frames...
        // when complete then increment segment...
        if (segment < fl.length) {
            let i = segment;
            let a1 = fl[i][0];
            let b1 = fl[i][1];
            let a2 = fl[i][2];
            let b2 = fl[i][3];
            let x1 = x + a1 * scale;
            let y1 = y + b1 * scale;
            let x2 = x + a2 * scale;
            let y2 = y + b2 * scale;
            let dx = x2 - x1;
            let dy = y2 - y1;

            let p1 = x1 + dx * partial;
            let p2 = y1 + dy * partial;
            draw_line(x1, y1, p1, p2);

            let cursor_radius = 3;
            //let cursize = (1-partial) * cursor_radius;
            let cursize = cursor_radius;
            context.save();
            context.strokeStyle = _gridfont_gradient;
            context.fillStyle = _gridfont_gradient;
            DrawBox(p1-cursize, p2-cursize, cursize*2, cursize*2);
            //draw_line(Math.random()*2*400,Math.random()*2*500, p1, p2);
            context.restore();

            state.partial += 0.033 * 3;
            partial = state.partial; // blah.

            if (partial >= 1.0) {
                let leftover = partial - 1;
                if (leftover > 0) {
                    // later: leftovers! :-)
                }
                state.partial = 0;
                state.segment += 1;
            }
        }

        if (reset) {
            state.segment = 1;
            state.partial = 0;
            state.reset_complete = true; // deopt!?!?
        }

        state.complete = segment>=fl.length;
        return state;
    }
