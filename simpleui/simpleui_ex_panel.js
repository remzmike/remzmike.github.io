// later: modularize

function do_panel_begin(uiid, first_x, first_y, first_visible, first_expanded) {

    const debug_draw = false;
    const debug_color = { r: 0, g: 200, b: 200, a: 0.5 };
    const debug_color2 = { r: 200, g: 200, b: 0, a: 0.5 };

    assert(first_x, 'do_panel_begin: first_x required');
    assert(first_y, 'do_panel_begin: first_y required');
    if (first_visible == null) first_visible = true;
    if (first_expanded == null) first_expanded = true;

    let cache = ui.get_cache(uiid, function () {
        return {
            'uiid': uiid,
            'rect': Rectangle(first_x, first_y, 10, 10),
            'visible': first_visible,
            'expanded': first_expanded
        };
    });

    let rect = cache.rect;
    let vlayout = ui.layout_push('vertical', app.panel_layout_padding, rect[_x], rect[_y]); // pops in *_end

    if (!cache.visible) return cache;

    let x = rect[_x];
    let y = rect[_y];

    let dilate = 20;
    let bar_height = 24;

    let handle_w;
    if (cache.expanded) {
        handle_w = rect[_w] + dilate * 2 - bar_height;
    } else {
        handle_w = 200;
    }

    // todo: later: push_id('handle');
    // or: next_id('-handle'); etc.

    ui.layout_push('none', vlayout.padding, vlayout.x - dilate, vlayout.y - dilate - bar_height);
    {
        let glyph = cache.expanded ? 'v' : '>';
        let text_width = 10; // hax
        let text_ox = bar_height / 2 - text_width / 2; // (bar_height/2)-(text_width/2);
        let text_oy = text_ox / 2;
        _ = ui.checkbutton(uiid + '-button', glyph, Rectangle(0, 0, bar_height, bar_height),
            cache.expanded, text_ox, text_oy);
        if (_.changed) {
            cache.expanded = !cache.expanded;
        }

        _ = ui.handle(uiid + '-handle', Rectangle(bar_height, 0, handle_w, bar_height), x, y);
        if (_.changed) {
            cache.rect[_x] = _.delta_x;
            cache.rect[_y] = _.delta_y;
        }

        ui.label(uiid + '-handle-label', uiid, Rectangle(bar_height + 10, 0, handle_w + dilate, bar_height));

        // panel bg
        if (cache.expanded) {
            if (rect) {
                let rect0 = Rectangle(rect[_x], rect[_y] - 1, rect[_w], rect[_h]);
                let rect1 = uidraw.rectangle_dilate(rect0, dilate);
                let rect2 = uidraw.rectangle_dilate(rect0, dilate - 1);

                uidraw.rectangle(rect1, panel_color2);
                uidraw.rectangle(rect2, panel_color1);

                ui.add_hotspot(uiid + '-bg-hotspot', rect1);
            }
        }
    }

    if (debug_draw) {
        // draw xy indicator
        uidraw.rectangle(Rectangle(x - 4, y - 4, 8, 8), debug_color2);

        // draw layout origin
        let layout = ui.layout_peek();
        let absolute_rect = Rectangle(layout.x - 2, layout.y - 2, 4, 4);
        uidraw.rectangle(absolute_rect, debug_color);

        //ui.label(uiid + '-debug-first_xy', 'first xy', Rectangle(0, 0, 100, 40), debug_color);
    }

    ui.layout_pop();

    return cache;
}

function do_panel_end(uiid) {
    let cache = ui.get_cache(uiid);
    if (cache.visible && cache.expanded) {
        assert(cache); // should have been created in _begin
        const layout = ui.layout_peek();
        cache.rect[_w] = layout.totalw;
        cache.rect[_h] = layout.totalh;
    }
    ui.layout_pop(); // popping the layout created in do_panel_begin
}