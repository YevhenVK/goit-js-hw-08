import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const storageKey = 'videoplayer-current-time';

// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

function onGetLocationPlayback() {
    player
        .getCurrentTime()
        .then(function (seconds) {
         // seconds = the current playback position
            localStorage.setItem(storageKey, seconds)
         })
        .catch(function (error) {
        // an error occurred
        });
}

    player
        .on('timeupdate', throttle(onGetLocationPlayback, 1000));

const localTime = localStorage.getItem(storageKey);
    player
        .setCurrentTime(localTime)
        .catch(function (error) {
        });