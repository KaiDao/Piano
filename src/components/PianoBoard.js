import React, { Component } from "react";

import Button from "react-bootstrap/Button";

import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

const KEYS = [
  {
    css: "bootstrap-overrides-white-key",
    note: "C4",
  },
  {
    css: "bootstrap-overrides-black-key",
    note: "C#4",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "D4",
  },
  {
    css: "bootstrap-overrides-black-key",
    note: "D#4",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "E4",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "F4",
  },
  {
    css: "bootstrap-overrides-black-key",
    note: "F#4",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "G4",
  },
  {
    css: "bootstrap-overrides-black-key",
    note: "G#4",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "A4",
  },
  {
    css: "bootstrap-overrides-black-key",
    note: "A#4",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "B4",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "C5",
  },
  {
    css: "bootstrap-overrides-black-key",
    note: "C#5",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "D5",
  },
  {
    css: "bootstrap-overrides-black-key",
    note: "D#5",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "E5",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "F5",
  },
  {
    css: "bootstrap-overrides-black-key",
    note: "F#5",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "G5",
  },
  {
    css: "bootstrap-overrides-black-key",
    note: "G#5",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "A5",
  },
  {
    css: "bootstrap-overrides-black-key",
    note: "A#5",
  },
  {
    css: "bootstrap-overrides-white-key",
    note: "B5",
  },
];

//
//container component to hold the piano keys
//
class PianoBoard extends Component {
  constructor(props) {
    super(props);

    this.MouseDown = false;
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseDown(e, note) {
    e.preventDefault(e);
    this.MouseDown = true;
    Tone.start();
    synth.triggerAttackRelease(note, "4n", Tone.now());
  }

  handleMouseUp(e) {
    e.preventDefault(e);
    this.MouseDown = false;
    synth.triggerRelease(Tone.now());
  }

  handleMouseOver(e, note) {
    e.preventDefault(e);
    if (this.MouseDown) {
      synth.triggerAttackRelease(note, "4n", Tone.now());
    }
  }

  handleMouseLeave(e) {
    e.preventDefault(e);
    if (this.MouseDown) {
      synth.triggerRelease(Tone.now());
    }
  }

  render() {
    return (
      <div class="pianoboard">
        {KEYS.map((key) => (
          <Button
            id={key.css}
            onMouseDown={(e) => this.handleMouseDown(e, key.note)}
            onMouseLeave={this.handleMouseLeave}
            onMouseOver={(e) => this.handleMouseOver(e, key.note)}
            onMouseUp={this.handleMouseUp}
          >
            {key.note}
          </Button>
        ))}
      </div>
    );
  }
}

export default PianoBoard;
