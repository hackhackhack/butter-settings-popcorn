module.exports = {
    projectName: 'Popcorn Time',
    projectUrl: 'http://popcorntime.sh',
    projectTwitter: 'popcorntimetv',
    projectFacebook: 'PopcornTimeTV',
    projectGooglePlus: 'PopcornTime',
    projectBlog: 'http://blog.popcorntime.sh/',
    projectForum: 'https://www.reddit.com/r/PopcornTime',

    statusUrl: 'https://status.popcorntime.sh',
    changelogUrl: 'https://github.com/popcorn-official/popcorn-desktop/commits/master',
    issuesUrl: 'https://github.com/popcorn-official/popcorn-desktop/issues',
    sourceUrl: 'https://github.com/popcorn-official/popcorn-desktop/',
    commitUrl: 'https://github.com/popcorn-official/popcorn-desktop/commit',
     providers: {
         movie: {
             order: 1,
             name: 'Movies',
             uri: ['yts?'
                   +'&apiURL='
                     + 'https://movies.api-fetch.website/,'
//                     + 'cloudflare+https://xor.image.yt,'
//                     + 'cloudflare+http://xor.image.yt'
                  ]
         },
         tvshow: {
             order: 2,
             name: 'Series',
             uri: ['tvapi?'
                   +'&apiURL='
                     + 'https://api-fetch.website/tv/,'
//                     + 'https://odgoglfi7uddahby.onion.to/,'
//                     + 'http://tv.ytspt.re/'
                  ]
         },
         anime: {
             order: 3,
             name: 'Anime',
             uri: ['haruhichan']
         },
         indie: {
             order: 4,
             name: 'Indie',
             uri: ['vodo']
         },

         subtitle: 'ysubs',
         metadata: 'Trakttv',
         tvst: 'TVShowTime',
     },
    updateEndpoint: {
        url: 'https://popcorntime.sh/',
        index: 0,
        proxies: [{
            url: 'https://popcorntime.sh/'
        }]
    },
    updateKey: '-----BEGIN PUBLIC KEY-----\n' +
        'MIIBtjCCASsGByqGSM44BAEwggEeAoGBAPNM5SX+yR8MJNrX9uCQIiy0t3IsyNHs\n' +
        'HWA180wDDd3S+DzQgIzDXBqlYVmcovclX+1wafshVDw3xFTJGuKuva7JS3yKnjds\n' +
        'NXbvM9CrJ2Jngfd0yQPmSh41qmJXHHSwZfPZBxQnspKjbcC5qypM5DqX9oDSJm2l\n' +
        'fM/weiUGnIf7AhUAgokTdF7G0USfpkUUOaBOmzx2RRkCgYAyy5WJDESLoU8vHbQc\n' +
        'rAMnPZrImUwjFD6Pa3CxhkZrulsAOUb/gmc7B0K9I6p+UlJoAvVPXOBMVG/MYeBJ\n' +
        '19/BH5UNeI1sGT5/Kg2k2rHVpuqzcvlS/qctIENgCNMo49l3LrkHbJPXKJ6bf+T2\n' +
        '8lFWRP2kVlrx/cHdqSi6aHoGTAOBhAACgYBTNeXBHbWDOxzSJcD6q4UDGTnHaHHP\n' +
        'JgeCrPkH6GBa9azUsZ+3MA98b46yhWO2QuRwmFQwPiME+Brim3tHlSuXbL1e5qKf\n' +
        'GOm3OxA3zKXG4cjy6TyEKajYlT45Q+tgt1L1HuGAJjWFRSA0PP9ctC6nH+2N3HmW\n' +
        'RTcms0CPio56gg==\n' +
        '-----END PUBLIC KEY-----\n',
    httpApiUsername: 'popcorn',
    httpApiPassword: 'popcorn',
    activateVpn: false
}
