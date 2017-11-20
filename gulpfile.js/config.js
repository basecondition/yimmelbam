/**
 * config
 * contains preferences for gulp tasks, folders, extensions et al
 */

const config = {

    // A-Z!

    // Clean
    // clean asset folders before new assets are generated
    'clean': {
        'cleanableTasks': [
            'images',
            'scripts',
            'styles',
            'svg'
        ]
    },

    // Copy
    // copy assets from source to app
    'copy': [
        {
            'title': 'SVGs',
            'src': ['./source/templates/svg/*.svg'],
            'dest': './public/assets/svg'
        },
        {
            'title': 'Material Icons',
            'src': ['./node_modules/material-design-icons/iconfont/*.{woff,woff2}'],
            'dest': './public/assets/fonts'
        },
        {
            'title': 'Bootstrap icons',
            'src': ['./node_modules/bootstrap-sass/assets/fonts/bootstrap/*.{woff,woff2}'],
            'dest': './public/assets/fonts/bootstrap'
        },
        {
            'title': 'Font-awesome Icons',
            'src': ['./node_modules/font-awesome/fonts/*.{woff,woff2,eot,ttf,svg,css}'],
            'dest': './public/assets/fonts/font-awesome'
        },
        {
            'title': 'Font-awesome Css',
            'src': ['./node_modules/font-awesome/css/*.min.css'],
            'dest': './public/assets/css'
        },
    ],

    // cssnano (minifies CSS)
    // http://cssnano.co/options/
    'cssnano': {
        'zindex': false,
        'discardUnused': false,
        'mergeIdents': false,
        'reduceIdents': false
    },

    // Images
    'images': {
        'sourceFiles': ['./source/images/**/*.{jpg,png,gif,svg}'],
        'destinationFolder': './public/assets/images',
        'watchFiles': ['./source/images/**/*.{jpg,png,gif,svg}'],
        'cleanFiles': ['./public/assets/images/*.{jpg,png,gif,svg}']
    },

    // Modernizr
    // https://modernizr.com/docs
    'modernizr': {
        'feature-detects': [
            'css/animations',
            'css/filters',
            'css/flexbox',
            'css/pointerevents',
            'css/transforms3d',
            'css/transitions',
            'css/vhunit',
            'css/vwunit',
            'css/backgroundblendmode',
            'touchevents'
        ],
        'options': [
            'setClasses'
        ],
        'classPrefix': ''
    },

    // Scripts
    'scripts': {
        'sourceFiles': ['./source/scripts/script.js'],
        'destinationFolder': './public/assets/js',
        'watchFiles': ['./source/scripts/**/*.js'],
        'cleanFiles': ['./public/assets/js/*.{js,map}']
    },

    // Styles
    'styles': {
        'sourceFiles': ['./source/styles/*.scss'],
        'destinationFolder': './public/assets/css',
        'watchFiles': ['./source/styles/**/*.scss'],
        'cleanFiles': ['./public/assets/css/*.{css,map}']
    },

    // SVG
    // combines SVG files to into one with <symbol> elements (»SVG sprite«)
    'svg': {
        'sourceFiles': ['./source/svg/**/*.svg'],
        'destinationFolder': './source/templates/svg',
        'watchFiles': ['./source/svg/**/*.svg'],
        'cleanFiles': ['./public/assets/svg/*.svg']
    },

    // Watch
    // watches for file changes and fires up related tasks
    'watch': [
        {'images': ['images']},
        {'scripts': ['scripts']},
        {'styles': ['styles']},
        {'svg': ['svg']},
    ]
};

module.exports = config;