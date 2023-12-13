# lecture 1 - BPN

## terms
- Facts of a **browser**
    - it can be a known as a mini operating system

## DOM - Document Object Model
- **document** is usually the html document rendered by browser ( i.e html)
- **object** is usually the object abstracting the document (i.e its a node)
- **model** the structure used to navigate through the document ( ie. generic tree)

### document.querySelectorAll(_CSS selector_) vs methods like document.getElementsByClassName(_className_), getElementsByTagName(_tagName_)... 
-  document.querySelectorAll returns a _NodeList_
- document.getElementsBy.. return an HTMLCollection

### HTMLCollections vs NodeList
- Nodelist is static, while HTMLCollections are live
- this means that Nodelist will not be updated if a changes are made at run time. 


```javascript
  let nl = document.querySelectorAll("p");
    let hc= document.getElementsByTagName("p");
    //lets say that the amount of p tags is  5
    console.log("before nl",nl.length); //before nl 5
    console.log("before hc",hc.length); //before hc 5
    document.body.appendChild(document.createElement("p"));
    console.log("after nl",nl.length); //after nl 5
    console.log("after hc",hc.length); //after hc 6
```

### Array.from(...)
you can convert an a _NodeList_ or an _HTMLCollection_ into an array by doing Array.from
```js
 const arr = Array.from(/*nodelist or HTMLCollection*/)
```

### InnerText vs InnerContent

- InnerText will only show what is visible
- InnerContent will show all content
- InnerContent is readonly.. I think 