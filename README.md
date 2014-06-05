typedText
=========

jQuery plugin creates typed text effect.

Usage
===

To use typedText you just need to have **jQuery** (>= 1.5.x) and **typedText** loaded in your page:

```html
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="jquery.typedtext.js"></script>
```

And call the function on your html element to transform it in a typed text

```javascript
$('div.text').typedText();
```

Options
===

typedText accepts an option like that:

```javascript
$('div.text').typedText({
  delay: 200
  });
```
#### **Delay**
integer (default: 500)

```javascript
delay: 100
```
