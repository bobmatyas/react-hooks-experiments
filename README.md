

## useEffect

useEffect is basically a function that happens after a render. When a render happens, we can access the current state values within component and use them to do something else. When a re-render happens, the cycle starts again with new values, renders, and effects.

### Dependency Array

useEffect can use an array afterwards to control when it fires. An empty array runs it only once and a value will run it when it changes. You can also have multiple values. 

Spillting functions into multiple useEffect calls is typically a good idea.