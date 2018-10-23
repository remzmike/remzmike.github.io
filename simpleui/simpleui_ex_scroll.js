// later: modularize

    function do_scroll_begin(uiid, rect, row_height, item_count) {
        var cache = ui.get_cache(uiid, function() {
            return {
                'yscroll': 0,
                'rect' : rect,
                'row_height' : row_height,
                'item_count' : item_count,
                'layout' : {},
            }
        });

        var layout = ui.layout_push('vertical', 2, rect[_x], rect[_y]);
        cache.layout = layout;

        var scroll = cache;
        scroll.first_visible_index = Math.floor(scroll.yscroll / scroll.row_height);
        var max_visible = Math.ceil(scroll.rect[_h] / scroll.row_height) + 1
        scroll.last_visible_index = scroll.first_visible_index + max_visible;

        let rect2 = uidraw.rectangle_dilate(scroll.rect, 1);        
        uidraw.rectangle(rect2, panel_color2);

        context.save();
        var enable_clip = true;
        if (enable_clip) {
            context.beginPath();
            context.rect(rect[_x], rect[_y], rect[_w], rect[_h]);
            context.clip();
        }

        return cache;
    }
    function do_scroll_end(uiid) {
        var cache = ui.get_cache(uiid);
        let item_count = cache.item_count;
        let row_height = cache.row_height;   
        let rect = cache.rect;     

        context.restore();

        var slider_max = item_count*row_height - rect[_h];
        // the concept of first_value instead of normal simpleui value param, one way binding...
        cache.layout.y -= (rect[_h] + 42);
        cache.layout.x += (rect[_h] - 20);
        _ = ui.vslider('scroll-experiment-slider', Rectangle(20, rect[_h]), 0, slider_max, cache.yscroll);
        if (_.changed) {
            cache.yscroll = _.value;
        }                

        ui.layout_pop();
    }

    // todo: messy, latest feature
    function do_scroll_item_begin(scroll_uiid, i) {
        var layout_parent = ui.layout_peek();
        //console.log(layout_parent);
        var layout = ui.layout_push('vertical');
        var scroll = ui.get_cache(scroll_uiid);
        scroll.translate_y = i * scroll.row_height;
        if (false) {
            scroll.widget_y1 = scroll.rect[_y] + scroll.translate_y - scroll.yscroll;
            scroll.widget_y2 = scroll.widget_y1 + scroll.row_height;
        } else {
            scroll.widget_y1 = layout_parent.y + scroll.translate_y - scroll.yscroll - layout_parent.totalh;
            //console.log(layout_parent);
            scroll.widget_y2 = scroll.widget_y1 + scroll.row_height;
        }

        // this stuff became optional once i decided to use static row_height (for now)

        /*scroll.in_view = scroll.widget_y1 >= scroll.rect.y && scroll.widget_y1 <= scroll.rect.y + scroll.rect.height
            || scroll.widget_y2 >= scroll.rect.y && scroll.widget_y2 <= scroll.rect.y + scroll.rect.height;*/

        //if (true || scroll.in_view) {
            //var layout = ui.layout_peek();
            //scroll.prev_layout_y = layout.y;

            scroll.partial_item = (layout.y - scroll.widget_y1);
            // im emulating the layout here, because i know it is vertical... (TODO: LATER: FIXERINO)
            layout.y -= scroll.partial_item;
            //console.log(layout);
        //}
        
    }

    function do_scroll_item_end(scroll_uiid) {
        var scroll = ui.get_cache(scroll_uiid);
                
        if (scroll.in_view) {
            var layout = ui.layout_peek();
            layout.y += scroll.partial_item; // not sure if this is needed FOR NOW, but probably could be in the future, and would probably be hard to track down
        }
        // debug draws
        if (false) {
            uidraw.rectangle(Rectangle(scroll.rect[_x], scroll.widget_y1, 200, 2), Color(0.2,0.4,0.4,0.5));
            uidraw.rectangle(Rectangle(scroll.rect[_x], scroll.widget_y2-1, 200, 1), Color(0.4,0,0,0.5));
        }

        ui.layout_pop();
    }
