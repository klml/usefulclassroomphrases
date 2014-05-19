# useful class-room phrases

useful css class-room phrases is a small selection for css and jQuery classes used inside content areas.
Some simple worded, self-explanatory and self-describable classes writing and understand your source.
Instead of writing ```style="float:right;margin:0 5px 0 5px;"``` every time.

Its only useful for **not-general elements**, its no useful for general templating.
So its a little bit against sense of CSS, but not so much against it than others;)

Just copy these classes to your css and remove what you don't want

Please dont use this files directly, just copy and paste what you need. 

Do you have improvements, just write me or send pullrequest.

[demo](http://klml.github.com/usefulclassroomphrases/)

## ucp.css

Most classes in [ucp.css](ucp.css) are selfdescribing (e.g. clear, left, none). Special are:

* **lead**: blogs, news, most pages have [Lead paragraph](http://en.wikipedia.org/wiki/Lead_paragraph)
* **thx**, **alerta**, **notice**: small warning notices. Style this for sour needs. For additional function like close 'x' use [Kickstrap alerts](http://ajkochanowicz.github.com/Kickstrap/javascript.html#alerts)
* **depot**: parking depot for htmlsnippets moved and used by JS like 'thank you' messages. On load these are not displayed, but appear with some JS interaction
* **row2**: to have a not html-tabled 2-column table with an definiton list. This class is above the dl if you use not changable markup like markdown etc

```css
   <link rel="stylesheet" type="text/css" href="usefulclassroomphrases/ucp.css">
```

## example.local.css
[example.local.css](example.local.css) is a example for local.css with common used classes you have to customze (link color)

* **ul**: has no list-style but a bullet image
* **panel**: is for middled fixed width websites
* **half**: for infoboxes etc be careful with borders, padding and margins. Only if you use no grid like [kickstrap](http://ajkochanowicz.github.com/Kickstrap/) or [Skeleton](http://www.getskeleton.com/).


## icons

* selection for css-icons for hyperlinks with Data URI (base64): payload demo
* selection of [weloveiconfonts.com](http://weloveiconfonts.com/) for hyperlinks: [weloveiconfonts-hyperlinks](http://klml.github.io/usefulclassroomphrases/#weloveiconfonts)

```css
   <link rel="stylesheet" type="text/css" href="usefulclassroomphrases/weloveiconfonts-hyperlinks.css">
```

## additional

* always use [CSS-Mini-Reset](https://github.com/vladocar/CSS-Mini-Reset) or [Eric Meyer reset-css](http://meyerweb.com/eric/tools/css/reset/)
* and please use [minify](http://code.google.com/p/minify/) 

and many other [performance rules](http://developer.yahoo.com/performance/rules.html/)

## licence

There is no threshold of originality of this stuff, so everything is under Public Domain.

This means you can copy, modify, use it, sell it, even without naming this source (but it would be useful;)
