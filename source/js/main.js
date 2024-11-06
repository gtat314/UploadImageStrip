/**
 * 
 * @employSchema
 * @eventListeners
 * @sensibleDefaults
 * @svgSrc
 * @documentation
 * @documentationApi
 * @iconUniformNames
 * @minimizeProperties
 * @objectifyEventListeners
 * @parentElementSelector
 * @distinctEventListeners
 * @propertiesElemUnderscore
 * @propertify
 * @methodNamingConventions
 * @propertyNamingConventions
 */




/**
 * A module to handle the upload of an image to a server by a user
 * @param {Object}                   schema
 * @param {CSSRule|HTMLElement}      schema.parent
 * @param {HTMLSourceElement}        schema.title
 * @param {HTMLSourceElement}        schema.previewDeleteText
 * @param {HTMLSourceElement}        schema.previewCloseText
 * @param {HTMLSourceElement}       [schema.subtitle]
 * @param {HTMLSourceElement}       [schema.subtitleactive]
 * @param {Number}                  [schema.tabindex]
 * @param {Boolean}                 [schema.nodelete]
 * @param {SVGElement}              [schema.iconUpload]
 * @param {SVGElement}              [schema.iconLoading]
 * @param {SVGElement}              [schema.iconWarning]
 * @param {Function}                [schema.onInput]
 * @param {Function}                [schema.onDelete]
 * @param {Object[]}                [schema.eventListeners]
 * @param {'input'|'delete'}         schema.eventListeners[].type
 * @param {Function}                 schema.eventListeners[].listener
 */
function UploadImageStrip( schema ) {

    /**
     * 
     * @property
     * @private
     */
    this._schema = schema;

    /**
     * 
     * @property
     * @private
     */
    this._parentElem = null;

    /**
     * 
     * @property
     * @private
     */
    this._inputElem = null;

    /**
     * 
     * @property
     * @private
     */
    this._loadingBarElem = null;

    /**
     * 
     * @property
     * @private
     */
    this._placeholderElem = null;

    /**
     * 
     * @property
     * @private
     */
    this._imagePartElem = null;

    /**
     * 
     * @property
     * @private
     */
    this._titleElem = null;

    /**
     * 
     * @property
     * @private
     */
    this._subtitleElem = null;

    /**
     * 
     * @property
     * @private
     */
    this._deleteSpanElem = null;

    /**
     * 
     * @property
     * @private
     */
    this._previewWrapElem = null;

    /**
     * 
     * @property
     * @private
     */
    this._onInputCallback = null;

    /**
     * 
     * @property
     * @private
     */
    this._onDeleteCallback = null;

    /**
     * 
     * @property
     * @private
     */
    this._filename = null;

    /**
     * 
     * @property
     * @private
     */
    this._value = null;

    /**
     * 
     * @property
     * @private
     */
    this._filepath = null;

    /**
     * 
     * @property
     * @private
     */
    this._iconUploadSrc = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M16 16h-3v5h-2v-5H8l4-4 4 4zm3.479-5.908C19.267 6.141 16.006 3 12 3s-7.267 3.141-7.479 7.092A5.499 5.499 0 0 0 5.5 21H9v-2H5.5C3.57 19 2 17.43 2 15.5c0-2.797 2.479-3.833 4.433-3.72C6.266 7.562 8.641 5 12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5H15v2h3.5a5.499 5.499 0 0 0 .979-10.908z'/></svg>";

    /**
     * 
     * @property
     * @private
     */
    this._iconLoadingSrc = "<svg class='animateRotation' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='m4.26 18.32-1.42 1.42a11.94 11.94 0 0 1 0-15.48l1.42 1.42a9.96 9.96 0 0 0 0 12.64zM22 12c0 2.4-.85 4.6-2.26 6.32l1.42 1.42a11.94 11.94 0 0 0 0-15.48l-1.42 1.42A9.96 9.96 0 0 1 22 12zM5.68 4.26a9.95 9.95 0 0 1 12.64 0l1.42-1.42a11.94 11.94 0 0 0-15.48 0l1.42 1.42zm12.64 15.48a9.95 9.95 0 0 1-12.64 0l-1.42 1.42a11.94 11.94 0 0 0 15.48 0l-1.42-1.42z'/></svg>";

    /**
     * 
     * @property
     * @private
     */
    this._iconWarningSrc = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='#FF4747' d='M12 1 0 23h24L12 1zm-1 8h2v7h-2V9zm1 11.3a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6z'/></svg>";

    /**
     * 
     * @property
     * @private
     */
    this._iconPreviewCloseSrc = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><defs/><path d='M23 20.2L14.8 12 23 3.8 20.2 1 12 9.2 3.8 1 1 3.8 9.2 12 1 20.2 3.8 23l8.2-8.2 8.2 8.2z'/></svg>";




    if ( typeof this._schema.parent === 'object' ) {

        this._parentElem = this._schema.parent;

    } else if ( typeof this._schema.parent === 'string' ) {

        this._parentElem = document.querySelector( this._schema.parent );

    }

    if ( this._schema.hasOwnProperty( 'iconUpload' ) ) {

        this._iconUploadSrc = this._schema.iconUpload;

    }

    if ( this._schema.hasOwnProperty( 'iconLoading' ) ) {

        this._iconLoadingSrc = this._schema.iconLoading;

    }

    if ( this._schema.hasOwnProperty( 'iconWarning' ) ) {

        this._iconWarningSrc = this._schema.iconWarning;

    }

    if ( this._schema.hasOwnProperty( 'classes' ) ) {

        for ( var i = 0 ; i < this._schema.classes.length ; i++ ) {

            this._parentElem.classList.add( this._schema.classes[ i ] );

        }

    }

    var fragment = document.createDocumentFragment();

    this._inputElem = document.createElement( 'INPUT' );
    this._inputElem.setAttribute( 'type', 'file' );
    fragment.appendChild( this._inputElem );

    var visibleElem = document.createElement( 'DIV' );
    visibleElem.classList.add( 'visible' );
    fragment.appendChild( visibleElem );

    this._imagePartElem = document.createElement( 'DIV' );
    this._imagePartElem.classList.add( 'imagePart' );
    visibleElem.appendChild( this._imagePartElem );

    this._placeholderElem = document.createElement( 'DIV' );
    this._placeholderElem.classList.add( 'placeholder' );
    this._placeholderElem.innerHTML = this._iconUploadSrc;
    this._imagePartElem.appendChild( this._placeholderElem );

    var textPartElem = document.createElement( 'DIV' );
    textPartElem.classList.add( 'textPart' );
    visibleElem.appendChild( textPartElem );

    this._titleElem = document.createElement( 'P' );
    this._titleElem.innerHTML = this._schema.title;
    textPartElem.appendChild( this._titleElem );

    this._subtitleElem= document.createElement( 'SAMP' );
    textPartElem.appendChild( this._subtitleElem );

    if ( this._schema.hasOwnProperty( 'subtitle' ) ) {

        this._subtitleElem.innerHTML = this._schema.subtitle;

    }

    if ( this._schema.hasOwnProperty( 'nodelete' ) === false ) {

        this._deleteSpanElem = document.createElement( 'SPAN' );
        this._deleteSpanElem.classList.add( 'deleteIcon' );
        this._deleteSpanElem.innerHTML = this._iconPreviewCloseSrc;
        visibleElem.appendChild( this._deleteSpanElem );

        this._deleteSpanElem.addEventListener( 'click', this._evt_click_deleteSpan.bind( this ) );

    }

    if ( this._schema.hasOwnProperty( 'eventListeners' ) ) {

        for ( var i = 0 ; i < this._schema.eventListeners.length ; i++ ) {

            if ( this._schema.eventListeners[ i ].type === 'input' ) {

                this._onInputCallback = this._schema.eventListeners[ i ].listener;

            } else if ( this._schema.eventListeners[ i ].type === 'delete' ) {

                this._onDeleteCallback = this._schema.eventListeners[ i ].listener;

            }

        }

    }

    if ( this._schema.hasOwnProperty( 'onInput' ) ) {

        this._onInputCallback = this._schema.onInput;

    }

    if ( this._schema.hasOwnProperty( 'onDelete' ) ) {

        this._onDeleteCallback = this._schema.onDelete;

    }

    if ( this._schema.hasOwnProperty( 'tabindex' ) === true ) {

        this._inputElem.setAttribute( 'tabindex', this._schema.tabindex );

    }

    this._loadingBarElem = document.createElement( 'DIV' );
    this._loadingBarElem.classList.add( 'loadingBar' );
    fragment.appendChild( this._loadingBarElem );

    this._inputElem.addEventListener( 'change', this._evt_change_input.bind( this ) );
    this._parentElem.addEventListener( 'click', this._evt_click_elem.bind( this ) );

    this._parentElem.appendChild( fragment );

};

/**
 * 
 */
UploadImageStrip.prototype.loadingStart = function() {

    this._placeholderElem.innerHTML = this._iconLoadingSrc;

};

/**
 * 
 * @param {Event} evt 
 */
UploadImageStrip.prototype.loadingProgress = function( evt ) {

    var percentComplete = Math.ceil( ( evt.loaded / evt.total ) * 100 );

    this._loadingBarElem.style.width = percentComplete + '%';

    if ( percentComplete > 99 ) {

        this._placeholderElem.innerHTML = '';

    }

};

/**
 * 
 * @param {Event} evt 
 */
UploadImageStrip.prototype.loadingEnd = function( evt ) {

    this._loadingBarElem.style.opacity = 0;

    setTimeout( function(){

        this._loadingBarElem.style.width = '0%';

        setTimeout( function(){

            this._loadingBarElem.style.opacity = 1;

        }.bind( this ), 500 );

    }.bind( this ), 500 );

};

/**
 * 
 */
UploadImageStrip.prototype.clbkRemoveImage = function() {

    this._evt_click_closePreview();
    this.removeImage();

};

/**
 * 
 */
UploadImageStrip.prototype.createPreview = function() {

    var fragment = document.createDocumentFragment();

    this._previewWrapElem = document.createElement( 'uploadimage-display' );
    fragment.appendChild( this._previewWrapElem );

    var previewImgElem = document.createElement( 'IMG' );
    previewImgElem.src = this._filepath;
    this._previewWrapElem.appendChild( previewImgElem );

    var previewControlsElem = document.createElement( 'DIV' );
    previewControlsElem.classList.add( 'controls' );
    this._previewWrapElem.appendChild( previewControlsElem );

    if ( this._schema.hasOwnProperty( 'nodelete' ) === false ) {

        var iconPreviewTrashSrc = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='#f55' d='M3 6v18h18V6H3zm5 14a1 1 0 0 1-2 0V10a1 1 0 0 1 2 0v10zm5 0a1 1 0 0 1-2 0V10a1 1 0 0 1 2 0v10zm5 0a1 1 0 0 1-2 0V10a1 1 0 0 1 2 0v10zm4-18v2H2V2h5.7c1 0 1.6-1.1 1.6-2h5.4c0 .9.7 2 1.6 2H22z'/></svg>";

        var previewDeleteButtonElem = document.createElement( 'BUTTON' );
        previewControlsElem.appendChild( previewDeleteButtonElem );

        var previewDeleteElem = document.createElement( 'SPAN' );
        previewDeleteElem.classList.add( 'icon' );
        previewDeleteElem.innerHTML = iconPreviewTrashSrc;
        previewDeleteButtonElem.appendChild( previewDeleteElem );

        var previewDeleteTextElem = document.createElement( 'P' );
        previewDeleteTextElem.innerHTML = this._schema.previewDeleteText;
        previewDeleteButtonElem.appendChild( previewDeleteTextElem );

        previewDeleteButtonElem.addEventListener( 'click', this._evt_click_deletePreview.bind( this ) );

    }

    var previewCloseButtonElem = document.createElement( 'BUTTON' );
    previewControlsElem.appendChild( previewCloseButtonElem );

    var previewCloseElem = document.createElement( 'SPAN' );
    previewCloseElem.classList.add( 'icon' );
    previewCloseElem.innerHTML = this._iconPreviewCloseSrc;
    previewCloseButtonElem.appendChild( previewCloseElem );

    var previewCloseTextElem = document.createElement( 'P' );
    previewCloseTextElem.innerHTML = this._schema.previewCloseText;
    previewCloseButtonElem.appendChild( previewCloseTextElem );

    previewCloseButtonElem.addEventListener( 'click', this._evt_click_closePreview.bind( this ) );
    this._previewWrapElem.addEventListener( 'click', this._evt_click_previewWrap.bind( this ) );

    document.body.appendChild( fragment );

    setTimeout( function(){

        previewControlsElem.style.top = '0';

    }.bind( this ), 150);

};

/**
 * 
 * @param {String} msg 
 */
UploadImageStrip.prototype.setError = function( msg ) {

    this._value = null;

    this._parentElem.classList.add( 'error' );

    this._subtitleElem.textContent = msg;

    this._placeholderElem.innerHTML = this._iconWarningSrc;

    setTimeout( function(){

        this._placeholderElem.innerHTML = this._iconUploadSrc;

    }.bind( this ), 3000 );

};

/**
 * 
 * @memberof UploadImageStrip
 */
UploadImageStrip.prototype.clearError = function() {

    this._parentElem.classList.remove( 'error' );

    if ( this._schema.hasOwnProperty( 'subtitle' ) ) {

        this._subtitleElem.innerHTML = this._schema.subtitle;

    } else {

        this._subtitleElem.textContent = '';

    }

    this._placeholderElem.innerHTML = this._iconUploadSrc;

};

/**
 * 
 * @param {Object}   options 
 * @param {String}  [options.value]
 * @param {URL}     [options.image]
 * @param {URL}     [options.thumbnail]
 */
UploadImageStrip.prototype.setImageSet = function( options ) {

    if ( options.hasOwnProperty( 'value' ) ) {

        this._value = options.value;

    }

    if ( options.hasOwnProperty( 'image' ) ) {

        var urlParts = options.image.split( '/' );

        this._filepath = options.image;
        this._filename = urlParts[ urlParts.length - 1 ];

        if ( this._imagePartElem.querySelector( 'img' ) ) {

            this._imagePartElem.removeChild( this._imagePartElem.querySelector( 'img' ) );

        }

        this._parentElem.classList.remove( 'active' );
        this._placeholderElem.innerHTML = this._iconLoadingSrc;

        var imgElem = new Image();

        imgElem.addEventListener( 'load', function( evt ){

            this._placeholderElem.innerHTML = '';
            this._parentElem.classList.add( 'active' );

        }.bind( this ) );

        if ( options.hasOwnProperty( 'thumbnail' ) ) {

            imgElem.src = options.thumbnail;

        } else {

            imgElem.src = options.image;

        }

        this._imagePartElem.appendChild( imgElem );

        if ( this._schema.hasOwnProperty( 'subtitleactive' ) ) {

            this._subtitleElem.innerHTML = this._schema.subtitleactive;

        }

        this._parentElem.classList.add( 'active' );

    }

};

/**
 * 
 * @param {String} value 
 */
UploadImageStrip.prototype.setValue = function( value ) {

    this._value = value;

};

/**
 * 
 * @returns {String}
 */
UploadImageStrip.prototype.getValue = function() {

    return this._value;

};

/**
 * 
 * @param {URL} url
 */
UploadImageStrip.prototype.setThumbnail = function( url ) {

    if ( this._imagePartElem.querySelector( 'img' ) ) {

        this._imagePartElem.removeChild( this._imagePartElem.querySelector( 'img' ) );

    }

    var imgElem = new Image();
    imgElem.src = url;
    this._imagePartElem.appendChild( imgElem );

};

/**
 * 
 * @param {URL} url 
 */
UploadImageStrip.prototype.setImage = function( url ) {

    var urlParts = url.split( '/' );

    this._filepath = url;
    this._filename = urlParts[ urlParts.length - 1 ];

    if ( this._imagePartElem.querySelector( 'img' ) ) {

        this._imagePartElem.removeChild( this._imagePartElem.querySelector( 'img' ) );

    }

    this._parentElem.classList.remove( 'active' );
    this._placeholderElem.innerHTML = this._iconLoadingSrc;

    var imgElem = new Image();
    imgElem.addEventListener( 'load', function( evt ){

        this._placeholderElem.innerHTML = '';
        this._parentElem.classList.add( 'active' );

    }.bind( this ) );
    imgElem.src = url;
    this._imagePartElem.appendChild( imgElem );

    if ( this._schema.hasOwnProperty( 'subtitleactive' ) ) {

        this._subtitleElem.innerHTML = this._schema.subtitleactive;

    }

    this._parentElem.classList.add( 'active' );

};

/**
 * 
 */
UploadImageStrip.prototype.removeImage = function() {

    this._filepath = null;
    this._filename = null;
    this._value = null;

    this._imagePartElem.removeChild( this._imagePartElem.querySelector( 'IMG' ) );
    this._placeholderElem.innerHTML = this._iconUploadSrc;

    if ( this._schema.hasOwnProperty( 'subtitleactive' ) ) {

        this._subtitleElem.innerHTML = this._schema.subtitle;

    }

    this._parentElem.classList.remove( 'active' );

};

/**
 * 
 * @param {String} title 
 */
UploadImageStrip.prototype.setTitle = function( title ) {

    this._titleElem.innerHTML = title;

    this._schema.title = title;

};

/**
 * 
 * @param {String} subtitle 
 */
UploadImageStrip.prototype.setSubtitle = function( subtitle ) {

    this._subtitleElem.innerHTML = subtitle;

    this._schema.subtitle = subtitle;

};

/**
 * 
 * @param {String} subtitleActive 
 */
UploadImageStrip.prototype.setSubtitleActive = function( subtitleActive ) {

    this._schema.subtitleactive = subtitleActive;

};

/**
 * 
 * @param {String} text 
 */
UploadImageStrip.prototype.setPreviewDeleteText = function( text ) {

    this._schema.previewDeleteText = text;

};

/**
 * 
 * @param {String} text 
 */
UploadImageStrip.prototype.setPreviewCloseText = function( text ) {

    this._schema.previewCloseText = text;

};

/**
 * 
 * @param {Object} options 
 * @param {URL} options.url
 * @param {Object} [options.formData]
 * @param {Function} [options.on200]
 */
UploadImageStrip.prototype.upload = function( options ) {

    var on200callback = null;
    var on500callback = null;

    if ( options.hasOwnProperty( 'on200' ) ) {

        on200callback = options.on200;

    }

    if ( options.hasOwnProperty( 'on500' ) ) {

        on500callback = options.on500;

    }

    var fd = new FormData();
    fd.append( 'image', this._inputElem.files[ 0 ] );

    if ( options.hasOwnProperty( 'formData' ) ) {

        for ( var formDataEntry in options.formData ) {

            fd.append( formDataEntry, options.formData[ formDataEntry ] );

        }

    }

    var xhr = new XMLHttpRequest();
    xhr.open( 'POST', options.url );

    xhr.onloadstart = function( evt ){

        this.loadingStart( evt );

    }.bind( this );

    xhr.upload.onprogress = function( evt ) {

        this.loadingProgress( evt );

    }.bind( this );

    xhr.onloadend = function( evt ) {

        this.loadingEnd( evt );

    }.bind( this );

    xhr.onreadystatechange = function() {

        if ( xhr.readyState == 4 ) {

            if ( xhr.status === 200 ) {

                if ( on200callback !== null ) {

                    on200callback( xhr.response );

                }

            } else if ( xhr.status === 500 ) {

                if ( on500callback !== null ) {

                    on500callback( xhr.response );

                }

            }

        }

    }.bind( this );

    xhr.send( fd );

};






/**
 * 
 * @private
 * @param {Event} evt 
 * @returns {Boolean|void}
 */
UploadImageStrip.prototype._evt_change_input = function( evt ) {

    if ( this._inputElem.files.length !== 1 ) {

        return false;

    }

    this.clearError();

    if ( this._onInputCallback !== null ) {

        this._onInputCallback( evt );

    }

};

/**
 * 
 * @private
 * @param {Event} evt 
 */
UploadImageStrip.prototype._evt_click_deleteSpan = function( evt ) {

    evt.stopPropagation();

    if ( this._onDeleteCallback !== null ) {

        this._onDeleteCallback( this._filepath, this._filename );

    }

};

/**
 * 
 * @private
 * @param {Event} evt 
 * @returns {Boolean|void}
 */
UploadImageStrip.prototype._evt_click_elem = function( evt ) {

    if ( this._parentElem.classList.contains( 'active' ) === false ) {

        return false;

    }

    if ( evt.currentTarget === this._deleteSpanElem ) {

        this._evt_click_deleteSpan( evt );

        return false;

    }

    this.createPreview();

};

/**
 * 
 * @private
 * @returns {Boolean|void}
 */
UploadImageStrip.prototype._evt_click_closePreview = function() {

    if ( typeof this._previewWrapElem === 'undefined' || this._previewWrapElem === null ) {

        return false;

    }

    while( this._previewWrapElem.firstChild ) {

        this._previewWrapElem.removeChild( this._previewWrapElem.firstChild );

    }

    if ( document.querySelector( 'uploadimage-display' ) !== null ) {

        document.body.removeChild( document.querySelector( 'uploadimage-display' ) );

    }

};

/**
 * 
 * @private
 * @param {Event} evt 
 */
UploadImageStrip.prototype._evt_click_previewWrap = function( evt ) {

    if ( evt.target === this._previewWrapElem ) {

        this._evt_click_closePreview();

    }

};

/**
 * 
 * @private
 */
UploadImageStrip.prototype._evt_click_deletePreview = function() {

    if ( this._onDeleteCallback !== null ) {

        this._onDeleteCallback( this._filepath, this._filename );

    }

};