# PubSub
A lightweight es6 PubSub class.

## Usage
`import {PubSub} from './PubSub'; // Import the PubSub class`

`const PS = new PubSub(); // Create a PubSub instance`

`PS.on('event', callback); // Create a new event with a custom callback`

`PS.trigger('event', {data}); // Trigger an event, and pass optional data`

`PS.off('event', callback); // Remove an existing event and callback`

`PS.off('event'); // Remove the entire event and all attached callbacks`
