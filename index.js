let events = [
    {name: 'Visenya Targaryen',                    start: -29, duration:  73, tags: ['targaryen']},
    {name: 'Aegon I Targaryen, The Conqueror',     start: -27, duration:  64, tags: ['targaryen', 'royalty']},
    {name: 'Rhaenys Targaryen',                    start: -26, duration:  36, tags: ['targaryen']},
    {name: 'Aegon\'s Conquest',                    start:  -2, duration:   3, tags: ['special']},
    {name: '1st Dornish War',                      start:   4, duration:   9, tags: ['special']},
    {name: 'Aenys I Targaryen',                    start:   7, duration:  35, tags: ['targaryen', 'royalty']},
    {name: 'Maegor I Targaryen',                   start:  12, duration:  36, tags: ['targaryen', 'royalty']},
    {name: 'Jeyne Westerling',                     start:  27, duration:  20, tags: ['westerling']},
    {name: 'Jaehaerys I Targaryen',                start:  34, duration:  69, tags: ['targaryen', 'royalty']},
    {name: 'Alysanne Targaryen',                   start:  36, duration:  64, tags: ['targaryen']},
    {name: 'The Faith Millitant Uprising',         start:  41, duration:   7, tags: ['special']},
    {name: 'Aemon Targaryen',                      start:  52, duration:  40, tags: ['targaryen']},
    {name: 'Viserys I Targaryen',                  start:  77, duration:  52, tags: ['targaryen', 'royalty']},
    {name: 'Rhaenyra Targaryen',                   start:  97, duration:  33, tags: ['targaryen']},
    {name: 'Great Council of 101',                 start: 101, duration:   1, tags: ['special']},
    {name: 'Aegon II Targaryen',                   start: 107, duration:  30, tags: ['targaryen', 'royalty']},
    {name: 'Daeron Targaryen',                     start: 114, duration:  16, tags: ['targaryen']},
    {name: 'Aegon III Targaryen',                  start: 120, duration:  37, tags: ['targaryen', 'royalty']},
    {name: 'Viserys II Targaryen',                 start: 122, duration:  50, tags: ['targaryen', 'royalty']},
    {name: 'The Dance of the Dragons',             start: 129, duration:   2, tags: ['special']},
    {name: 'Aegon IV Targaryen',                   start: 135, duration:  49, tags: ['targaryen', 'royalty']},
    {name: 'Aemon Targaryen, the Dragonknight',    start: 136, duration:  47, tags: ['targaryen']},
    {name: 'Naerys Targaryen',                     start: 138, duration:  46, tags: ['targaryen']},
    {name: 'Daeron I Targaryen, The Young Dragon', start: 143, duration:  18, tags: ['targaryen', 'royalty']},
    {name: 'Baelor I Targaryen',                   start: 144, duration:  27, tags: ['targaryen', 'royalty']},
    {name: 'Daeron conquers Dorne',                start: 147, duration:  14, tags: ['special']},
    {name: 'Daeron II Targaryen',                  start: 153, duration:  56, tags: ['targaryen', 'royalty']},
    {name: 'Daemon I Blackfyre',                   start: 170, duration:  26, tags: ['blackfyre']},
    {name: 'Baelor Targaryen Breakspear',          start: 170, duration:  39, tags: ['targaryen']},
    {name: 'Aegor Rivers, Bittersteel',            start: 172, duration:  69, tags: ['bittersteel']},
    {name: 'Aerys I Targaryen',                    start: 172, duration:  49, tags: ['targaryen', 'royalty']},
    {name: 'Maekar I Targaryen',                   start: 174, duration:  59, tags: ['targaryen', 'royalty']},
    {name: 'Brynden Rivers',                       start: 175, duration: 125, tags: ['bloodraven']},
    {name: 'Daemon II Blackfyre',                  start: 188, duration:  31, tags: ['blackfyre']},
    {name: 'Duncan the Tall',                      start: 191, duration:  68, tags: ['duncan']},
    {name: 'Aerion Targaryen',                     start: 191, duration:  41, tags: ['targaryen']},
    {name: 'First Blackfyre Rebellion',            start: 196, duration:   1, tags: ['special']},
    {name: 'Aemon Targaryen',                      start: 198, duration: 102, tags: ['targaryen']},
    {name: 'Aegon V Targaryen',                    start: 200, duration:  59, tags: ['targaryen', 'royalty']},
    {name: 'Walder Frey',                          start: 208, duration:  92, tags: ['frey']},
    {name: 'Maelys Blackfyre',                     start: 210, duration:  50, tags: ['blackfyre']},
    {name: 'Second Blackfyre Rebellion',           start: 211, duration:   1, tags: ['special']},
    {name: 'Grand Maester Pycelle',                start: 216, duration:  84, tags: ['maester']},
    {name: 'Jon Arryn',                            start: 217, duration:  81, tags: ['arryn']},
    {name: 'Third Blackfyre Rebellion',            start: 219, duration:   1, tags: ['special']},
    {name: 'Tytos Lannister',                      start: 220, duration:  47, tags: ['lannister']},
    {name: 'Duncan Targaryen',                     start: 220, duration:  39, tags: ['targaryen']},
    {name: 'Jaehaerys II Targaryen',               start: 225, duration:  37, tags: ['targaryen', 'royalty']},
    {name: 'Eldon Estermont',                      start: 228, duration:  72, tags: ['estermont']},
    {name: 'Olenna Redwyne',                       start: 228, duration:  72, tags: ['redwyne']},
    {name: 'Jeor Mormont',                         start: 230, duration:  69, tags: ['mormont']},
    {name: 'Rickard Stark',                        start: 230, duration:  52, tags: ['stark']},
    {name: 'Great Council of 233',                 start: 233, duration:   1, tags: ['special']},
    {name: 'Stevron Frey',                         start: 233, duration:  66, tags: ['frey']},
    {name: 'Fourth Blackfyre Rebellion',           start: 236, duration:   1, tags: ['special']},
    {name: 'Barristan Selmy',                      start: 236, duration:  64, tags: ['selmy']},
    {name: 'Emmon Frey',                           start: 237, duration:  63, tags: ['frey']},
    {name: 'Hoster Tully',                         start: 237, duration:  62, tags: ['tully']},
    {name: 'Wyman Manderly',                       start: 239, duration:  61, tags: ['manderly']},
    {name: 'Aenys Frey',                           start: 240, duration:  60, tags: ['frey']},
    {name: 'Tywin Lannister',                      start: 242, duration:  58, tags: ['lannister']},
    {name: 'Maege Mormont',                        start: 242, duration:  58, tags: ['mormont']},
    {name: 'Brynden Tully',                        start: 242, duration:  58, tags: ['tully']},
    {name: 'Kevan Lannister',                      start: 244, duration:  56, tags: ['lannister']},
    {name: 'Donal Noye',                           start: 244, duration:  56, tags: ['noye']},
    {name: 'Aerys II Targaryen',                   start: 244, duration:  39, tags: ['targaryen', 'royalty']},
    {name: 'Joanna Lannister',                     start: 245, duration:  28, tags: ['lannister']},
    {name: 'Genna Lannister',                      start: 245, duration:  55, tags: ['lannister']},
    {name: 'Denys Mallister',                      start: 245, duration:  55, tags: ['mallister']},
    {name: 'Rhaella Targaryen',                    start: 245, duration:  39, tags: ['targaryen']},
    {name: 'Selwyn Tarth',                         start: 245, duration:  55, tags: ['tarth']},
    {name: 'Steffon Baratheon',                    start: 246, duration:  32, tags: ['baratheon']},
    {name: 'Cassana Estermont',                    start: 246, duration:  32, tags: ['estermont']},
    {name: 'Ryman Frey',                           start: 246, duration:  54, tags: ['frey']},
    {name: 'Stafford Lannister',                   start: 246, duration:  53, tags: ['lannister']},
    {name: 'Doran Martell',                        start: 247, duration:  53, tags: ['martell']},
    {name: 'Alliser Thorne',                       start: 248, duration:  52, tags: ['thorne']},
    {name: 'Aegon Frey',                           start: 249, duration:  50, tags: ['frey']},
    {name: 'Tygett Lannister',                     start: 250, duration:  35, tags: ['lannister']},
    {name: 'Randyll Tarly',                        start: 250, duration:  50, tags: ['tarly']},
    {name: 'Minisa Whent',                         start: 250, duration:  28, tags: ['whent']},
    {name: 'Wylis Manderly',                       start: 252, duration:  48, tags: ['manderly']},
    {name: 'Dacey Mormont',                        start: 252, duration:  47, tags: ['mormont']},
    {name: 'Jorah Mormont',                        start: 254, duration:  46, tags: ['mormont']},
    {name: 'Gerion Lannister',                     start: 255, duration:  36, tags: ['lannister']},
    {name: 'Balon Greyjoy',                        start: 256, duration:  43, tags: ['greyjoy']},
    {name: 'Elia Martell',                         start: 256, duration:  27, tags: ['martell']},
    {name: 'Mace Tyrell',                          start: 256, duration:  44, tags: ['tyrell']},
    {name: 'Areo Hotah',                           start: 257, duration:  43, tags: ['hotah']},
    {name: 'Damion Lannister',                     start: 257, duration:  43, tags: ['lannister']},
    {name: 'Oberyn Nymeros Martell',               start: 257, duration:  43, tags: ['martell']},
    {name: 'Cleos Frey',                           start: 258, duration:  41, tags: ['frey']},
    {name: 'Tragedy of Summerhall',                start: 259, duration:   1, tags: ['special']},
    {name: 'Edwyn Frey',                           start: 259, duration:  41, tags: ['frey']},
    {name: 'Rhaegar Targaryen',                    start: 259, duration:  24, tags: ['targaryen']},
    {name: 'Roose Bolton',                         start: 260, duration:  40, tags: ['bolton']},
    {name: 'Jon Connington',                       start: 260, duration:  40, tags: ['connington']},
    {name: 'Lyonel Corbray',                       start: 260, duration:  40, tags: ['corbray']},
    {name: 'Arthur Dayne',                         start: 260, duration:  23, tags: ['dayne']},
    {name: 'War of the Ninepenny Kings',           start: 260, duration:   1, tags: ['special']},
    {name: 'Euron Greyjoy',                        start: 260, duration:  40, tags: ['greyjoy']},
    {name: 'Howland Reed',                         start: 260, duration:  40, tags: ['reed']},
    {name: 'Davos Seaworth',                       start: 260, duration:  40, tags: ['seaworth']},
    {name: 'Janos Slynt',                          start: 260, duration:  40, tags: ['slynt']},
    {name: 'Tytos Frey',                           start: 261, duration:  38, tags: ['frey']},
    {name: 'Dontos Hollard',                       start: 261, duration:  39, tags: ['hollard']},
    {name: 'Robert I Baratheon',                   start: 262, duration:  36, tags: ['baratheon', 'royalty']},
    {name: 'Merrett Frey',                         start: 262, duration:  38, tags: ['frey']},
    {name: 'Brandon Stark',                        start: 262, duration:  20, tags: ['stark']},
    {name: 'Eddard Stark',                         start: 263, duration:  36, tags: ['stark']},
    {name: 'Stannis I Baratheon',                  start: 264, duration:  36, tags: ['baratheon']},
    {name: 'Ser Bronn of the Blackwater',          start: 264, duration:  36, tags: ['bronn']},
    {name: 'Victarion Greyjoy',                    start: 264, duration:  36, tags: ['greyjoy']},
    {name: 'Catelyn Tully',                        start: 264, duration:  35, tags: ['tully']},
    {name: 'Gregor Clegane',                       start: 265, duration:  35, tags: ['clegane']},
    {name: 'Ashara Dayne',                         start: 265, duration:  18, tags: ['dayne']},
    {name: 'Falyse Stokeworth',                    start: 265, duration:  35, tags: ['stokeworth']},
    {name: 'Lollys Stokeworth',                    start: 265, duration:  35, tags: ['stokeworth']},
    {name: 'Cersei Lannister',                     start: 266, duration:  34, tags: ['lannister']},
    {name: 'Jaime Lannister',                      start: 266, duration:  34, tags: ['lannister']},
    {name: 'Lyanna Stark',                         start: 266, duration:  17, tags: ['stark']},
    {name: 'Beric Dondarrion',                     start: 267, duration:  32, tags: ['dondarrion']},
    {name: 'Benjen Stark',                         start: 267, duration:  33, tags: ['stark']},
    {name: 'Lysa Tully',                           start: 267, duration:  33, tags: ['tully']},
    {name: 'Petyr Baelish',                        start: 268, duration:  32, tags: ['baelish']},
    {name: 'Allyria Dayne',                        start: 269, duration:  31, tags: ['dayne']},
    {name: 'Aeron Greyjoy',                        start: 269, duration:  31, tags: ['greyjoy']},
    {name: 'Sandor Clegane',                       start: 270, duration:  30, tags: ['clegane']},
    {name: 'Gerold Dayne',                         start: 270, duration:  30, tags: ['dayne']},
    {name: 'Black Walder Frey',                    start: 270, duration:  30, tags: ['frey']},
    {name: 'Edmure Tully',                         start: 270, duration:  30, tags: ['tully']},
    {name: 'Willas Tyrell',                        start: 270, duration:  30, tags: ['tyrell']},
    {name: 'Obara Sand',                           start: 271, duration:  29, tags: ['sand']},
    {name: 'Daven Lannister',                      start: 273, duration:  27, tags: ['lannister']},
    {name: 'Tyrion Lannister',                     start: 273, duration:  27, tags: ['lannister']},
    {name: 'Ronnet Connington',                    start: 274, duration:  26, tags: ['connington']},
    {name: 'Nymeria Sand',                         start: 274, duration:  26, tags: ['sand']},
    {name: 'Asha Greyjoy',                         start: 275, duration:  25, tags: ['greyjoy']},
    {name: 'Daemon Sand',                          start: 275, duration:  25, tags: ['sand']},
    {name: 'Arianne Martell',                      start: 276, duration:  24, tags: ['martell']},
    {name: 'Tyene Sand',                           start: 276, duration:  24, tags: ['sand']},
    {name: 'Viserys III Targaryen',                start: 276, duration:  22, tags: ['targaryen']},
    {name: 'Renly I Baratheon',                    start: 277, duration:  22, tags: ['baratheon']},
    {name: 'Defiance of Duskendale',               start: 277, duration:   1, tags: ['special']},
    {name: 'Garlan Tyrell',                        start: 277, duration:  23, tags: ['tyrell']},
    {name: 'Theon Greyjoy',                        start: 278, duration:  22, tags: ['greyjoy']},
    {name: 'Waymar Royce',                         start: 278, duration:  19, tags: ['royce']},
    {name: 'Domeric Bolton',                       start: 279, duration:  18, tags: ['bolton']},
    {name: 'Tion Frey',                            start: 279, duration:  20, tags: ['frey']},
    {name: 'Mya Stone',                            start: 279, duration:  21, tags: ['myastone']},
    {name: 'Sarella Sand',                         start: 280, duration:  20, tags: ['sand']},
    {name: 'Rhaenys Targaryen',                    start: 280, duration:   3, tags: ['targaryen']},
    {name: 'Brienne Tarth',                        start: 280, duration:  20, tags: ['tarth']},
    {name: 'Falia Flowers',                        start: 281, duration:  19, tags: ['flowers']},
    {name: 'Petyr Frey',                           start: 281, duration:  19, tags: ['frey']},
    {name: 'Harrold Hardyng',                      start: 281, duration:  19, tags: ['hardyng']},
    {name: 'Quentyn Martell',                      start: 281, duration:  19, tags: ['martell']},
    {name: 'Aegon Targaryen',                      start: 281, duration:   2, tags: ['targaryen']},
    {name: 'Ramsay Bolton',                        start: 282, duration:  18, tags: ['bolton']},
    {name: 'Robert\'s Rebellion',                  start: 282, duration:   1, tags: ['special']},
    {name: 'Roslin Frey',                          start: 282, duration:  18, tags: ['frey']},
    {name: 'Lancel Lannister',                     start: 282, duration:  18, tags: ['lannister']},
    {name: 'Loras Tyrell',                         start: 282, duration:  18, tags: ['tyrell']},
    {name: 'Jon Snow',                             start: 283, duration:  17, tags: ['jonsnow']},
    {name: 'Meera Reed',                           start: 283, duration:  17, tags: ['reed']},
    {name: 'Robb I Stark',                         start: 283, duration:  16, tags: ['stark']},
    {name: 'Samwell Tarly',                        start: 283, duration:  17, tags: ['tarly']},
    {name: 'Margaery Tyrell',                      start: 283, duration:  17, tags: ['tyrell']},
    {name: 'Jeyne Westerling',                     start: 283, duration:  17, tags: ['westerling']},
    {name: 'Alys Karstark',                        start: 284, duration:  16, tags: ['karstark']},
    {name: 'Daenerys I Targaryen',                 start: 284, duration:  16, tags: ['targaryen']},
    {name: 'Willem Lannister',                     start: 285, duration:  14, tags: ['lannister']},
    {name: 'Martyn Lannister',                     start: 285, duration:  15, tags: ['lannister']},
    {name: 'Elia Sand',                            start: 285, duration:  15, tags: ['sand']},
    {name: 'Joffrey I Baratheon',                  start: 286, duration:  14, tags: ['baratheon', 'royalty']},
    {name: 'Tyrek Lannister',                      start: 286, duration:  13, tags: ['lannister']},
    {name: 'Jojen Reed',                           start: 286, duration:  14, tags: ['reed']},
    {name: 'Sansa Stark',                          start: 286, duration:  14, tags: ['stark']},
    {name: 'Edric Dayne',                          start: 287, duration:  13, tags: ['dayne']},
    {name: 'Trystane Martell',                     start: 287, duration:  13, tags: ['martell']},
    {name: 'Obella Sand',                          start: 287, duration:  13, tags: ['sand']},
    {name: 'Edric Storm',                          start: 287, duration:  13, tags: ['storm']},
    {name: 'Dickon Tarly',                         start: 287, duration:  13, tags: ['tarly']},
    {name: 'Shireen Baratheon',                    start: 289, duration:  11, tags: ['baratheon']},
    {name: 'Greyjoy\'s Rebellion',                 start: 289, duration:   1, tags: ['special']},
    {name: 'Arya Stark',                           start: 289, duration:  11, tags: ['stark']},
    {name: 'Myrcella Baratheon',                   start: 290, duration:  10, tags: ['baratheon']},
    {name: 'Brandon Stark',                        start: 290, duration:  10, tags: ['stark']},
    {name: 'Tommen I Baratheon',                   start: 291, duration:   9, tags: ['baratheon', 'royalty']},
    {name: 'Robert Arryn',                         start: 292, duration:   8, tags: ['arryn']},
    {name: 'Loreza Sand',                          start: 293, duration:   7, tags: ['sand']},
    {name: 'Rickon Stark',                         start: 295, duration:   5, tags: ['stark']},
    {name: 'War of the Five Kings',                start: 298, duration:   2, tags: ['special']},
]

let $events = $('#events')
let startYear = -45
let pixelsPerYear = 10

// Populate events
_.each(events, e => {
    if (e.duration && !e.end) {
        e.end = e.start + e.duration
    }

    $('<a>')
        .text(e.name)
        .addClass('event')
        .addClass(e.tags.join(' '))
        .css({
            left: (e.start - startYear) * pixelsPerYear,
            width: (e.end - e.start) * pixelsPerYear
        })
        .appendTo($events)
})

// Draw years section
let $years             = $('#years')
let mediumTickInterval = 5
let majorTickInterval  = 10
let labelInterval      = 10

for (let i = startYear + 1; i < 400; i++) {
    let isMedium = !(i % mediumTickInterval)
    let isMajor  = !(i % majorTickInterval)

    $('<span>')
        .addClass('tick')
        .addClass(isMajor ? 'major' : isMedium ? 'medium' : '')
        .css({
            left: (i - startYear) * pixelsPerYear
        })
        .appendTo($years)

    if (!(i % labelInterval)) {
        $('<span>')
            .addClass('tick-label')
            .css({
               left: ((i - startYear) * pixelsPerYear) - 20
            })
            .text(i)
            .appendTo($years)
    }
}

// Auto-scroll the years with the rest of the page, since it's position:fixed
$('#events').scroll(function(){
    $('#years').css({
        'left': -1 * $(this).scrollLeft()
    })
})