'use strict';

/** PubSub class. */
export class PubSub {
	/**
	 * PubSub initialization.
	 * @constructor
	 */
	constructor() {
		this.actions = [];
	}

	/**
	 * Store a callback in an event
	 * @param {string} e - A custom event name
	 * @param {callback} cb - A callback function
	 */
	on(e, cb) {
		if (!this.actions[e]) {
			this.actions[e] = [cb];
		} else {
			this.actions[e].push(cb);
		}
	}

	/**
	 * Remove a callback from an event
	 * @param {string} e - A custom event name
	 * @param {callback} [cb] - An optional callback function
	 */
	off(e, cb) {
		if(this.actions[e]) {
			if (!cb) {
				delete this.actions[e];
			} else {
				this.actions[e].forEach((fn, i) => {
					if(fn === cb) {
						this.actions[e].splice(i, 1);
					}
				});
			}
		}
	}

	/**
	 * Trigger an event
	 * @param {string} e - A custom event name
	 * @param {Object} [d] - Optional data packet
	 */
	trigger(e, d) {
		const data = d || {};
		if (this.actions[e]) {
			this.actions[e].forEach((cb) => cb(data));
		}
	}
}