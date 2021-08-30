module.exports = {
    title: 'DouFTP',
    description: 'DouFTP 桌面FTP应用程序',
    head: [
        ['meta', { name: 'renderer', content: 'webkit' }],
        ['meta', { name: 'force-rendering', content: 'webkit' }],
        ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' }],
        ['meta', { name: 'author', content: 'CROGRAM' }],
        ['meta', { name: 'copyright', content: 'CROGRAM 程江开源' }],
        ['meta', { name: 'keywords', content: 'douftp, 开源, FTP, DouFTP 桌面FTP应用程序' }],
        ['meta', { name: 'baidu-site-verification', content: 'code-7Wz1TUiNJj' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '客户端', link: '/client' },
            { text: '服务端', link: '/server' },
            // {
            //     text: 'Languages',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         { text: 'Chinese', link: '/language/chinese/' },
            //         { text: 'Japanese', link: '/language/japanese/' },
            //     ],
            // },
            // { text: 'Github', link: 'https://github.com/douftp' },
        ],
        repo: 'douftp/douftp.org',
        docsBranch: 'main',
        editLinks: true,
    },
}
