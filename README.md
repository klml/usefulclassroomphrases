# useful class-room phrases

useful css class-room phrases is a small selection for css classes used inside content areas.
Some simple worded, self-explanatory and self-describable classes writing and understand your source.
Instead of writing ```style="float:right;margin:0 5px 0 5px;"``` every time.

Most front end frameworks have similar elements, like [foundation utility-classes](https://foundation.zurb.com/sites/docs/v/5.5.3/utility-classes.html) or [HTML KickStart extras](http://www.99lime.com/elements/#extras).


[demo](https://klml.github.io/usefulclassroomphrases/)

## ucp.css

Most classes in [ucp.css](ucp.css) are selfdescribing (e.g. clear, left, none). Special are:

* **lead**: blogs, news, most pages have [Lead paragraph](http://en.wikipedia.org/wiki/Lead_paragraph)
* **thx**, **alerta**, **notice**: small warning notices. Style this for sour needs. For additional function like close 'x' use [Kickstrap alerts](http://ajkochanowicz.github.com/Kickstrap/javascript.html#alerts)
* **depot**: parking depot for htmlsnippets moved and used by JS like 'thank you' messages. On load these are not displayed, but appear with some JS interaction
* **row2**: to have a not html-tabled 2-column table to markup semantic pairs, using a [definition Lists](https://www.w3.org/MarkUp/html3/deflists.html). This classes must be around the dl.

```css
   <link rel="stylesheet" type="text/css" href="//cdn.rawgit.com/klml/usefulclassroomphrases/master/ucp.css">
```

## example.local.css

[example.local.css](example.local.css) is a example for local.css with common used classes you have to customze (link color)

* ```.main``` is the _main_ content area, it should have another background-color than the whole body and you _can_ this combine with ```.panel``` .
* ```.panel``` (alias ```#panel```, ```#wrapper``` or ```.wrapper```): centered content. Set this declaration direct in your body tag, or if you want  elements over the whole page width(like [panorama images](https://klml.github.io/usefulclassroomphrases/#panoramabackground)), in any wrapper elements.
  * ```paneloutbreak``` allows elements in panels to burst out.
* ```ul```: has no list-style but a bullet image


Colors, sizes and contrasts inspired by [bettermotherfuckingwebsite.com](http://bettermotherfuckingwebsite.com).


## icons

* selection for css-icons for hyperlinks with Data URI (base64): payload demo
