/** Global variables **/
var
    _ = require('underscore'),
    async = require('async'),
    inherits = require('util').inherits,
    Q = require('q'),

    App = {},
    // Machine readable
    os = require('os'),
    moment = require('moment'),
    crypt = require('crypto'),
    semver = require('semver'),

    data_path = 'hack',
    gui = 'hack',

    win = {},
    // Files
    fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    rimraf = require('rimraf'),

    // Compression
    tar = require('tar'),
    AdmZip = require('adm-zip'),
    zlib = require('zlib'),

    // Encoding/Decoding
    charsetDetect = require('jschardet'),
    iconv = require('iconv-lite'),

    // GUI
    i18n = require('i18n'),

    // Connectivity
    url = require('url'),
    tls = require('tls'),
    http = require('http'),
    request = require('request'),

    // Web
    querystring = require('querystring'),
    URI = require('urijs'),

    // Torrent engines
    peerflix = require('peerflix'),

    // NodeJS
    child = require('child_process');
