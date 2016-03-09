function tag (name) {
    return function () {
        var openTag = '<' + name + '>';
        var closeTag = '</' + name + '>';
        var args = [].slice.call(arguments);
        if (args.length === 0) {
            return openTag + closeTag;
        } else {
            if (Array.isArray(args[0])) {
                for (var i = 0; i < args[0].length; i++) {
                    var attribute = args[0][i];
                    if (attribute.indexOf('=') === -1 && attribute.indexOf('#') === 0) {
                        args[0][i] = 'id="' + attribute.substr(1, attribute.length) + '"';
                    } else if (attribute.indexOf('=') === -1 && attribute.indexOf('.') === 0) {
                        args[0][i] = 'class="' + attribute.substr(1, attribute.length) + '"';
                    }
                }
                openTag = '<' + name + ' ' + args[0].join(' ') + '>';
                args.shift();
            }

            return openTag + '\n' + args.join('\n') + '\n' + closeTag;
        }
    };
}

var html = tag('html');
var head = tag('head');
var title = tag('title');
var style = tag('style');
var body = tag('body');
var h1 = tag('h1');
var h2 = tag('h2');
var h3 = tag('h3');
var h4 = tag('h4');
var h5 = tag('h5');
var h6 = tag('h6');
var div = tag('div');
var span = tag('span');
var p = tag('p');
var li = tag('ul');
var ul = tag('li');
var a = tag('a');
var link = function (href) {
    return '<link rel="stylesheet" type="text/css" href="' + href + '">';
};
var rule = function (selector, props) {
    return selector + ' {\n' + props.join('\n') + '\n}';
};
var meta = function (args) {
    if (Array.isArray(args)) {
        return '<meta ' + args.join(' ') + '>';
    } else {
        return '<meta ' + args + '>';
    }
};

module.exports = {
    tag: tag,
    html: html,
    head: head,
    meta: meta,
    title: title,
    style: style,
    body: body,
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    h6: h6,
    div: div,
    span: span,
    p: p,
    li: li,
    ul: ul,
    a: a
};