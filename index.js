module.exports = {
    projectName: 'Popcorn Time',
    projectUrl: 'http://popcorntime.sh',
    projectTwitter: 'popcorntimetv',
    projectFacebook: 'PopcornTimeTV',
    projectGooglePlus: 'ButterProject',
    projectBlog: 'http://blog.butterproject.org/',
    projectForum: 'http://discuss.butterproject.org/',

    statusUrl: 'https://status.butterproject.org',
    changelogUrl: 'https://github.com/butterproject/butter-desktop/commits/master',
    issuesUrl: 'https://github.com/butterproject/butter-desktop/issues',
    sourceUrl: 'https://github.com/butterproject/butter-desktop/',
    commitUrl: 'https://github.com/butterproject/butter-desktop/commit',
     providers: {
         movie: {
             order: 1,
             name: 'Movies',
             uri: ['yts?'
                   +'&apiURL='
                     + 'https://api-fetch.website/movies/,'
                     + 'cloudflare+https://xor.image.yt/,'
                     + 'cloudflare+http://xor.image.yt/'
                  ]
         },
         tvshow: {
             order: 2,
             name: 'Series',
             uri: ['tvapi?'
                   +'&apiURL='
                     + 'https://api-fetch.website/tv/,'
                     + 'https://odgoglfi7uddahby.onion.to/,'
                     + 'http://tv.ytspt.re/'
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

         subtitle: 'OpenSubtitles',
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
        '-----END PUBLIC KEY-----\n'
}
