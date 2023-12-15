# lecture 2 - BPN

## terms

## good practice

- it's good practice to use **const** when defining variables to avoid bugs
- it's good _use strict_

## node.addEventListener fn

- the name of the event [string]
  - the events here are usually existing events in WebAPIs used in the browser, but you can make your own as well. 
- the callback function 
- settings object (which is optional)
  - the settings object useful for attribtues like _once_ which will make sure that the even runs once

## node.removeEventListener fn

- works when you have used the addEvent listener function
- works when your function has a name so we can do this: node.removeEventListener("eventName",fnName)

## famous events

- click = mousedown + mouseup
  - in such events the even object has the x and y coordinates  ( ie ClientX/ClientY)

## Event bubbling

- It's when inner event inherit the events of their ancestors

```html
  <div id="ancestor">
        
    <div id="parent">
        
        <div id="child">
             <!-- an event in me will trigger the same event in div# parent and div#ancestor -->
        </div>
    </div>
  </div>
```

- It's bad practice to stop propagation of events but its done with the stopPropagation() method of event. 
- I believe that stopImmediatePropagation() stops any parent handlers but stopPropagation stops the ancestor

### e.target vs e.curentTarget

e.target is the source element that started the event.  e.currentTarget is where the event has been propagated to. 

### event delegation

it's a pattern when you use one prevent listener and only assign it to parent eleements to avoid having multiple event listeners. 
