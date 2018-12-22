function do_color(key, color, label) {
    let _;

    let changed = false | 0;

    // base component sizes
    const h = 24 | 0;
    const w = (h * 5) | 0;

    const rect = Rectangle(0, 0, w, h);

    ui.layout_push(_horizontal);
    {

        // label & sliders
        ui.layout_push(_vertical);
        {
            ui.label(label, rect);

            _ = ui.slider(key + '-slider-r', rect, 0, 255, color[_r], 'r');
            if (_[_changed]) { changed = 0 | true; color[_r] = _[_value]; }

            _ = ui.slider(key + '-slider-g', rect, 0, 255, color[_g], 'g');
            if (_[_changed]) { changed = 0 | true; color[_g] = _[_value]; }

            _ = ui.slider(key + '-slider-b', rect, 0, 255, color[_b], 'b');
            if (_[_changed]) { changed = 0 | true; color[_b] = _[_value]; }

            _ = ui.slider(key + '-slider-a', rect, 0, 255, color[_a], 'a');
            if (_[_changed]) { changed = 0 | true; color[_a] = _[_value]; }

        }
        ui.layout_pop();

        // swatch
        ui.layout_push(_vertical);
        const pad = ui.layout_peek()[_padding]; // parent pad
        {

            // this increment moves the swatch down so it aligns with the sliders, not the label                    
            ui.layout_increment2(0, h);

            const swatch_dim = h * 3 + pad * 2
            const swatch_rect = Rectangle(0, 0, swatch_dim, swatch_dim);
            //ui.rectangle(swatch_rect, color);
            uidraw.rectangle_soft(ui.layout_translated(swatch_rect), color);
            ui.layout_increment(swatch_rect);

            _ = ui.button(key + '-rand-button', 'random', Rectangle(0, 0, swatch_dim, h));
            if (_[_clicked]) {
                randomize_color(color);
                changed = true | 0;
            }
        }
        ui.layout_pop();

    }
    ui.layout_pop();

    return [changed | 0, color];
}

function do_ms_meter(uiid, a_time, high_value) {

    let state = ui.get_state(uiid);
    if (!state) {
        state = ui.set_state(uiid, {
            'times': init_array(30, 0)
        });
    };
    let times = state.times;
    times.push(a_time);
    times.shift();

    //let high_value = 32;

    let v = 0 | sum(times) / times.length;
    v = 0 | Math.floor(Math.min(high_value, v));
    ui.layout_push(_horizontal);
    ui.progressbar(Rectangle(0, 0, 100, 20), high_value, 0 | Math.ceil(v));

    let tmp = ui.config.drawtext_enable;
    ui.config.drawtext_enable = true;        
    ui.label(v + 'ms', Rectangle(0, 0, 100, 20));
    ui.config.drawtext_enable = tmp;

    ui.layout_pop();
}

function do_ms_graph(uiid, a_time, graph_height) {
    let state = ui.get_state(uiid);
    if (!state) {
        state = ui.set_state(uiid, {
            'times': init_array(30, 0)
        });
    };
    let times = state.times;
    times.push(a_time);
    times.shift();

    //let graph_height = 40;
    ui.layout_push(_horizontal, 0);
    for (let i = 0; i < times.length; i++) {
        let v = 0 | Math.min(graph_height, times[i]);
        ui.rectangle(Rectangle(0, 0, 4, v), Color(255, 255, 255, 51));
    }
    ui.layout_increment2(0, graph_height);
    ui.layout_pop();
}

function sidelabel(text) {
    ui.label(text, Rectangle(0, 5, 100, 24));
}

function do_sidepanel() {
    let _;
    let pad = 8;
    //let none1 = ui.layout_push(_none, 0, 0, 0);
    let rect = Rectangle(0, 0, 200, ui.driver.GetClientHeight() | 0);
    //let rect2 = uidraw.rectangle_erode(rect, 2);
    const sidepanel_color = Color(uidraw.panel_color[_r], uidraw.panel_color[_g], uidraw.panel_color[_b], 127);
    ui.rectangle(rect, sidepanel_color);

    //let vert1 = 
    ui.layout_push(_vertical, pad, pad, pad);
    {
        ui.label('simpleui v0.4', Rectangle(0, 0, 100, 20));

        // reload
        _ = ui.button('sidepanel-reload-button', 'reload', Rectangle(0, 0, 100, 24));
        if (_[_clicked]) {
            document.location.reload(true);
        }

        // desktop select
        sidelabel('panels');
        ui.layout_push(_vertical, -1);
        ui.group_buttons_begin();
        for(var i=0; i< app.desktops.length; i++) {
            const name = app.desktops[i];
            const is_desktop_active = name == app.desktop;
            const button_text = name;
            _ = ui.checkbutton('sidepanel-desktop-button-' + i, button_text, Rectangle(0,0,100,24), is_desktop_active);
            if (_[_changed] && _[_value]) {
                app.desktop = name;
            }
        }
        ui.group_buttons_end();
        ui.layout_pop();

        // mouse status :->
        {
            let w_ = 180; // max-width

            let aspect = ui.driver.GetClientWidth() / ui.driver.GetClientHeight();
            let h_ = w_ / aspect;

            if (h_ > 100) { // max-height
                w_ = w_ * 100 / h_;
                h_ = 100;
            }

            let w = 0 | w_;
            let h = 0 | h_;

            sidelabel('mouse status');

            ui.rectangle(Rectangle(0, 0, w, h), uidraw.normal_back);

            let cursor_size = 0 | 4;
            if (ui.state.item_held) {
                cursor_size = 0 | 8;
            }
            let radar_cursor_pos_x = 0 | (((GetCursorX() / canvas.width) * w) - (cursor_size / 2));
            let radar_cursor_pos_y = 0 | (((GetCursorY() / canvas.height) * w / aspect) - (cursor_size / 2));

            const layout = ui.layout_peek();
            ui.layout_push(_none, layout[_padding], layout[_x], layout[_y] - h - pad);
            const mouse_rect = Rectangle(0 | radar_cursor_pos_x, 0 | radar_cursor_pos_y, 0 | cursor_size, 0 | cursor_size);
            ui.rectangle(mouse_rect, uidraw.normal_back);
            ui.rectangle(mouse_rect, uidraw.accent);
            ui.layout_pop();
        }

        // padding
        sidelabel('padding');
        _ = ui.slider('sidepanel-padding-slider', Rectangle(0, 0, 100, 20), 0, 12, app.panel_layout_padding, '');
        if (_[_changed]) {
            app.panel_layout_padding = _[_value];
        }

        // cpu (not reasonably possible in js)
        {
        }

        // memory
        {
        }

        // frame times + graph
        sidelabel('frame time');
        do_ms_meter('sidepanel-ms-meter', app.main_loop_time, 50);
        do_ms_graph('sidepanel-frame-graph', app.main_loop_time, 20);

        // actual times + graph
        sidelabel('cpu time per frame');
        do_ms_meter('sidepanel-actual-meter', app.main_proc_time, 10);
        do_ms_graph('sidepanel-actual-graph', app.main_proc_time, 20);

        // canvas size hack
        // disabling until i do it with flicker
        /*
        ui.label('canvas trim', Rectangle(0, 0, 100, 20));
        ui.layout_push(_horizontal);
        _ = ui.slider('sidepanel-canvas-size-hack-slider', Rectangle(0, 0, 100, 20), 0, 60, app.canvas_size_hack, '');
        if (_[_changed]) {
            app.canvas_size_hack = _[_value];
            set_size();
        }
        ui.label(app.canvas_size_hack + 'px', Rectangle(0, 0, 100, 20));
        ui.layout_pop();
        */

        // show/hides
        /*{
            let panels = ['color panel', 'gradient panel', 'gridfont paneli', 'scroll test panel'];

            for (let i = 0; i < panels.length; i++) {
                let uiid = panels[i];
                let panel = ui.get_state(uiid);
                _ = ui.checkbutton('sidepanel-toggle-' + uiid, 'show ' + uiid, Rectangle(0, 0, 183, 24), panel && panel.visible);
                if (_[_changed]) {
                    panel.visible = !panel.visible;
                }
            }
        }*/

        // misc
        if (false) {
            sidelabel('pixel ratio: ' + window.devicePixelRatio);
            let memory = performance.memory;
            if (memory) {
                let mem1 = memory.usedJSHeapSize / (1024 * 1024);
                let mem2 = memory.jsHeapSizeLimit / (1024 * 1024);
                sidelabel('mem1: ' + round(mem1) + 'MB');
                sidelabel('mem2: ' + round(mem2) + 'MB');
            }
        }

        // flags
        {
            // editor help for function arguments needs some revamping
            _ = ui.button('button-rtc', 'reset text cache', Rectangle(0, 0, 150, 24));
            if (_[_clicked]) _drawtext_cache = {};

            _ = ui.button('button-rbc', 'reset box cache', Rectangle(0, 0, 150, 24));
            if (_[_clicked]) _drawbox_cache = {};

            ui.layout_push(_horizontal);
            {
                _ = ui.checkbox('ui.config.drawtext_bitmap checkbox',
                    Rectangle(0, 0, 20, 20), ui.config.drawtext_bitmap);
                if (_[_changed]) {
                    ui.config.drawtext_bitmap = !ui.config.drawtext_bitmap;
                }
                ui.label('drawtext bitmap', Rectangle(0, 0, 100, 20));
            }
            ui.layout_pop();

            ui.layout_push(_horizontal);
            {
                _ = ui.checkbox('ui.config.drawhotspots_enable checkbox',
                    Rectangle(0, 0, 20, 20), ui.config.drawhotspots_enable); // todo: move this let to ui.config.
                if (_[_changed]) {
                    ui.config.drawhotspots_enable = _[_value];
                }
                ui.label('draw hotspots', Rectangle(0, 0, 100, 20));
            }
            ui.layout_pop();

            ui.layout_push(_horizontal);
            {
                _ = ui.checkbox('ui.config.drawtext_enable checkbox',
                    Rectangle(0, 0, 20, 20), ui.config.drawtext_enable);
                if (_[_changed]) {
                    ui.config.drawtext_enable = _[_value];
                }
                ui.label('draw text', Rectangle(0, 0, 100, 20));
            }
            ui.layout_pop();

            ui.layout_push(_horizontal);
            {
                _ = ui.checkbox('ui.config.drawbox_gradient', Rectangle(0, 0, 20, 20), ui.config.drawbox_gradient_enable);
                if (_[_changed]) {
                    ui.config.drawbox_gradient_enable = _[_value]
                }
                ui.label('drawbox gradient', Rectangle(0, 0, 100, 20));
            }
            ui.layout_pop();

        }

    }
    ui.layout_pop();

}

function do_color_row(obj, keys) {
    for (let i = 0; i < keys.length; i++) {
        let k = keys[i];
        let _ = do_color('color_' + k, obj[k], k);
        if (_[_changed]) {
            obj[k] = _[_value];
        }
    }
}

function do_color_panel(uiid, first_x, first_y, first_visible, first_expanded) {
    let panel = do_panel_begin(uiid, first_x, first_y, first_visible, first_expanded);
    if (panel.visible && panel.expanded) {
        // row 1
        ui.layout_push(_horizontal)
        {
            do_color_row(uidraw, ['accent', 'panel_color', 'bg_color']);
        }
        ui.layout_pop();

        // row 2
        ui.layout_push(_horizontal)
        do_color_row(uidraw, ['normal_back', 'normal_face', 'activating_face']);
        ui.layout_pop();

        // row 3
        const peek = ui.layout_peek();
        ui.layout_push(_horizontal, peek[_padding], peek[_x] + 202, peek[_y]);
        do_color_row(uidraw, ['raised_face', 'raised_accent']);
        ui.layout_pop();
    }
    do_panel_end(uiid);

}

function do_gradient_panel(uiid, first_x, first_y, first_visible, first_expanded) {
    let _;
    let panel = do_panel_begin(uiid, first_x, first_y, first_visible, first_expanded);
    if (panel.visible && panel.expanded) {
        let changed = 0 | false;

        ui.layout_push(_horizontal);
        {

            const min_x = -50;
            const max_x = 150;
            const min_y = -50;
            const max_y = 150;
            const dim_w = max_x - min_x;
            const dim_h = max_y - min_y;

            _ = do_gradient_stroke_edit(uiid + 'stroke-edit', -50, 150, uidraw.box_gradient.x1, uidraw.box_gradient.y1, uidraw.box_gradient.x2, uidraw.box_gradient.y2);
            if (_[_changed]) {
                changed = 0 | changed | _[_changed];
                uidraw.box_gradient.x1 = 0 | _[_x1];
                uidraw.box_gradient.y1 = 0 | _[_y1];
                uidraw.box_gradient.x2 = 0 | _[_x2];
                uidraw.box_gradient.y2 = 0 | _[_y2];
            }

            ui.layout_push(_vertical);
            {
                _ = ui.slider('grad-panel-slider-x1', Rectangle(0, 0, 200, 20), -50, 150, uidraw.box_gradient.x1, 'x1');
                changed = 0 | changed | _[_changed];
                if (_[_changed]) {
                    uidraw.box_gradient.x1 = 0 | _[_value];
                }

                _ = ui.slider('grad-panel-slider-y1', Rectangle(0, 0, 200, 20), -50, 150, uidraw.box_gradient.y1, 'y1');
                changed = 0 | changed | _[_changed];
                if (_[_changed]) uidraw.box_gradient.y1 = 0 | _[_value];

                _ = ui.slider('grad-panel-slider-x2', Rectangle(0, 0, 200, 20), -50, 150, uidraw.box_gradient.x2, 'x2');
                changed = 0 | changed | _[_changed];
                if (_[_changed]) uidraw.box_gradient.x2 = 0 | _[_value];

                _ = ui.slider('grad-panel-slider-y2', Rectangle(0, 0, 200, 20), -50, 150, uidraw.box_gradient.y2, 'y2');
                changed = 0 | changed | _[_changed];
                if (_[_changed]) uidraw.box_gradient.y2 = 0 | _[_value];

                ui.layout_increment2(0, 20);
                ui.label('pt1: ' + uidraw.box_gradient.x1 + ', ' + uidraw.box_gradient.y1, Rectangle(0, 0, 200, 20))
                ui.label('pt2: ' + uidraw.box_gradient.x2 + ', ' + uidraw.box_gradient.y2, Rectangle(0, 0, 200, 20))
            }
            ui.layout_pop();

            ui.layout_increment2(0, dim_h);
        } // horizontal 1                
        ui.layout_pop();

        ui.layout_push(_horizontal);
        {
            _ = do_color('box_gradient.color_stop1', uidraw.box_gradient.color_stop1, 'stop1 color');
            changed = 0 | changed | _[_changed];

            _ = do_color('box_gradient.color_stop2', uidraw.box_gradient.color_stop2, 'stop2 color');
            changed = 0 | changed | _[_changed];
        } // horizontal 2
        ui.layout_pop();

        if (changed && ui.driver.config.has_drawbox_gradient) {                    
            m_simpleui.config.drawbox_gradient = ui.driver.CreateDrawboxGradient(
                context,
                uidraw.box_gradient.x1, uidraw.box_gradient.y1,
                uidraw.box_gradient.x2, uidraw.box_gradient.y2,
                uidraw.box_gradient.color_stop1, uidraw.box_gradient.color_stop2
            );
        }
    }
    do_panel_end(uiid);
}

function do_gridfont_panel(uiid, first_x, first_y, first_visible, first_expanded) {
    let inner_uiid = uiid + 'i';

    let state = ui.get_state(uiid);
    if (!state) {
        state = ui.set_state(uiid, {
            'uiid': uiid,
            'run': 0 | true,
            'reset': 0 | false
        });
    };

    let panel = do_panel_begin(inner_uiid, first_x, first_y, first_visible, first_expanded);

    if (panel.visible && panel.expanded) {

        ui.layout_push(_horizontal);
        let _ = ui.button(uiid + '-test-button', 'gridfont ' + (state.run ? 'stop' : 'run'), Rectangle(0, 0, 150, 24));
        if (_[_clicked]) {
            state.run = 0 | (!state.run);
        }

        _ = ui.button(uiid + '-test-button2', 'gridfont reset', Rectangle(0, 0, 150, 24));
        if (_[_clicked]) {
            state.reset = 0 | true;
        }
        ui.layout_pop();

        ui.layout_increment2(0, 24);

        const rect = ui.layout_translated(Rectangle(0, 0, 0, 0));

        let complete = 0 | (state.run && true);
        let reset_complete = 0 | (state.reset && true);
        if (state.run) {
            _ = do_gridfont(uiid + '-gridfont1', 'abcdefghijklmnopqrstuvwxyz', 'hint-four', rect[_x], rect[_y], 10, state.reset);
            complete = 0 | (complete && _[_complete]);
            reset_complete = 0 | (reset_complete && _[_reset_complete]);
            if (_[_complete] || (state.reset && _[_reset_complete])) {
                _ = do_gridfont(uiid + '-gridfont2', 'leverage agile frameworks', 'hint-four', rect[_x], 0 | (rect[_y] + 10 * 7), 10, state.reset);
                complete = 0 | (complete && _[_complete]);
                reset_complete = 0 | (reset_complete && _[_reset_complete]);
                if (_[_complete] || (state.reset && _[_reset_complete])) {
                    _ = do_gridfont(uiid + '-gridfont3', 'provide robust synopsis', 'hint-four', rect[_x], 0 | (rect[_y] + 20 * 7), 10, state.reset);
                    complete = 0 | (complete && _[_complete]);
                    reset_complete = 0 | (reset_complete && _[_reset_complete]);
                }
            }
        }

        if (reset_complete) {
            state.reset = 0 | 0;
        }

        if (complete) {
            state.reset = 0 | 1;
        }

        let layout = ui.layout_peek();
        ui.layout_increment2(780, 10 * 7 * 3 + 40);
    }
    do_panel_end(inner_uiid);
}

let _linestar_segments = 13;
let _linestar_segments_direction = 1;
let _linestar_segments_accumulator = 0;
let _linestar_segments_accumulator_max = 17;
let _linestar_joints = 12;
let _linestar_joints_direction = 1;
let _linestar_joints_accumulator = 0;
let _linestar_joints_accumulator_max = 5;
let _linestar_webs = 0;
let _linestar_anim_enabled = 0 | false;
function do_linestar_panel(uiid, first_x, first_y, first_visible, first_expanded) {
    let panel = do_panel_begin(uiid, first_x, first_y, first_visible, first_expanded);

    if (panel.expanded) {
        let _ = do_linestar_edit(uiid + '-linestar-edit', _linestar_segments, _linestar_joints, _linestar_webs);
        if (_[_changed]) {
            _linestar_segments = _[1];
            _linestar_joints = _[2];
            _linestar_webs = _[3];
        } else if (_linestar_anim_enabled) {
            _linestar_segments_accumulator++;
            if (_linestar_segments > 20 || _linestar_segments < 3) {
                _linestar_segments = Math.max(3, Math.min(20, _linestar_segments));
                _linestar_segments_direction = -_linestar_segments_direction;
            }
            if (_linestar_segments_accumulator == _linestar_segments_accumulator_max) {
                _linestar_segments = _linestar_segments + _linestar_segments_direction;
                _linestar_segments_accumulator = 0;
            }

            _linestar_joints_accumulator++;
            if (_linestar_joints > 20 || _linestar_joints < 3) {
                _linestar_joints = Math.max(3, Math.min(20, _linestar_joints));
                _linestar_joints_direction = -_linestar_joints_direction;
            }
            if (_linestar_joints_accumulator == _linestar_joints_accumulator_max) {
                _linestar_joints = _linestar_joints + _linestar_joints_direction;
                _linestar_joints_accumulator = 0;
            }
        }

        const label = (_linestar_anim_enabled ? 'disable' : 'enable') + ' idle animation';
        _ = ui.checkbutton(uiid + '-enable-anim-button', label, Rectangle(0, 0, 200, 24), _linestar_anim_enabled);
        if (_[_changed]) {
            _linestar_anim_enabled = _[_value];
        }

        const rect = Rectangle(0, 0, 200, 20);
        ui.layout_push(_horizontal);
        _ = ui.slider(uiid + '-slider-1', rect, 1, 20, _linestar_segments_accumulator_max, '');
        if (_[_changed]) {
            _linestar_segments_accumulator = 0;
            _linestar_segments_accumulator_max = 0 | _[_value];
        }
        ui.label('segment anim delay', rect);
        ui.layout_pop();

        ui.layout_push(_horizontal);
        _ = ui.slider(uiid + '-slider-2', rect, 1, 20, _linestar_joints_accumulator_max, '');
        if (_[_changed]) {
            _linestar_joints_accumulator = 0;
            _linestar_joints_accumulator_max = 0 | _[_value];
        }
        ui.label('joint anim delay', rect);
        ui.layout_pop();

    }

    do_panel_end(uiid);
    return panel;
}

function do_scrolltest_panel(uiid, first_x, first_y, first_visible, first_expanded) {

    let panel = do_panel_begin(uiid, first_x, first_y, first_visible, first_expanded);

    if (panel.visible && panel.expanded) {

        // todo: design so that when i remove the scroll widget, the contained widgets will just render as usual
        let scroll_uiid = 'scrolltest';
        let scroll = do_scroll_begin(scroll_uiid, Rectangle(panel.rect[_x], panel.rect[_y], 200, 200), 20, 10000);

        // todo:
        // maybe an opt-in api for widgets to call to see if they are... "in view"
        // if (!in_view(uiid)) { return null; } // or something
        // or maybe something like this...
        // while (let item = get_visible_item(scroll_uiid)) {
        //
        // }
        for (let i = scroll.first_visible_index; i < scroll.last_visible_index; i++) {
            do_scroll_item_begin(scroll_uiid, i);
            const _ = ui.button('scroll-experiment-button-' + i, 'button #' + i, Rectangle(0, 0, 200, 20));
            if (_[_clicked]) console.log('clicked #' + i);
            do_scroll_item_end(scroll_uiid);
        }

        do_scroll_end(scroll_uiid);
    }

    do_panel_end(uiid);
    return panel;
}

/** create random point, with no zero components */
function random_anim_vector() {
    let vecx = 0 | 1;
    let vecy = 0 | 1;
    if (Math.random() < 0.5) {
        vecx = -vecx;
    }
    if (Math.random() < 0.5) {
        vecy = -vecy;
    }
    return Point(vecx, vecy);
}

const anim_items = [];
const anim_vectors = [];
const anim_color1 = make_css_color(Color(255, 255, 255, 8));
const anim_color2 = make_css_color(Color(255, 255, 255, 8));
let _bg_init = 0 | false;        

function do_background_anim() {
    if (!_bg_init) {
        for (var i = 0; i < 100; i++) {
            const randx = 0 | (Math.random() * canvas.width * 3) - canvas.width;
            const randy = 0 | (Math.random() * canvas.height * 3) - canvas.height;
            anim_items.push(Point(randx, randy));
            anim_vectors.push(random_anim_vector());
        }
        _bg_init = 0 | true;
    }

    uidraw.begin_path();
    uidraw.move_to(0,0);
    for (var i = 0; i < anim_items.length; i++) {
        const item = anim_items[i];
        const vec = anim_vectors[i];

        let prev_index;
        if (i == 0) {
            prev_index = anim_items.length - 1;
        } else {
            prev_index = i - 1;
        }
        const prev = anim_items[prev_index];

        uidraw.line_to(item[_x], item[_y]);

        // update positions from vectors                
        item[_x] = 0 | item[_x] + vec[_x];
        item[_y] = 0 | item[_y] + vec[_y];

        const min_x = 0 | -canvas.width;
        const max_x = 0 | canvas.width * 2;
        const min_y = 0 | -canvas.height;
        const max_y = 0 | canvas.height * 2;

        // reverse vectors when out of bounds
        if (item[_x] < min_x || item[_x] > max_x) {
            vec[_x] = 0 | -vec[_x];
        }
        if (item[_y] < min_y || item[_y] > max_y) {
            vec[_y] = 0 | -vec[_y];
        }
    }

    uidraw.push_linewidth(1);
    uidraw.push_strokestyle(anim_color1);
    uidraw.stroke()
    uidraw.pop_linewidth();
    uidraw.pop_strokestyle();
    // todo: uidraw.custom_line2(x1, y1, x2, y2, width, style)

    const dash_scale = 20
    uidraw.push_linedash([1 * dash_scale, 3 * dash_scale, 3 * dash_scale, 5 * dash_scale, 5 * dash_scale, 8 * dash_scale, 8 * dash_scale, 13 * dash_scale]);
    uidraw.push_linewidth(3);
    uidraw.push_strokestyle(anim_color2);
    uidraw.stroke();
    uidraw.pop_strokestyle();
    uidraw.pop_linewidth();            
    uidraw.pop_linedash();
    // todo: uidraw.custom_line3(x1, y1, x2, y2, width, style, dash)
}

function do_ui_demo() {
    let expanded = !is_touch_device();

    const row_x0 = 240;
    const row_y0 = 90;
    do_linestar_panel('linestar panel', row_x0, row_y0, true, expanded);

    const row_x1 = row_x0 + 465;
    do_color_panel('color panel', row_x1, row_y0, true, expanded);

    const row_x2 = row_x1 + 666;
    do_gradient_panel('gradient panel', row_x2, row_y0, true, expanded);

    do_gridfont_panel('gridfont panel ', row_x1, 547 + 27, true, expanded);
    do_scrolltest_panel('scroll test panel', 1579, 486 + 25, true, expanded);
}