# PubSub
A lightweight es6 PubSub class.

## Usage
`// Import the PubSub class
import {PS} from './PubSub';

// Create a PubSub instance
const MyPubSub = new PS();

// Create a new event with a custom callback
PS.on('event', callback);

// Trigger an event, and pass optional data
PS.trigger('event', {data});`
`
