# useful class-room phrases

useful css class-room phrases is a small selection for css and jQuery classes used inside content areas.
Some simple worded, self-explanatory and self-describable classes writing and understand your source.
Instead of writing ```style="float:right;margin:0 5px 0 5px;"``` every time.

Its only useful for **not-general elements**, its no useful for general templating.
So its a little bit against sense of CSS, but not so much against it than others;)

Just copy these classes to your css and remove what you don't want

Please dont use this files directly, just copy and paste what you need. 

Most classes are written very 

Do you have improvements, just write me or pullrequest.
This version is english, like css. But I think of language translations.

[demo](http://klml.github.com/usefulclassroomphrases/)

## special css

* **ul**: has no list-style but a bullet image
* **panel**: is for middled fixed width websites
* **lead**: blogs, news, most pages have [Lead paragraph](http://en.wikipedia.org/wiki/Lead_paragraph)
* **half**: for infoboxes etc be careful with borders, padding and margins.
* **thx**, **alerta**, **notice**: small warning notices. Style this for sour needs. For additional function like close 'x' use [Kickstrap alerts](http://ajkochanowicz.github.com/Kickstrap/javascript.html#alerts)
* **row2**: to have a not html-tabled 2-column table with an definiton list. This class is above the dl if you use not changable markup like markdown etc
* **depot**: parking depot for htmlsnippets moved and used by JS like 'thank you' messages. On load these are not displayed, but appear with some JS interaction

### not useful

**Not** class-room phrases are if you put paddings and margins.....?

### overwrite

I think its ok to change this few values and not to overwrite them. But you could *mark* changed parts with break in new lines

Original
``` css
img.left { float:left;margin:0 5px 5px 0;}
```

Changed
``` css
img.left { float:left;
margin:0 11px 11px 0;
}
```

## payload

* selection for css-icons for hyperlinks with <a href="http://en.wikipedia.org/wiki/Data_URI_scheme">Data URI</a> (base64): [payload demo](http://klml.github.com/usefulclassroomphrases/payload.html)
* selection of [weloveiconfonts.com](http://weloveiconfonts.com/) for hyperlinks: [weloveiconfonts-hyperlinks demo](http://klml.github.com/usefulclassroomphrases/weloveiconfonts-hyperlinks.html)

And use [sprites](http://en.wikipedia.org/wiki/Sprite_%28computer_graphics%29#Sprites_by_CSS).

## jquery

hashtagger and hashspliter use the href hashtag to display areas or allocate a html-GET-like string to values. they wont work togehter


## additional

* always use [CSS-Mini-Reset](https://github.com/vladocar/CSS-Mini-Reset) or [Eric Meyer reset-css](http://meyerweb.com/eric/tools/css/reset/)
* [Skeleton](http://www.getskeleton.com/) is also a lightwight CSS and html framework (simple than boot or [kickstrap](http://ajkochanowicz.github.com/Kickstrap/))

* and please use [minify](http://code.google.com/p/minify/) 

and many other [performance rules](http://developer.yahoo.com/performance/rules.html/)

## licence

There is no threshold of originality of this stuff, if not everything is under Public Domain.

This means you can copy, modify, use it, resell it, even without naming this source (but it would be usful;)
