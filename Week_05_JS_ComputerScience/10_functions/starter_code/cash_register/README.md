# Cash Register

In this assignment, you will be creating a "cash register", or a tally of numbers. It should be similar to a receipt you might get from a store.

## Goals

* When the <code>form</code> is submitted:
  * The <code>form</code> should not be submitted
  * A new entry should be added to the <code>tbody</code> element
  * The bottom row with the <b>Total</b> should update accordingly
* The new entry needs to be converted from a string to a number. The number needs to be limited to two demical places.

## jQuery Methods

### .ready()

The <code>ready()</code> method fires once "something" has loaded. You will want to ensure the <code>document</code> has loaded before executing your JavaScript.

https://api.jquery.com/ready/

```javascript
$(document).ready(function() {
	// your code here
});
```

### .val()

The <code>val()</code> method can retrieve the value of an element. It can return the HTML value inside a tag, or the value inside an input field. In this case, we want to get the value of the input field where the user can add a new line item to the receipt.

https://api.jquery.com/val/

```javascript
var entry = $('selector').val();
```

The <code>val()</code> method can also set the value of an element. In our use case, we need to set the input field back to empty.

```javascript
$('selector').val('');
```

### .append()

The <code>append()</code> method will append what is passed to it to the end of the element. For example, you can append a new row to the receipt with this method:

https://api.jquery.com/append/

```javascript
$('selector').append('<tr><td></td><td>' + newEntry + '</td></tr>');
```

### .html()

The <code>html()</code> method will replace whatever content is in an element. For example, you can update the total of our receipt with this method:

https://api.jquery.com/html/

```javascript
$('selector').html(total);
```

Hint: You need to make sure the total is [formatted correctly](#currency-formatter).

### .submit()

The <code>submit()</code> method will be fired whenever the "submit" event is fired. We will want to bind this event to the <code>form</code> element. The <code>submit()</code> method is also passed the <code>event</code> object. You will need to call the <code>preventDefault()</code> method on the <code>event</code> object to make sure the page doesn't refresh when the <code>form</code> is submitted.

https://api.jquery.com/submit/

```javascript
$('selector').submit(function(event) {
	event.preventDefault();
});
```

## Currency Formatter

You will want to encapsulate your logic to format the currenct in one function.

### String to Number

There are two methods to convert a string to a number: <code>parseInt()</code> and <code>parseFloat()</code>. <code>parseInt()</code> will parse a string to a whole integer (i.e. <code>"3.14"</code> will be converted to <code>3</code>). <code>parseFloat()</code> converts a string to a float, or a number with decimal places (i.e. <code>"3.14"</code> will be converted to <code>3.14</code>). We want to use the latter method to preserve the decimals.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

```javascript
var currency = parseFloat(newEntry);
```

### Fixed-Point Notation

The <code>toFixed([digits])</code> will format a number to a fixed-point notation. For example, if you want to goto the hundredths place, you would use <code>toFixed(2)</code>.

```javascript
var numObj = 12345.6789;

numObj.toFixed();       // Returns '12346': note rounding, no fractional part
numObj.toFixed(1);      // Returns '12345.7': note rounding
numObj.toFixed(6);      // Returns '12345.678900': note added zeros
```

Hint: You want to format your currency to the hundredths place.

### Currency Indicator

You will want to preprend the currency with the <code>$</code> sign to indicate the number is in USD. For this, you can use string concatenation.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

```javascript
var formattedCurrency = '$' + currency;
```