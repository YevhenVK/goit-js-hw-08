import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';


function onGetLocationPlayback() {
    player
        .getCurrentTime()
        .then(function (seconds) {
         // seconds = the current playback position
            localStorage.setItem(LOCALSTORAGE_KEY, seconds)
         })
        .catch(function (error) {
        // an error occurred
        });
};

    player
        .on('timeupdate', throttle(onGetLocationPlayback, 1000));

const localTime = localStorage.getItem(LOCALSTORAGE_KEY);
    player
        .setCurrentTime(localTime)
        .catch(function (error) {
        });