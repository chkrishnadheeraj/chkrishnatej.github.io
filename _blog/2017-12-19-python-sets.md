---
title: "Python Sets"
excerpt: "Python sets and their methods"
layout: single
permalink: /blog/python-sets/
comments: true
tags:
    - python
    - ds
---
# Python Sets

Sets are unordered collection of objects. They don't take duplicate values. Sets are mostly used to check if a value is present in the set.

The elements of set are fit into `{ }` brackets.

To create an empty set:

```python
>>> empty_set = set()
>>> type(empty_set)
<class 'set'>
```
**Note**:
    If you are trying to create an empty set using `{ }` like we do for lists and tuples, a dictionary will be created.

```python
>>> empty_set = { }
>>> type (empty_set)
<class 'dict'>
```
**Example**
```python
planet_set = {'Mars','Earth','Venus','Mercury'}
print(planet_set)

# Output
{'Venus', 'Earth', 'Mercury', 'Mars'} # First time
{'Mars', 'Earth', 'Mercury', 'Venus'} # Second time
{'Venus', 'Mercury', 'Mars', 'Earth'} # Third time
```
In the above example, we can see why set is called as unordered. Every time we executed and printed the results, the order is changed.

---
### To check if a value is present in a set

Use `in` operator to check if a given value is present in set.

**Example**
```python
>>> planet_set = {'Mars','Earth','Venus','Mercury'}
>>> print ('Mars' in planet_set)
True
>>> print ('Jupiter' in planet_set)
False
```
---

### To find out the common elements between two sets

Use `intersection` to find out the common elements between two sets.

**Example**
```python
>>> planet_set = {'Mars','Earth','Venus','Mercury'}
>>> celestial_bodies = {'Stars', 'Black Holes', 'Earth', 'Venus', 'Sun'}
>>> print (planet_set.intersection(celestial_bodies))
{'Venus', 'Earth'}
```
 ---

### To combine two sets 

Use `union` to combine two sets

**Example**
```python
>>> planet_set = {'Mars','Earth','Venus','Mercury'}
>>> celestial_bodies = {'Stars', 'Black Holes', 'Earth', 'Venus', 'Sun'}
>>> print (planet_set.union(celestial_bodies))
{'Venus', 'Mercury', 'Mars', 'Stars', 'Sun', 'Black Holes', 'Earth'}
```
---
### To find the difference between two datasets

Use `difference` to find the difference between two sets.

**Examples**
```python
>>> planet_set = {'Mars','Earth','Venus','Mercury'}
>>> celestial_bodies = {'Stars', 'Black Holes', 'Earth', 'Venus', 'Sun'}
>>> print (planet_set.difference(celestial_bodies))
{'Mercury', 'Mars'}
```
---
