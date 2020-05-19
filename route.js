function app(file) {
    return "./app/" + file
}

/**
 * Add path with extension for example index.html - extension .html
 * Add name as route in browser
 * @type {*[]}
 */
const route = [
    {
        name: ['/', 'index.html'],
        path: app('index.html')
    },
    {
        name: 'about',
        path: app('about.html')
    }
]

module.exports = route

