// Version 1.1.1 three-spritetext - https://github.com/vasturiano/three-spritetext
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("three")):"function"==typeof define&&define.amd?define(["three"],e):(t=t||self).SpriteText=e(t.THREE)}(this,function(t){"use strict";function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var r=window.THREE?window.THREE:{LinearFilter:t.LinearFilter,Sprite:t.Sprite,SpriteMaterial:t.SpriteMaterial,Texture:t.Texture};return function(t){function s(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgba(255, 255, 255, 1)";return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(t=o(this,n(s).call(this,new r.SpriteMaterial({map:new r.Texture}))))._text=e,t._textHeight=i,t._color=a,t._fontFace="Arial, Gulim",t._fontSize=90,t._fontWeight="normal",t._canvas=document.createElement("canvas"),t._texture=t.material.map,t._texture.minFilter=r.LinearFilter,t._genCanvas(),t}var a,c,f;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(s,r.Sprite),a=s,(c=[{key:"_genCanvas",value:function(){var t=this._canvas,e=t.getContext("2d"),n="".concat(this.fontWeight," ").concat(this.fontSize,"px ").concat(this.fontFace);e.font=n;var i=e.measureText(this.text).width;t.width=i,t.height=this.fontSize,e.font=n,e.fillStyle=this.color,e.textBaseline="bottom",e.fillText(this.text,0,t.height),this._texture.image=t,this._texture.needsUpdate=!0,this.scale.set(this.textHeight*t.width/t.height,this.textHeight)}},{key:"clone",value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:"copy",value:function(t){return r.Sprite.prototype.copy.call(this,t),this.color=t.color,this.fontFace=t.fontFace,this.fontSize=t.fontSize,this.fontWeight=t.fontWeight,this}},{key:"text",get:function(){return this._text},set:function(t){this._text=t,this._genCanvas()}},{key:"textHeight",get:function(){return this._textHeight},set:function(t){this._textHeight=t,this._genCanvas()}},{key:"color",get:function(){return this._color},set:function(t){this._color=t,this._genCanvas()}},{key:"fontFace",get:function(){return this._fontFace},set:function(t){this._fontFace=t,this._genCanvas()}},{key:"fontSize",get:function(){return this._fontSize},set:function(t){this._fontSize=t,this._genCanvas()}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(t){this._fontWeight=t,this._genCanvas()}}])&&e(a.prototype,c),f&&e(a,f),s}()});