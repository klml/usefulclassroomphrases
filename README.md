# useful class-room phrases

useful css class-room phrases is a small selection for css classes used inside content areas.
Some self-explanatory and self-describable classes writing and understand your source.
Instead of writing ```style="float:right;margin:0 5px 0 5px;"``` every time.

Its only useful for **not-general elements**, not general templating.

Its a little bit against sense of CSS, but not so much against it than others;)

Just copy these classes to your css and remove what you don't want

Do you have improvements, just write me or pullrequest.
This version is english, like css. But I think of language translations.

[demo](http://klml.github.com/usefulclassroomphrases/)

## special

* **ul**: has no list-style but a bullet image
* **panel**: is for middled fixed width websites
* **row2**: to have a not html-tabled 2-column table with an definiton list. This class is above the dl if you use not changable markup like markdown etc
* **depot**: parking depot for htmlsnippets moved and used by JS like 'thank you' messages. On load these are not displayed, but appear with some JS interaction

### not useful

**Not** class-room phrases are if you put paddings and margins.....?

## overwrite

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
Is an set if base64 icons. Please dont use the whole list, but just copy&paste single icons. [demo](http://klml.github.com/usefulclassroomphrases/payload.html)

## additional

Please dont use this files directly, just copy and paste what you need. Most classes are written very simple ('right' instead of 'usr_right') for easier use.

* always use [Eric Meyer reset-css](http://meyerweb.com/eric/tools/css/reset/)
* for icons you also could use [Font-Awesome](http://fortawesome.github.com/Font-Awesome/) and of course [sprites](http://en.wikipedia.org/wiki/Sprite_%28computer_graphics%29#Sprites_by_CSS).
* and please use [minify](http://code.google.com/p/minify/) 

and many other [performance rules](http://developer.yahoo.com/performance/rules.html/)

## licence

There is no threshold of originality of this stuff, if not aeverything is under Public Domain.

This means you can copy, modify, use it, resell it, even without naming this source (but it would be usful;)
