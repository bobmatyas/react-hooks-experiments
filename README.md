

## useEffect

useEffect is basically a function that happens after a render. When a render happens, we can access the current state values within component and use them to do something else. When a re-render happens, the cycle starts again with new values, renders, and effects.

### Dependency Array

useEffect can use an array afterwards to control when it fires. An empty array runs it only once and a value will run it when it changes. You can also have multiple values. 

Spillting functions into multiple useEffect calls is typically a good idea.

## useMemo

useMemo invokes a fuunction to calculate a memoized value. It compares the cached value of function against itself to see if it has actually changed. 

## useCallback

Used like useMemo, it memoizes functions instead of values.

## useLayoutEffect

Called at a specific moment in the render cycle:

1. Render
2. useLayoutEffect called
3. Browser paint
4. useEffect called

In most cases, useEffect is the proper hook to use, but you may want to use useLayoutEffect if your effect is essential to the paint. For example, if you need width and height of an element when window resized. Another example would be tracking mouse position.

## General Hooks Rules

#### Hooks only run in the scope of a compnent. 

#### Seperate functionality into multiple hooks

Hooks should be kept small. They are also invoked in the same order every time.

#### Hooks should only be called at the top level

Make calls to hooks before the return. Don't use them in conditional statements, loops, or functions.

Nest if statements within the hook.

Hoooks such as useEffect need to take a function as the first item and cannot have a promise. Use an empty function and then async calls if needed.

## useReducer

A reducer function takes the current state and returns a new state. If it is false, it returns the opposite, true. It will always produce the same results.