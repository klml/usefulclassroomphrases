# useful class-room phrases

useful css class-room phrases is a small selection for css classes used inside content areas.
Some simple worded, self-explanatory and self-describable classes writing and understand your source.
Instead of writing ```style="float:right;margin:0 5px 0 5px;"``` every time.

Most front end frameworks have similar elements, like [foundation utility-classes](https://foundation.zurb.com/sites/docs/v/5.5.3/utility-classes.html) or [HTML KickStart extras](http://www.99lime.com/elements/#extras).


[demo](https://klml.github.io/usefulclassroomphrases/)

## ucp.css

Most classes in [ucp.css](ucp.css) are selfdescribing (e.g. clear, left, none).

Only **row2** is special:
to have a not html-tabled 2-column table to markup semantic pairs, using a [definition Lists](https://www.w3.org/MarkUp/html3/deflists.html). This classes must be around the dl.

```css
   <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/klml/usefulclassroomphrases@master/ucp.css">
```

## example.local.css

[example.local.css](example.local.css) is a example for local.css with common used classes you have to customze (link color)

* ```.main``` is the _main_ content area, it should have another background-color than the whole body and you _can_ this combine with ```.panel``` .
* ```.panel```: centered content. Set this declaration direct in your body tag, or if you want  elements over the whole page width(like [panorama images](https://klml.github.io/usefulclassroomphrases/#panoramabackground)), in any wrapper elements.
  * ```paneloutbreak``` allows elements in panels to burst out.
* ```ul```: has no list-style but a bullet image
* ```a```: there are diffrent kinds of hyperlinks:
  * ```a```: used on _site-internal_ links (```/impressum```)
  * ```a:visited```: [Browsers limits the styles that can be set for a:visited links to all kind of colors, due to security issues.](https://www.w3schools.com/cssref/sel_visited.asp). This example uses ```color: inherit;``` to reduce the accentuation and newness for already visited links
  * ```a:hover```: hover
  * ```a:active```: and class ```a.active```, useful to identify links to current pages (menus, sidebars etc)
  * ```a[href^="#"]```: for anchor-links staying on the current page (```#footer```)
  * ```a[href^="//"]``` and ```a[href^="http"]```: for site external links (```https://example.com```)
* **lead**: blogs, news, most pages have [Lead paragraph](http://en.wikipedia.org/wiki/Lead_paragraph)

Colors, sizes and contrasts inspired by [bettermotherfuckingwebsite.com](http://bettermotherfuckingwebsite.com).


## icons

* selection for css-icons for hyperlinks with Data URI (base64): payload demo
