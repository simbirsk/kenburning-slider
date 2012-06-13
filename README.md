KenBurning Slider 0.11
======================
A simple Ken Burns effect image slider based on jQuery library.

This plugin is under early development ;)

Usage
=====
Download files or clone this repository.

Include CSS between your `<head></head>` tags, like this:
```
<link rel="stylesheet" href="css/kenburning.css" type="text/css" />
```

Include JS just before `</body>` tag, like this:
```
<script type="text/javascript" src="js/kenburning.js"></script>
```

You should also include jQuery library by downloading it or by linking a CDN. It must be done anywhere before `kenburning.js` is included, like this:
```
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
```

Put your images on any container with the ID `#keyburning` and in-line style for the `height`. By the moment, `<img>` tags should be directly under the container, like this:
```
<div id="keyburning" style="350px">
  <img src="img/pic-001.jpg" alt="" />
  <img src="img/pic-002.jpg" alt="" />
  <img src="img/pic-003.jpg" alt="" />
  <img src="img/pic-004.jpg" alt="" />
</div>
```

TODO
====
We're on early dev! Pull requests are really welcome.
* Get rid of that ugly in-line style.
* ~~Minify JS & CSS.~~
* Preload contents.
* Add support for `div` or `ul` based markup.
* Pass dimensions, zoom and duration via JS function (if desired).
* BUG: apparently random image flashes sometimes...
* Add theme support.
* Improve smoothness on slow animations & overall performance.
* Determine jQuery version requirements.
* Correct README and other texts.
* License the code.

Credits
=======
Sample images were taken from http://www.fotopedia.com under Attribution 2.0 Generic (CC BY 2.0) license.
* "Fire Hose" O Lava by Erik Charlton (http://www.fotopedia.com/items/flickr-3451379907)
* Polar Star by wili_hybrid (http://www.fotopedia.com/items/flickr-3956249209)
* Coast Guard 47' Motor Lifeboat in Morro Bay, CA by mikebaird (http://www.fotopedia.com/items/flickr-2087879492)
* The Atlantic Ocean by milan.boers (http://www.fotopedia.com/items/flickr-3506659147)

Thanks to the authors for their great job!

By the way, Ken Burns is this guy -> http://en.wikipedia.org/wiki/Ken_burns