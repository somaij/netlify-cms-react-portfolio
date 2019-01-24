---
title: How to do floating labels for CF7
status: Published
date: '2019-01-24'
excerpt: >-
  If you have a large Contact Form 7 form, this is a great way to unclutter your
  page.
categories:
  - category: WordPress
---
Everybody knows why floating labels are great, right? But here's a refresher link from CSS Tricks:

https://css-tricks.com/float-labels-css/

## What's the issue, tissue?

One day, I decided to try out this new shiny floating label thing on Contact Form 7. I went into inspect mode, and found out when the form renders, it wraps every input in a span element. Furthermore, with the class "wpcf7-form-control-wrap", regardless of what kind of input it is. 

For example:

```
<div class="text-wrapper"><label for="first_name">First Name</label>[text fname id:first_name]</div>
```

renders as:

```
<div class="text-wrapper">
```

```
<label for="first_name">First Name</label>
```

```
<span class="wpcf7-form-control-wrap fname">
```

```
<input type="text" name="fname" value="" size="40" class="wpcf7-form-control wpcf7-text" id="first_name" aria-invalid="false">
```

```
</span>
```

```
</div>
```

"So what? It's just an extra span element" I thought. I could still select it with:

```
.wpcf7 .text-wrapper input:focus
```

But, I soon found out it throws a wrench into using the adjacent sibling selector:

```
input:focus + label
```

 because you can't combine parent selectors with sibling selectors.

## jQuery to the rescue!

Using Google-Fu, I came up with an easy solution. Since in JQuery you can do a parent's sibling selection, all I did was apply the class "move" to the label if the input's value is greater than 0, and it updates on input focus.

```
jQuery(document).ready(function($) { //no conflict
```

```
$("input, textarea").each(function() {
```

```
        if ($(this).val().length != 0) { //In case there is a preloaded value
```

```
            $(this).parent().siblings("label").addClass("move");
```

```
        } else {
```

```
            $(this).parent().siblings("label").removeClass("move");
```

```
        }
```

```
    });
```

```
    $("input, textarea").focus(function() { //On focus move the label
```

```
        $(this).parent().siblings("label").addClass("move");
```

```
    });
```

```
    $("input, textarea").focusout(function() { //On focusout check if there is any value, else remove the move class.
```

```
        if ($(this).val().length == 0) {
```

```
            $(this).parent().siblings("label").removeClass("move");
```

```
        }
```

```
    });
```

```
});
```

Add a little bit of CSS and you're all set:

```
.wpcf7 .element-wrapper > label{
```

```
position: absolute;
```

```
top: 1rem;
```

```
left: 30px;
```

```
transition: all .1s ease-in-out;
```

```
z-index: 1;
```

```
}
```

```
.wpcf7 .element-wrapper > label.move{
```

```
opacity: .4;
```

```
font-size: 10px;
```

```
top: 10px;
```

```
left: 30px;
```

```
}
```

Now you'll have some great form UX that will be sure to please the eye!

Need some more help? [Shoot me an email](https://jasonsomai.com/contact/) and I'll help you in anyway possible.
