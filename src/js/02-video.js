import Player from '@vimeo/player';


// const videoContainer = document.querySelector('#vimeo-player');
// const videoFromGallery = createElementsFromGallery(Player);

// videoContainer.insertAdjacentHTML('afterbegin', videoFromGallery);



const player = new Player('handstick', {
    id: 19231868,
    width: 740
});



player.on('play', function() {
    console.log('played the video!');
});

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};
player.on('play', onPlay);


    // const iframe = document.querySelector('iframe');
    // const player = new Vimeo.Player(iframe);

    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });