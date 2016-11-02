/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(19),
	    __webpack_require__(69),
	    __webpack_require__(85),
	    __webpack_require__(89),
	    __webpack_require__(60) //Add analytics to the page.
	]);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(20),
	    __webpack_require__(23),
	    __webpack_require__(25),
	    __webpack_require__(28),
	    __webpack_require__(56),
	    __webpack_require__(58),
	    __webpack_require__(62),
	    __webpack_require__(66)
	]);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	   __webpack_require__(21),
	   __webpack_require__(22)
	]);

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[__webpack_require__(24)]);

/***/ },
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(26),
	    __webpack_require__(27)
	]);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// TODO: We already have jquery...
	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = []; (function () {
	    var form = document.getElementById('search-page-search');
	    if (form) {
	        var input = form.querySelector('adg-brand-search-input');
	
	        form.addEventListener('submit', function updateQuery () {
		        analytics.track('search_submitted', {
		            category: 'search',
		            action: 'submitted',
		            label: 'nav search field_' + input.value
		        });
	        });
	
	        input.addEventListener('click', function() {
		        analytics.track('search_clicked', {
		            category: 'search',
		            action: 'clicked',
		            label: 'nav search field'
		        });
	        });
	    }
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());


/***/ },
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(29),
	    __webpack_require__(47),
	    __webpack_require__(48),
	    __webpack_require__(49),
	    __webpack_require__(50),
	    __webpack_require__(51),
	    __webpack_require__(52),
	    __webpack_require__(53),
	    __webpack_require__(54),
	    __webpack_require__(55)
	]);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(30),
	    __webpack_require__(32),
	    __webpack_require__(34),
	    __webpack_require__(36),
	    __webpack_require__(40),
	    __webpack_require__(44)
	]);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(31)
	]);

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(33)
	]);

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	   __webpack_require__(35)
	]);

/***/ },
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(37),
	    __webpack_require__(39)
	]);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(38)]; (function (AJS) {
	    AJS.toInit(function ($) {
	
	        // Compiled soy added as part of DP-595
	        function tocItemBody (opt_data, opt_sb) {
	            var output = opt_sb || new soy.StringBuilder();
	            output.append('<span class="toc-item-body" data-outline="', soy.$$escapeHtml(opt_data.outline), '"><span class="toc-outline">', soy.$$escapeHtml(opt_data.outline), '</span><a href="', soy.$$escapeHtml(opt_data.linkHref), '" class="toc-link">', soy.$$escapeHtml(opt_data.linkText), '</a></span>');
	            return opt_sb ? '' : output.toString();
	        }
	
	        function flatStyleTocItemContainer (opt_data, opt_sb) {
	            var output = opt_sb || new soy.StringBuilder();
	            output.append('<span class="', soy.$$escapeHtml(opt_data.cssClass), '"></span>');
	            return opt_sb ? '' : output.toString();
	        }
	
	        function listStyleTocLevelContainer (opt_data, opt_sb) {
	            var output = opt_sb || new soy.StringBuilder();
	            output.append('<ul style="', (opt_data.cssliststyle) ? ' list-style: ' + soy.$$escapeHtml(opt_data.cssliststyle) + ';' : '', (opt_data.csslistindent) ? ' padding-left: ' + soy.$$escapeHtml(opt_data.csslistindent) + ';' : '', '"></ul>');
	            return opt_sb ? '' : output.toString();
	        }
	
	        function flatStyleTocSeparator (opt_data, opt_sb) {
	            var output = opt_sb || new soy.StringBuilder();
	            output.append('<span class="toc-separator">', soy.$$escapeHtml(opt_data.separator), '</span>');
	            return opt_sb ? '' : output.toString();
	        }
	
	        function listStyleTocItemContainer (opt_data, opt_sb) {
	            var output = opt_sb || new soy.StringBuilder();
	            output.append('<li></li>');
	            return opt_sb ? '' : output.toString();
	        }
	        // End compiled soy
	
	        function dummyElement(precedenceLevel) {
	            var $element = $({});
	            $element.data('precedenceLevel', precedenceLevel);
	            return $element;
	        }
	
	        function getPrecedenceLevel(element) {
	            return $(element).data('precedenceLevel');
	        }
	
	        function setPrecedenceLevel(element, precedenceLevel) {
	            $(element).data('precedenceLevel', precedenceLevel);
	            return element;
	        }
	
	        function hasPrecedenceLevel(element, precedenceLevel) {
	            return precedenceLevel === getPrecedenceLevel(element);
	        }
	
	        /**
	         * Builds a table of contents based on the supplied list of elements.
	         * @param elementsArray The HTML elements to derive the TOC from. Each element is expected to have been pre-populated
	         * with a tocLevel data attribute which indicates its relative position in the TOC hierarchy.
	         * @param elementFactory Used to instantiate the various HTML elements used to build the TOC
	         * @param parentOutline The outline inherited from the parent TOC level
	         */
	        function buildTocTree(elementsArray, elementFactory, parentOutline) {
	            if (elementsArray.length === 0) {
	                return $();
	            }
	
	            var highestElementPrecedence = elementsArray
	                .map(getPrecedenceLevel)
	                .reduce(function (a, b) {
	                    return Math.min(a, b);
	                });
	
	            // Make sure the first element in the list matches the highest precedence level.
	            // If it doesn't, then prepend the list with a synthetic blank element that does.
	            // With properly-structured document headers this shouldn't be necessary, but we need to guard against wacky data.
	            if (!hasPrecedenceLevel(elementsArray[0], highestElementPrecedence)) {
	                elementsArray.unshift(dummyElement(highestElementPrecedence));
	            }
	
	            var currentList = elementFactory.createTocLevelContainer();
	
	            // This buffers up "sub-headers" of the current TOC level until they need to be written out as a sub-toc
	            var subListBuffer = {
	                subElements: [],
	                currentItem: undefined,
	                outline: undefined,
	
	                flush: function () {
	                    if (this.subElements.length > 0 && this.currentItem) {
	                        buildTocTree(this.subElements, elementFactory, this.outline).appendTo(this.currentItem);
	                        this.subElements = [];
	                    }
	                },
	
	                add: function (element) {
	                    this.subElements.push(element);
	                },
	
	                resetItem: function (currentOutlineItem) {
	                    this.outline = (parentOutline || []).slice(0);
	                    this.outline.push(currentOutlineItem);
	
	                    this.currentItem = elementFactory.createTocItemContainer();
	                    this.currentItem.appendTo(currentList);
	                    return this.currentItem;
	                }
	            };
	
	            var outlineCounter = 0;
	
	            elementsArray.forEach(function (element) {
	                if (hasPrecedenceLevel(element, highestElementPrecedence)) {
	                    outlineCounter++;
	                    subListBuffer.flush();
	                    subListBuffer.resetItem(outlineCounter);
	                    if (element.textContent) {
	                        createTocItemBody(element, subListBuffer.outline.join('.'))
	                            .appendTo(subListBuffer.currentItem);
	                    } else {
	                        subListBuffer.currentItem.addClass('toc-empty-item');
	                    }
	                } else {
	                    subListBuffer.add(element);
	                }
	            });
	            subListBuffer.flush();
	
	            if (parentOutline.length === 0 && elementFactory.decorateToc) {
	                elementFactory.decorateToc(currentList);
	            }
	
	            return currentList;
	        }
	
	        /**
	         * Creates an HTML element representing a single item in the TOC, including outline level and a link.
	         */
	        function createTocItemBody(element, outline) {
	            return $(tocItemBody({ //Modified as part of DP-595
	                outline: outline,
	                linkHref: '#' + element.id,
	                linkText: element.textContent
	            }));
	        }
	
	        /**
	         * Creates HTML elements for use in building a flat-style TOC
	         */
	        function flatTocElementFactory(config) {
	            return {
	                createTocLevelContainer: function () {
	                    return this.createTocItemContainer();
	                },
	                createTocItemContainer: function () {
	                    return $(flatStyleTocItemContainer({cssClass: 'toc-item-container'}));
	                },
	                decorateToc: function (tocElement) {
	                    function appendSeparator(configKey, defaultValue) {
	                        var separator = configKey in config ? config[configKey] : defaultValue;
	                        if (separator) {
	                            var $separatorElement = $(flatStyleTocSeparator({
	                                separator: separator
	                            }));
	                            $separatorElement.appendTo(tocElement);
	                        }
	                    }
	
	                    // At this point the various to items are in nested spans, so to be tidy we want to flatten those out.
	                    // We pick each item out of the DOM tree and move it to the top level of the TOC node, decorating them
	                    // with pre/mid/post separators as we go
	                    appendSeparator('preseparator', '[ ');
	
	                    $(tocElement).find('span.toc-item-body').each(function (idx, element) {
	                        if (idx > 0) appendSeparator('midseparator', ' ] [ ');
	                        $(element).appendTo(tocElement);
	                    });
	
	                    appendSeparator('postseparator', ' ]');
	
	                    // Finally we remove all of the intermediate spans that are now empty
	                    $(tocElement).find('.toc-item-container').remove();
	                }
	            };
	        }
	
	        /**
	         * Creates HTML elements for use in building a list-style TOC
	         */
	        function listTocElementFactory(config) {
	            return {
	                createTocLevelContainer: function () {
	                    return $(listStyleTocLevelContainer({
	                        cssliststyle: config['cssliststyle'],
	                        csslistindent: config['csslistindent']
	                    }));
	                },
	                createTocItemContainer: function () {
	                    return $(listStyleTocItemContainer());
	                }
	            };
	        }
	
	        function headerRegexFilter(config) {
	            var includeRegex;
	            if (config['includeheaderregex']) includeRegex = new RegExp(config['includeheaderregex']);
	            var excludeRegex;
	            if (config['excludeheaderregex']) excludeRegex = new RegExp(config['excludeheaderregex']);
	
	            return function () {
	                var headerText = $(this).text();
	                if (includeRegex && !includeRegex.test(headerText)) {
	                    return false;
	                }
	                if (excludeRegex && excludeRegex.test(headerText)) {
	                    return false;
	                }
	                return true;
	            }
	        }
	
	        /**
	         * Builds a table of contents based on the current page content's header elements.
	         */
	        function buildTocTreeFromHeaders(elementFactory, config) {
	            var headerElementsSelector = config['headerelements'];
	            var elementPrecedence = headerElementsSelector.split(',');
	            var regexFilter = headerRegexFilter(config);
	
	            var headerElements = $("#confluence-content")
	                .find(headerElementsSelector)
	                .filter(regexFilter)
	                .each(function () {
	                    setPrecedenceLevel(this, elementPrecedence.indexOf(this.nodeName))
	                })
	                .toArray();
	
	            return buildTocTree(headerElements, elementFactory, []);
	        }
	
	        $(".client-side-toc-macro").each(function () {
	            var $tocContainer = $(this);
	            var config = $tocContainer.data() || {};
	
	            var elementFactory;
	            if (config['structure'] === 'flat') {
	                elementFactory = flatTocElementFactory(config);
	            } else {
	                elementFactory = listTocElementFactory(config);
	            }
	
	            if (config['numberedoutline'] !== true) {
	                $tocContainer.addClass('hidden-outline');
	            }
	
	            $tocContainer.html(buildTocTreeFromHeaders(elementFactory, config));
	        });
	    });
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return window.AJS; //Its in the global namespace :(
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(41),
	    __webpack_require__(43)
	]);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* This file was copied from https://bitbucket.org/atlassian/developer.atlassian.com as part of DP-474 (https://ecosystem.atlassian.net/browse/DP-474) */
	/* It was modified as part of DP-480 (see marked lines below) */
	
	/* Ignore no 'new' before CodeMirror call on line 41 */
	/* jshint -W064 */
	
	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42)]; (function ($) {
	    "use strict";
	
	    function stripInvalidCharacters(text) {
	        // strip out CDATA blocks
	        // unescape remainder of content, stick it back in place
	        return _.unescape(text
	            .replace(/\/\/<!\[CDATA\[/, '')
	            .replace(/^\s*<!\[CDATA\[/, '')
	            .replace(/\/\/]]>/, '')
	            .replace(/]]>\s*$/, '')
	            .replace(/&#34;/g, '"')
	            .replace(/&#39;/g, "'")
	            .replace(/&nbsp;/g, " ")
	        ).trim();
	    }
	
	    function renderCode($context) {
	
	        var codeDefaults = {
	            mode: "clike",
	            theme: "neat",
	            lineNumbers: true,
	            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
	            indentWithTabs: false,
	            electricChars: true,
	            matchBrackets: true,
	            autoCloseBrackets: true,
	            highlightSelectionMatches: true,
	            indentUnit: 2,
	            lineWrapping: true,
	            readOnly: true
	        };
	
	
	        function cmIfyPreCodeBlocks(block) {
	            var $sample = $(block);
	            var className = $sample.attr("class");
	            var lang = (className) ? className.match("lang-([a-z]+)", "gi") : undefined;
	            lang = (lang && lang.length) ? lang[1] : "text";
	            var text = $sample.text().trim();
	            var newOpts = $.extend({}, codeDefaults);
	
	            newOpts.value = text;
	
	            // get the right types for shell, dunno why it's not just sh
	            if (lang === "sh" || lang === "bash") {
	                lang = "shell";
	            }
	
	            if (lang === "ini") {
	                lang = "properties";
	            }
	
	            if (lang) {
	                newOpts.mode = (lang === 'java' ? 'text/x-java' : lang);
	            }
	
	            CodeMirror(function (node) {
	                block.parentNode.replaceChild(node, block);
	            }, newOpts);
	        }
	
	        // blog stuff
	        $context.find('pre > code').each(function () {
	            // remove the panel styling around the code block
	            $(this).parent().parent().removeClass("panel").removeClass("panel-default");
	
	            cmIfyPreCodeBlocks(this);
	        });
	
	        $context.find('.preformatted.panel > .preformattedContent > pre').each(function () {
	            // remove the panel styling around the code block
	            $(this).parent().parent().removeClass("panel").removeClass("panel-default");
	
	            cmIfyPreCodeBlocks(this);
	        });
	
	        $context.find(".expandNextPre").each(function () {
	            $(this).nextAll("pre").first().addClass("aui-expander-content");
	        });
	
	        // code blocks in older version of confluence
	        $context.find(".code.panel > .codeContent > script[type=syntaxhighlighter]").each(function () {
	            var opts = $.extend({}, codeDefaults);
	            $(this).parent().parent().removeClass("code").removeClass("panel");
	            this.text = stripInvalidCharacters(this.text);
	
	            /** Lines modified by DP-480 **/
	                // get the type
	            var brushMatches = this.className.match(/brush\: ([a-zA-z0-9-]+)\;/);
	            var firstLineNumberMatches = this.className.match(/first-line\: ([a-zA-z0-9-]+)\;/);
	
	            if (brushMatches) {
	                opts.mode = brushMatches[1];
	            }
	
	            if (firstLineNumberMatches) {
	                opts.firstLineNumber = parseInt(firstLineNumberMatches[1]);
	            }
	            /** End modified lines **/
	
	            var textArea = $("<textarea />");
	            textArea.val(this.text);
	
	            $(this).before(textArea);
	
	            CodeMirror.fromTextArea(textArea[0], opts);
	        });
	
	
	        // code blocks in latest version of confluence
	        $context.find(".code.panel > .codeContent > pre.syntaxhighlighter-pre").each(function () {
	            var opts = $.extend({}, codeDefaults);
	            $(this).parent().parent().removeClass("code").removeClass("panel");
	            $(this).text(stripInvalidCharacters($(this).text()));
	
	            // get the type
	            var shParams = $(this).attr('data-syntaxhighlighter-params');
	            var brushMatches = shParams.match(/brush\: ([a-zA-z0-9-]+)\;/);
	            var firstLineNumberMatches = shParams.match(/first-line\: ([a-zA-z0-9-]+)\;/);
	
	            if (brushMatches) {
	                opts.mode = brushMatches[1];
	            }
	
	            if (firstLineNumberMatches) {
	                opts.firstLineNumber = parseInt(firstLineNumberMatches[1]);
	            }
	
	            var textArea = $("<textarea />");
	            textArea.val($(this).text());
	
	            $(this).before(textArea);
	
	            CodeMirror.fromTextArea(textArea[0], opts);
	
	            $(this).remove();
	        });
	
	
	        /** Lines modified by DP-480 **/
	        $context.find('.pdl.codeHeader').each(function () {
	            var $codeHeader = $(this);
	            var $codeContent = $codeHeader.parent().find('.codeContent');
	
	            var $expandControl = $(this).find('.expand-control');
	            if ($expandControl.length === 0) {
	                return;
	            }
	
	            var id = AJS.id('code-block');
	            var $expandTrigger = $('<a class="aui-expander-trigger" aria-controls="' + id + '" data-replace-text="Collapse source">Expand source</a>');
	            $codeHeader.find('.code-title').after($expandTrigger);
	
	
	            $codeContent.wrap('<div class="aui-expander-content" id="' + id + '"></div>');
	
	        });
	
	
	        /** End modified lines **/
	    }
	
	    renderCode($(document.body));
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return window.jQuery; //In the global namespace and assumed its preloaded :/ Fix this later
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(45),
	    __webpack_require__(46)
	]);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* This file was copied from https://bitbucket.org/atlassian/developer.atlassian.com as part of DP-474 (https://ecosystem.atlassian.net/browse/DP-474) */
	/* It was modified as part of DP-589 (see marked lines below) */
	
	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42)]; (function ($) {
	  "use strict";
	
	  $(".expand-container .expand-control").on("click", function(event) {
	    $(this).next().toggleClass("expand-hidden");
	    $(this).find(".expand-control-icon").toggleClass("expanded");
	
	    /** Lines modified by DP-589 **/
	    $(this).next().find('.CodeMirror').each(function () {
	      var codeMirrorBlock = this;
	      if (codeMirrorBlock.CodeMirror) {
	        codeMirrorBlock.CodeMirror.refresh();
	      }
	    });
	    /** End modification DP-589 **/
	
	    event.preventDefault();
	  });
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());


/***/ },
/* 46 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42)]; (function ($) {
	
	    $(function () {
	        
	        // hide legacy Was This Helpful panel
	        $("form[action='/plugins/kb/ajaxkb/submit.action?pageId=$action.page.id']").closest(".panel-default").hide();
	
	        // remove border and yellow background styling from technical announcements div
	        $("div:contains('Important Technical Announcements for')").removeAttr('style');
	
	    });
	
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	//TODO: whhhaaat is this?!
	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42)]; (function ($) {
	
	    $(function() {
	
	        var qsElem = $('.aui-header .aui-header-secondary .aui-nav #quicksearch');
	        var headerElem = $('.aui-header');
	        var searchIcon = $('.cac-search-icon');
	
	        // click handler for the search icon, which is only visible when viewport < 600
	        searchIcon.on('click', function(e) {
	            console.log("Mobile search icon was clicked.");
	            if (qsElem.is(':hidden')) {
	                searchIcon.css("color", "#cccccc");
	                qsElem.attr('data-opened', 'true');
	                headerElem.animate({
	                    "padding-bottom": "40px"
	                });
	                qsElem.slideToggle();
	            } else {
	                searchIcon.css("color", "#205081");
	                qsElem.removeAttr('data-opened');
	                qsElem.slideToggle();
	                headerElem.animate({
	                    "padding-bottom": "0px"
	                });
	            }
	        });
	
	        // resize handler
	        $(window).resize(function() {
	            var mediaQuery600 = window.matchMedia("screen and (max-width: 600px)");
	            if (!mediaQuery600.matches) {
	                // always show search on resize when viewport > 600.
	                qsElem.removeAttr('data-opened');
	                searchIcon.css("color", "#205081");
	                headerElem.css('padding-bottom', '0px');
	                qsElem.show();
	            } else {
	                // when viewport <= 600, visibility depends on whether it was opened by click
	                if (!qsElem.attr('data-opened')) {
	                    qsElem.hide();
	                }
	            }
	        });
	
	    });
	
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());


/***/ },
/* 49 */
/***/ function(module, exports) {

	// This will query the DOM for all content images that are NOT on the homepages,
	// and will bind featherlight (the lightbox library) to those elements. Once bound,
	// an enlarged version of that image is shown to the user when the image is clicked
	
	(function($) {
	
	    $(document).ready(function() {
	        $('body:not(.cac-space-homepage) #confluence-content .confluence-embedded-image').each(function() {
	            //Make sure this isn't a link!
	            if($(this).parents('a').length === 0) {
	                $(this).featherlight($(this).attr('src'), {variant: 'cac-lightbox', type:{image: true}});
	            }
	        });
	    });
	
	
	
	})(jQuery);

/***/ },
/* 50 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 51 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 52 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 53 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 54 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 55 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	   __webpack_require__(57)
	]);

/***/ },
/* 57 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(59),
	    __webpack_require__(61)
	]);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42), __webpack_require__(60)]; (function($, analytics) {
	
	
	    $(function () {
	
	        var htmlElem = $("html");
	        var wasThisHelpfulThanksElem = $("#wasthishelpful-thanks");
	        var likesSectionNoElem = $("#likes-section-no");
	
	        likesSectionNoElem.find("form button.feedback-button").attr('disabled', 'disabled');
	
	        // attach event handlers
	
	        htmlElem.on("click", "#wasthishelpful-yes", "yes", handleWasThisHelpful);
	
	        htmlElem.on("click", "#wasthishelpful-no", "no", handleWasThisHelpful);
	
	        htmlElem.on("click", "#likes-section-no form button.feedback-button", function () {
	            wasThisHelpfulThanksElem.html("Thanks for your feedback!");
	            wasThisHelpfulThanksElem.focus();
	            likesSectionNoElem.css({"display": "none"});
	
	            analytics.track('was_this_helpful_feedback', {
	                category: 'was this helpful',
	                action: 'feedback',
	                label: likesSectionNoElem.find("input:radio[name=unhelpful]:checked").val()
	            });
	
	            return false;
	        });
	
	        htmlElem.on("click", "#likes-section-no form a.cancel-feedback", function () {
	            likesSectionNoElem.css({"display": "none"});
	
	            wasThisHelpfulThanksElem.focus();
	
	            analytics.track('was_this_helpful_feedback', {
	                category: 'was this helpful',
	                action: 'feedback',
	                label: 'cancelled'
	            });
	
	            return false;
	        });
	
	        likesSectionNoElem.find("form input").on("change", function () {
	            if ($(this).val() !== '') {
	                likesSectionNoElem.find("form button.feedback-button").removeAttr('disabled');
	            }
	        });
	
	        function handleWasThisHelpful(event) {
	            var upVote = event.data;
	
	            analytics.track('was_this_helpful_click', {
	                category: 'was this helpful',
	                action: 'click',
	                label: upVote
	            });
	
	            $('#wasthishelpful-vote').fadeOut(100, function () {
	                if (upVote == "yes") {
	                    wasThisHelpfulThanksElem.html("Thanks for your feedback!");
	                    wasThisHelpfulThanksElem.fadeIn(200, function () {
	                        wasThisHelpfulThanksElem.focus();
	                    });
	                } else {
	                    wasThisHelpfulThanksElem.html("Thanks!");
	                    wasThisHelpfulThanksElem.fadeIn(200);
	                    likesSectionNoElem.css({"display": "inline-block"});
	                    likesSectionNoElem.fadeIn(500, function () {
	                        likesSectionNoElem.find("form input[name='unhelpful']").get(0).focus();
	                    });
	                }
	            });
	
	            return false;
	        }
	
	    });
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
		if(typeof window.ace !== 'undefined' && window.ace !== null){
			var url = window.location.href;
			var anchorIndex = url.indexOf('#');
			url = anchorIndex === -1 ? url : url.slice(0, anchorIndex);
			window.ace.analytics.Initializer.initWithPageAnalytics('9nfqb81km3', {path: window.location.pathname, url: url});
		}
		
		if (typeof window.optly === 'undefined') {
			document.write('<script type="text/javascript" src="https://cdn.optimizely.com/js/1053703113.js"><'+'/script>');
		}
	
		//Track an event using segment-style params. If segment is not loaded, fallback to google analytics.
	    var _track = function (event, params) {
	        if(typeof params !== 'object') {
	        	params = {};
	        }
	
	        var category = params.category || '';
	        var action = params.action || '';
	        var label = params.label || '';
	
	        if (window.analytics) {
		        // Segment will pass this through to GA as well.
		        window.analytics.track('was_this_helpful_feedback', {
		            category: category,
		            action: action,
		            label: label
		        });
		    } else if (window.ga) {
		        window.ga('send', 'event', category, action, label);
		    } else {
		    	console.log('Could not send analytics event; GA and segment could not be loaded.');
		    }
	    };
	
	    return {
	        track: _track
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 61 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(63),
	    __webpack_require__(65)
	]);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42), __webpack_require__(64)]; (function ($, metadata) {
	    $(function() {       
	
	       
	
	        var allButtons = $('.watch-blog-button');
	        var spaceKey = metadata.getMetadataValue('ajs-space-key') || '';
	        var atlToken = metadata.getMetadataValue('atlassian-token') || '';
	        var isWatching = metadata.isMetadataValueTrue('user-watching-blog');
	
	        var allButtonsText =  allButtons.children('.watch-blog-button-text');
	        var allButtonsIcons = allButtons.children('.watch-blog-button-icon');
	
	        var updateButtonText = function () {
	            if (isWatching) {
	                allButtonsText.text('Stop watching this Blog');
	                allButtonsIcons.removeClass('aui-iconfont-unwatch').addClass('aui-iconfont-watch');      
	            } else {
	                allButtonsText.text('Watch this Blog');
	                allButtonsIcons.removeClass('aui-iconfont-watch').addClass('aui-iconfont-unwatch');
	            }
	        };
	
	        updateButtonText();
	
	         if (!metadata.isMetadataValueTrue('user-logged-in')) {
	            return;
	        }
	
	        allButtons.click(function () {
	            if (isWatching) {                
	                $.post(metadata.getContextPath() + '/users/removespacenotificationajax.action', {
	                    spaceKey: spaceKey,
	                    contentType: 'blogpost',
	                    atl_token: atlToken
	                });
	
	                isWatching = false;
	                updateButtonText();
	
	            } else {
	
	                $.post(metadata.getContextPath() + '/users/addspacenotificationajax.action', {
	                    spaceKey: spaceKey,
	                    contentType: 'blogpost',
	                    atl_token: atlToken
	                });
	
	                isWatching = true;
	                updateButtonText();    
	            }
	        });
	
	    });
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38)], __WEBPACK_AMD_DEFINE_RESULT__ = function (AJS) {
	
	    var _getMetadataValue = function (metadata_key, show_error_messages) {
	
	    	if(typeof metadata_key !== 'string' || metadata_key === null) {
	    		if(show_error_messages) {
	                console.log('WARNING: There was an attempt to grab metadata value for a null or invalid key');
	            }
	
	    		return null;
	    	}
	
	    	var tagSearch = $("meta[name='" + metadata_key + "']").first();
	    	if(tagSearch === null) {
	            if(show_error_messages) {
	    		  console.log('WARNING: The metadata key was not found in the HTML. Was the metadata component included in the HTML?');
	            }
	
	    		return null;
	    	}
	
	        return tagSearch.attr('content');
	    };
	
	    var _getMetadataValueWithErrors = function (metadata_key) {
	        return _getMetadataValue(metadata_key, true);
	    }
	
	    var _isMetadataValueTrue = function (metadata_key) {
	    	return _getMetadataValueWithErrors(metadata_key) == 'true';
	    };
	
	
	    var _getContextPath = function () {
	        var contextPathOverride = _getMetadataValue('ajs-base-url', false);
	        if(contextPathOverride !== null) {
	            return contextPathOverride;
	        }
	
	        if(typeof AJS !== 'undefined' && typeof AJS.contextPath === 'function') {
	            return AJS.contextPath();
	        }
	
	        return '';
	    };
	
	    return {
	        getMetadataValue: _getMetadataValueWithErrors,
	        isMetadataValueTrue: _isMetadataValueTrue,
	
	        getContextPath: _getContextPath
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 65 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(67),
	    __webpack_require__(68)
	]);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42), __webpack_require__(64)]; (function ($, metadata) {
	    $(function() {
	
	        var allButtons = $('.watch-page-button');
	        var pageId = metadata.getMetadataValue('ajs-page-id') || '';
	        var atlToken = metadata.getMetadataValue('atlassian-token') || '';
	        var isWatching = metadata.isMetadataValueTrue('user-watching-page');
	
	        var allButtonsText =  allButtons.children('.watch-page-button-text');
	        var allButtonsIcons = allButtons.children('.watch-page-button-icon');
	
	        var updateButtonText = function () {
	            if (isWatching) {
	                allButtonsText.text('Stop watching this Page');
	                allButtonsIcons.removeClass('aui-iconfont-unwatch').addClass('aui-iconfont-watch');      
	            } else {
	                allButtonsText.text('Watch this Page');
	                allButtonsIcons.removeClass('aui-iconfont-watch').addClass('aui-iconfont-unwatch');
	            }
	        };
	
	        updateButtonText();
	
	        if (!metadata.isMetadataValueTrue('user-logged-in')) {
	            return;
	        }
	
	        allButtons.click(function () {
	            if (isWatching) {                
	                $.post(metadata.getContextPath() + '/users/removepagenotificationajax.action', {
	                    pageId: pageId,
	                    atl_token: atlToken
	                });
	
	                isWatching = false;
	                updateButtonText();
	
	            } else {
	
	                $.post(metadata.getContextPath() + '/users/addpagenotificationajax.action', {
	                    pageId: pageId,
	                    atl_token: atlToken
	                });
	
	                isWatching = true;
	                updateButtonText();    
	            }
	        });
	
	    });
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());

/***/ },
/* 68 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(70),
	    __webpack_require__(73),
	    __webpack_require__(76),
	    __webpack_require__(28),
	    __webpack_require__(79),
	    __webpack_require__(82)
	]);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(71),
	    __webpack_require__(72)
	]);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42)]; (function ($) {
		var docID = $('meta[name=ajs-page-id]').attr("content");
		var docTitle = $('meta[name=ajs-page-title]').attr("content");
		var docSpace = $('meta[name=ajs-space-name]').attr("content");
		$("#doc-topics").val("Documentation,"+docSpace+","+docTitle+","+docID);
		$("#doc-comment").val("<p style=\"color:#6f6f6f;border: 1px solid #e9e9e9;border-radius: 3px;padding: 5px;\"><em>This question is in reference to Atlassian Documentation: <a href=\"https://confluence.atlassian.com/pages/viewpage.action?pageId="+docID+"\">"+docTitle+"</a></em></p><p><span class=\"text-placeholder\">Ask your question here...</span></p>");
		$("#aac-tags-link").prop("href", "https://answers.atlassian.com/tags/"+docID);
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());

/***/ },
/* 72 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(74),
	    __webpack_require__(75),
	    __webpack_require__(62)
	]);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42)]; (function ($) {
	    'use strict';
	
	    $(document).on('click', '#breadcrumbs .breadcrumb > a', function(e) {
	        // Get the position of the breadcrumb, where 1 is the leftmost breadcrumb.
	        var index = Array.prototype.indexOf.call(document.querySelectorAll('#breadcrumbs .breadcrumb a'), e.target) + 1;
	        analytics.track('breadcrumb_clicked', {
	            category: 'breadcrumb',
	            action: 'clicked',
	            label: e.target.textContent + '_' + index
	        });
	    });
	
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());

/***/ },
/* 75 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(77),
	    __webpack_require__(78)
	]);

/***/ },
/* 77 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42)]; (function($) {
		$(function () {
			var breadcrumbElement = $('.space-breadcrumbs-wrapper').first();
	        breadcrumbElement.scrollToFixed();
		});
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	   __webpack_require__(80),
	    __webpack_require__(81)
	]);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* This file has been modified as part of DP-525. See the marked lines below */
	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42), __webpack_require__(60)]; (function ($, analytics) {
	    "use strict";
	
	    var duration = 250;
	
	    $(document).on("click", ".expanding-nav button", function(e) {
	        e.preventDefault();
	        var $parent = $(e.target).closest("li");
	        var $expander = $parent.children(".expander");
	
	        /*Start modification DP-525*/
	        analytics.track('documentation-nav_page-tree-expanded', {
	            category: 'documentation nav',
	            action: 'page tree expanded',
	            label: e.target.nextSibling.textContent
	        });
	        /*end modification DP-525*/
	
	        if (!$parent.hasClass("expanded")) {
	            $(".expanded > .expander")
	              .not($expander)
	              .not($expander.parents())
	              .slideUp(duration, function () {
	                  $(this).parent().removeClass("expanded");
	              });
	        }
	
	        $expander.stop(true, true)
	          .slideToggle(duration, function() {
	              $(this).parent().toggleClass("expanded");
	          });
	    });
	
	    /*Start modification DP-525*/
	    $(document).on("click", ".expanding-nav .aui-nav li > a", function(e) {
	        analytics.track('documentation-nav_page-tree-clicked', {
	            category: 'documentation nav',
	            action: 'page tree clicked',
	            label: e.target.textContent
	        });
	    });
	    /*end modification DP-525*/
	
	    var pageId = $("#current-page-id").val();
	    $('.expanding-nav li[data-page-id="' + pageId + '"]')
	        .addClass('current expanded')
	        .parents('li').each(function(idx, el) { $(el).addClass('active expanded'); });
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());


/***/ },
/* 81 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(83),
	    __webpack_require__(84)
	]);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42), __webpack_require__(60)]; (function ($, analytics) {
	    'use strict';
	
	    function initVersionPicker() {
	        $('.version-picker-dropdown a').each(function(i, el) {
	            var href = el.getAttribute('href');
	            if ('#notfound' === href) {
	                el.removeAttribute('href');
	                $(el).addClass('disabled');
	            }
	        });
	    }
	
	    function initLogging() {
	        // Google analytics
	        var $versionPickerDropdown = $('.version-picker-dropdown');
	        $versionPickerDropdown.on('click', function(e) {
	            var label = e.target.textContent;
	            analytics.track('documentation-nav_version-selector-clicked', {
	                category: 'documentation nav',
	                action: 'version selector clicked',
	                label: label
	            });
	            if (e.target.hasAttribute('page-not-found')) {
	                analytics.track('documentation-nav_version-selector-clicked', {
		                category: 'documentation nav',
		                action: 'version selector clicked',
		                label: label + '_redirect'
		            });
	            }
	        });
	        $versionPickerDropdown.on('aui-dropdown2-show', function() {
	            analytics.track('documentation-nav_version-selector-expanded', {
	                category: 'documentation nav',
	                action: 'version selector expanded',
	                label: 'version selector'
	            });
	        });
	
	        var $spacePickerDropdown = $('.space-picker-dropdown');
	        $spacePickerDropdown.on('click', function(e) {
	            analytics.track('documentation-nav_space-selector-clicked', {
	                category: 'documentation nav',
	                action: 'space selector clicked',
	                label: e.target.textContent
	            });
	        });
	        $spacePickerDropdown.on('aui-dropdown2-show', function() {
	            analytics.track('documentation-nav_space-selector-expanded', {
	                category: 'documentation nav',
	                action: 'space selector expanded',
	                label: 'product selector'
	            });
	        });
	    }
	
	    $(function() {
	        initVersionPicker();
	        initLogging();
	    });
	
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());


/***/ },
/* 84 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(86)
	]);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(87),
	    __webpack_require__(88)
	]);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42)]; (function ($) {
	
		var tileSelector = '.cac-space-homepage .landing-page-tiles > div';
	
		$(tileSelector).mouseenter(function () {
			$(this).children('a').addClass('hover-override');
		});
	
	
		$(tileSelector).mouseleave(function () {
			$(this).children('a').removeClass('hover-override');
		});
	
		$(tileSelector).click(function () {
			window.location = $(this).children('a').last().attr('href');
		});
	
		$(tileSelector + ' > a').mouseenter(function () {
			$(this).parent().addClass('hover-override');
		});
	
	
		$(tileSelector + ' > a').mouseleave(function () {
			$(this).parent().removeClass('hover-override');
		});
	
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());

/***/ },
/* 88 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(90)
	]);

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	!/* require */(/* limit */[
	    __webpack_require__(91)
	]);

/***/ },
/* 91 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);