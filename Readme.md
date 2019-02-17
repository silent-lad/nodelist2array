# What it does

Nodelists are `array like object` and not proper javascript arrays which makes it impossible to use Array functions like reduce(), map(), filter(), sort() etc in them.
This package convert `array like object` to array

It extends to anything which has `.length` property but is not a an Array.

## Benchmark

[https://jsperf.com/nodelist-to-array/27]

## Code and usage

```javascript
document.querySelectorAll('div').map(...) //WON'T WORK!!!

var divSelectorArray = nodelist2array(document.querySelectorAll('div'))
divSelectorArray.map(...); //It will work properly
```

## Instalation

    npm install nodelist2array
