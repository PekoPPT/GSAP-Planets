import { gsap } from 'gsap/all';
import EventEmitter from 'eventemitter3';

export default class Animation {
  constructor() {
    this._planets = null;
    this._scaleBtn = null;
    this._positionBtn = null;
    this._stopBtn = null;
    this._tl = null;
  }

  async init() {
    const that = this;

    this._planets = document.getElementsByClassName('dots');
    this._scaleBtn = document.getElementById('scale-button');
    this._positionBtn = document.getElementById('position-button');
    this._stopBtn = document.getElementById('stop-button');
    this._tl = gsap.timeline();

    this._scaleBtn.addEventListener('click', () => {
      that.onScaleButtonClick();
    });

    this._positionBtn.addEventListener('click', () => {
      that.onPositionButtonClick();
    });

    this._stopBtn.addEventListener('click', () => {
      that.onStopButtonClick();
    });
  }

  onScaleButtonClick() {
    this.resetTimeline();
    this._tl.to(this._planets, { id: 'scaleStagger', scale: 0, duration: 1, stagger: { amount: 1, yoyo: true, repeat: -1 } });
  }

  onPositionButtonClick() {
    this.resetTimeline();
    this._tl.to(this._planets, { id: 'positionStagger', y: 30, duration: 1, stagger: { amount: 1, yoyo: true, repeat: -1, from: 'edges' } });
  }

  onStopButtonClick() {
    this.resetTimeline();
  }

  resetTimeline() {
    this._tl.clear();
    this._tl.set(this._planets, { clearProps: 'scale, y' });
  }
}
