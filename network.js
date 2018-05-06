//
// Networking for shared AR experiences
// mnt.mn code here:
// 
// https://glitch.com/edit/#!/fish-overcoat?path=README.md:1:0
// set: https://fish-overcoat.glitch.me/players/0/update?x=96
// get: https://fish-overcoat.glitch.me/players/0
// set Project Capabilities to Network and add whitelisting for 'fish-overcoat.glitch.me'
//
const Scene = require('Scene');
const Reactive = require('Reactive');
const Networking = require('Networking');
const Diagnostics = require('Diagnostics');
const Time = require('Time');

const url = 'https://fish-overcoat.glitch.me/players/0';

var myplane = Scene.root.find('plane0');

// 
// Repeating timer:
//
Time.ms.interval(1000).subscribe(
    function(elapsedTime) {
        // NOTE: Time.ms may differ slightly from the elapsed
        // time passed to the callback. Time.ms shows the exact
        // time since the effect started, whereas the callback
        // exposes an exact multiple of the specified interval.
        // Diagnostics.log(Time.ms.lastValue);

        Networking.fetch(url).then(function(result) {
            // Diagnostics.log(result);
            // Log result: {"status":200}
            if ((result.status >= 200) && (result.status < 300)) {
                return result.json();
            }
            throw new Error("HTTP status code " + result.status);
        }).then(function(json) {
            var xpos = parseInt(json.x);
            // Diagnostics.log("x: " + xpos + " elapsed time: " + elapsedTime);
            myplane.transform.x = xpos;
        }).catch(function(error) {
            Diagnostics.log("There was an issue with fetch operation: " + error.message);
        });
    });

// 
// (c) mateuniverse.com 2018
// 