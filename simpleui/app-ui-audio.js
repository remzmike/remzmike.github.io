const _ui_sound_osc_types = ['sine', 'square', 'sawtooth', 'triangle'];

const _ui_sound = {
    tone_point: Point(200, 200),
    audio: null,
    osc1: null,
    osc1_started: 0 | false,
    osc1_type_index: 0,
    volume: 10, // [0-100]
    gain1: null,
    analyser1: null,
    analyser1_times: null,
    analyser1_freqs: null,
    throttle: 50, //80,
    conv1: null,
    sound_playing: 0 | false,
};

let yodel_buffer;
let yodel_file_requested = 0 | false;
let yodel_file_request_time;
  
function play(audioBuffer) {

    if (!yodel_buffer) {

        if (yodel_file_requested) {
            return;            
        } else {        
            const URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3';

            yodel_file_requested = 0 | true;
            yodel_file_request_time = Date.now();

            window.fetch(URL)
            .then(response => response.arrayBuffer())
            .then(array_buffer => _ui_sound.audio.decodeAudioData(array_buffer))
            .then(audio_buffer => {
                yodel_buffer = audio_buffer;
            });
        }        
    }

    const source = _ui_sound.audio.createBufferSource();
    source.buffer = audioBuffer;

    _ui_sound.analyser1 = _ui_sound.audio.createAnalyser();
    _ui_sound.analyser1.smoothingTimeConstant = 0.8; // 0.8 default
    _ui_sound.analyser1.fftSize = 1024;
    
    _ui_sound.analyser1_times = new Uint8Array(_ui_sound.analyser1.frequencyBinCount);
    _ui_sound.analyser1_freqs = new Uint8Array(_ui_sound.analyser1.frequencyBinCount);

    _ui_sound.gain1.gain.value = get_volume();

    source.connect(_ui_sound.analyser1);    
    _ui_sound.analyser1.connect(_ui_sound.gain1);
    _ui_sound.gain1.connect(_ui_sound.audio.destination);

    source.start();
    _ui_sound.sound_playing = 0 | true;
}

const _freq_range = 1200;

function get_volume() {
    const volume2 = _ui_sound.tone_point[_y] / _freq_range;
    const final_volume = (_ui_sound.volume / 100) * volume2;
    return final_volume;
}

function start_tone() {
    console.log('[start_tone]');
    const frequency = _ui_sound.tone_point[_x];
    const osc1_type = _ui_sound_osc_types[_ui_sound.osc1_type_index];

    // i guess i need this for now?
    if (_ui_sound.osc1_started) {
        _ui_sound.osc1.stop();
        _ui_sound.osc1_started = 0 | false;
    }

    _ui_sound.osc1 = _ui_sound.audio.createOscillator();
    _ui_sound.conv1 = _ui_sound.audio.createConvolver();

    _ui_sound.analyser1 = _ui_sound.audio.createAnalyser();
    _ui_sound.analyser1.smoothingTimeConstant = 0.8; // 0.8 default
    _ui_sound.analyser1.fftSize = 1024;

    _ui_sound.analyser1_times = new Uint8Array(_ui_sound.analyser1.frequencyBinCount);
    _ui_sound.analyser1_freqs = new Uint8Array(_ui_sound.analyser1.frequencyBinCount);

    _ui_sound.osc1.type = osc1_type;
    _ui_sound.osc1.frequency.value = frequency;
    
    _ui_sound.gain1.gain.value = get_volume();

    // hmph, connecting things correctly matters xd
    _ui_sound.osc1.connect(_ui_sound.analyser1);
    _ui_sound.analyser1.connect(_ui_sound.gain1);
    _ui_sound.gain1.connect(_ui_sound.audio.destination);

    _ui_sound.osc1.start(0);
    _ui_sound.osc1_started = 0 | true;
}

function stop_tone() {
    if (_ui_sound.osc1_started) {
        _ui_sound.osc1.stop(0);
    }
    _ui_sound.osc1_started = 0 | false;
}

let start_tone_limited = ui.throttle(start_tone, _ui_sound.throttle);

function reset_tone() {
    start_tone_limited = ui.throttle(start_tone, _ui_sound.throttle);

    if (_ui_sound.osc1_started) {
        stop_tone();
        start_tone_limited();
    }
}

function sample_analyser() {
    _ui_sound.analyser1.getByteFrequencyData(_ui_sound.analyser1_freqs);
    _ui_sound.analyser1.getByteTimeDomainData(_ui_sound.analyser1_times);
}

function do_sound_panel(uiid, first_x, first_y, first_visible, first_expanded) {
    let _;
    let _changed = 0 | false;
    let panel = do_panel_begin(uiid, first_x, first_y, first_visible, first_expanded);
    if (panel.visible && panel.expanded) {

        ui.layout_push(_horizontal);
        _ = ui.slider(uiid + '-slider-volume', Rectangle(0, 0, 200, 20), 0, 100, _ui_sound.volume, '');
        ui.label('volume', Rectangle(0,0,200,20));
        if (_[_changed]) {
            _ui_sound.volume = _[_value];
            reset_tone();
        }
        ui.layout_pop();

        ui.layout_push(_horizontal);
        _ = ui.slider(uiid + '-slider-throttle', Rectangle(0, 0, 200, 20), 0, 1000, _ui_sound.throttle, '');
        ui.label('throttle', Rectangle(0,0,200,20));
        if (_[_changed]) {
            _ui_sound.throttle = _[_value];
            reset_tone();
        }
        ui.layout_pop();

        ui.layout_push(_horizontal, -1);
        ui.group_buttons_begin();
        for (var i = 0; i < _ui_sound_osc_types.length; i++) {
            const iter_type = _ui_sound_osc_types[i];
            const osc1_type = _ui_sound_osc_types[_ui_sound.osc1_type_index];
            const is_checked = iter_type == osc1_type;
            _ = ui.checkbutton(uiid + '-osc_type_button-' + iter_type, iter_type, Rectangle(0, 0, 80, 24), is_checked);
            if (_[_changed] && _[_value]) {
                _ui_sound.osc1_type_index = i;
                // dont relay change for osc1 type change unless currently playing
                _changed = 0 | _ui_sound.osc1_started;
            }
        }
        ui.group_buttons_end();
        ui.layout_pop();

        const peek = ui.layout_peek();
        const lx = peek[_x];
        const ly = peek[_y] + 300;

        _ = do_slider2d(uiid + '-slider2d', Rectangle(0, 0, 400, 400), 0, _freq_range, _ui_sound.tone_point);
        if (_[_changed]) {
            if (_ui_sound.tone_point[_x] != _[_x1] || _ui_sound.tone_point[_y] != _[_y1]) {
                _ui_sound.tone_point[_x] = _[_x1];
                _ui_sound.tone_point[_y] = _[_y1];
                _changed = 0 | true;
            }
        }

        if (_changed) {
            start_tone_limited();
        }

        if (_ui_sound.analyser1 && _ui_sound.osc1_started || _ui_sound.sound_playing) {
            //uidraw.label(_ui_sound.analyser1_times.length + '', Point(0, 0));
            //uidraw.label(_ui_sound.analyser1_freqs.length + '', Point(0, 20));

            //console.log(_ui_sound.analyser1_times);
            //console.log(_ui_sound.analyser1_freqs);            

            sample_analyser();

            const data1 = _ui_sound.analyser1_freqs;
            const data2 = _ui_sound.analyser1_times;

            function asdf(uiid, rect, data1, data2) {
                if (data1.length == 0 || data2.length == 0) return;

                uidraw.push_linewidth(2);
                
                const draw_w = (400 - 2);
                const draw_h = 100;

                uidraw.begin_path();
                uidraw.push_strokestyle(make_css_color(uidraw.normal_back));
                let irange = data1.length;
                let vrange = 255;
                for (var i = 0; i < irange; i++) {
                    const v = data1[i];
                    const xpos = (i / irange) * draw_w;
                    const ypos = (v / vrange) * draw_h;
                    uidraw.move_to(lx + xpos + 2, ly + 400 - 300 - 1);
                    uidraw.line_to(lx + xpos + 2, ly + 400 - 300 - 1 - ypos);
                }
                uidraw.pop_strokestyle();
                uidraw.stroke();
                
                uidraw.begin_path();
                uidraw.push_strokestyle(make_css_color(uidraw.accent));
                irange = data2.length;
                vrange = 255; // later: just get data as floats and can remove this
                const ypos_start = (data2[0] / vrange) * 100;
                uidraw.move_to(lx + 2, ly + ypos_start);
                for (var i = 1; i < irange; i++) {
                    const v = data2[i];                
                    const xpos = (i / irange) * (400 - 2);
                    const ypos = (v / vrange) * 100;
                    uidraw.line_to(lx + xpos + 2, ly + ypos);
                }
                uidraw.pop_strokestyle();
                uidraw.stroke();    

                uidraw.pop_linewidth();
            }

            asdf(uiid-'-graph', Rectangle(), data1, data2);
        }

        // show this when (requested) and (no buffer -or- buffer was fetched in less than 1 second)
        if ( yodel_file_requested && (!yodel_buffer || (Date.now() - yodel_file_request_time) < 1000)) {
            ui.label('audio file requested...', Rectangle(0,0,200,24));
        } else {
            _ = ui.button(uiid + '-button-yodel', 'yodel', Rectangle(0,0,200,24));
            if (_[_clicked]) {
                play(yodel_buffer);
            }    
        }

        if (ui.state.mouse_went_up) {
            start_tone_limited.cancel();
            stop_tone();
        }

    }
    do_panel_end(uiid);
}

function do_ui_audio() {
    const row_x0 = 240;
    const row_y0 = 90;

    const expanded = !is_touch_device();

    if (_ui_sound.audio) {
        do_sound_panel('tone panel', row_x0, row_y0, true, expanded);
    } else {
        _ui_sound.audio = new AudioContext();
        _ui_sound.gain1 = _ui_sound.audio.createGain();
    }
}