---
title: "Python Strings"
excerpt: "Python strings and their methods"
layout: single
permalink: /blog/python-strings/
comments: true
tags:
    - python
    - ds
---
# Strings in Python

We use string as one of the most common source of input data to give messages or to write messages. 

Learning about strings and their methods will surely go a long way when ever you want to process some textual data for NLP before performing any analysis on it.

### What is a string?

```python
# String can be given in single or double quotes
>>> String = 'I am a string' 
>>> print (String)
I am a string
```

All the characters of strings can be accessed via their index. Here is an example.

```python
>>> String = 'Hello World'
>>> print (len(String))
11
>>> print (String[0:3])
Hel
```
An important thing to remember is the index starts from zero. And the first index is included and the last index is not included.

If we see the above example, the index of `Hello World` we printed the `len(String)` , it gives out string length as `11`. The `len` function counts whitespace also as a character.

To write a longer string we can use ```'''``` .
#### Example
```python
>>> String = ''' This is line one
...              This is line two
...              This is line three '''
>>> print (String)
 This is line one
 This is line two
 This is line three
```


## String Methods
- ```str.count``` \- Counts the number of characters in the given string.

- ```str.find``` \- Finds the given substring in the string.

- ```str.join``` \- Concatenates two strings.

## Resources
- To find more about string methods. [Check this official documentation](https://docs.python.org/3/library/stdtypes.html#string-methods)

- [This is an YouTube tutorial regarding strings in python](https://www.youtube.com/watch?v=k9TUPpGqYTo)



