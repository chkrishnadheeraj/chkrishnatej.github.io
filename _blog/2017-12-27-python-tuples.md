---
title: "Python tuples"
excerpt: "Python tuples and their methods"
layout: single
permalink: /blog/python-tuples/
comments: true
tags:
    - python
    - ds
---
# Python Tuples

Tuples are collection of immutable objects. Immutable mean once they are created cannot be modified. Tuples can be iterated through loops.

Tuples are created using `( )` parentheses. 

 **Example**
 ```python
>>> planet_tuple = ('Earth', 'Mars', 'Venus')
>>> print (planet_tuple)
('Earth', 'Mars', 'Venus')
 ```

---
## Accessing tuple elements

Tuples can be accessed via their indices like in list.

**Example**
```python
>>> planet_tuple = ('Earth', 'Mars', 'Venus')
>>> planet_tuple[1]
'Mars'
```
---
## How immutability works?

Since tuples are immutable in nature, they don't have methods like lists which are mutable.

If we try to modify the tuple, it will throw an `TypeError`.

**Example**
```python
>>> planet_tuple = ('Earth', 'Mars', 'Venus')
>>> planet_tuple[1] = 'Jupiter'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
```
