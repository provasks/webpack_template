/**
 * app.js
 */

var myApp = myApp || {};

import * as Util  from './common/js/utils.js';
import * as About  from './components/about/about.js';


myApp.Util = new Util(myApp);
myApp.About = new About(myApp);
myApp.Index = new Index(myApp);

function Index(myApp){
    if (!myApp.Index) {
        myApp.Index = this;
    }
    return myApp.Index;
}

Index.prototype.init = function(){
    myApp.Util.bindEventListener('.home #btnAbout','click', this, function(){
        location.href = '/about/';
    });
}
myApp.Index.init();
