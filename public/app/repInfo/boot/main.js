// 模块加载配置
require.config({
    paths: { //此处path若不声明baseUrl的话，则以main.js的路径为基准
        'jquery': '../../../lib/jquery-3.4.1/jquery.min',
        'bootstrap': '../../../lib/bootstrap-3.3.7/js/bootstrap.min',
        'angular': '../../../lib/angular-1.4.6/angular.min',
        'repInfo': '../controller/d0010',
        'mosTable': '../../../javascripts/mosTable',
        'domReady': '../../../lib/domReady-2.0.1/domReady',
        'boot': 'boot',
    },
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'leaveRec': {
            deps: ['bootstrap', 'angular', 'mosTable']
        },
        'mosTable': {
            deps: ['jquery']
        },
    },
    deps: ['boot']
});

// 模块的加载
require(['angular', 'repInfo'], function(angular, app) {
    console.info(angular.version);
});