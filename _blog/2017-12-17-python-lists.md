---
title: "Python Lists"
excerpt: "Python list and their methods"
layout: single
permalink: /blog/python-lists/
comments: true
tags:
    - python
    - ds
---

# Python Lists

A list is a collection of objects. A list can be combination objects of any datatype like strings, integers,floats etc..

Lists are created by using `[ ]` brackets.

### Examples
``` python
# List of strings
>>> list_1 = ['Sun','Moon','Earth']
>>> print (list_1)
['Sun', 'Moon', 'Earth']
```
```python
# List of strings, integers and floats
>>> list_2 = ['Sun','Moon','Earth',2, 4, 5, 3.14, 4.5666]
>>> print (list_2)
['Sun', 'Moon', 'Earth', 2, 4, 5, 3.14, 4.5666]
```
---
## List methods

- `append` - Adds a new element to the end of the list.

    **Example**
    ```python
    >>> list_3 = ['Burger','Pizza','Hot Dog']
    >>> list_3.append('Sushi') # New element
    >>> print (list_3)
    ['Burger', 'Pizza', 'Hot Dog', 'Sushi'] # Appended to the end of list
    ```

- `insert` - Adds a new element in a given position.

    **Example**
    ```python
    >>> list_4 = ['Burger','Pizza','Hot Dog']
    # insert methods takes two arguments,one is position and the other one is element
    >>> list_4.insert(1,'Sushi') # position = 1, element = Sushi
    >>> print (list_4)
    ['Burger', 'Sushi', 'Pizza', 'Hot Dog'] # Sushi inserted at index position 1
    ```

- `extend` - Appends elements of a list to the end of another list.

    **Example**
    ```python
    >>> list_5 = ['Burger', 'Sushi', 'Pizza', 'Hot Dog']
    >>> list_6 = ['Panner','Chole']
    >>> list_5.extend(list_6)
    >>> print (list_5)
    ['Burger', 'Sushi', 'Pizza', 'Hot Dog', 'Panner', 'Chole']
    ```
    **Note**:
    If we would have used `insert` or `append` method to append a list to another list, it would consider the list as one object as shown below.
    ```python
    >>> list_5 = ['Burger', 'Sushi', 'Pizza', 'Hot Dog']
    >>> list_5.append(list_6)
    >>> print (list_5)
    ['Burger', 'Sushi', 'Pizza', 'Hot Dog', ['Panner', 'Chole']]
    # Printing last element of list returned a list
    >>> print (list_5[-1])
    ['Panner', 'Chole']
    # Printing last but one element of a list returned an element 
    >>> print (list_5[-2])
    Hot Dog
    ```
- `remove` - Removes the given element from a list

    **Example**
    ```python
    >>> list_5 = ['Burger', 'Sushi', 'Pizza', 'Hot Dog']
    >>> list_5.remove('Sushi')
    >>> print (list_5)
    ['Burger', 'Pizza', 'Hot Dog']
    ```


- `pop` - Removes the last element from a list and returns the removed element.

    **Example**
    ```python
    >>> list_5 = ['Burger', 'Sushi', 'Pizza', 'Hot Dog']
    >>> list_5.pop() 
    'Hot Dog' # Removed the last element
    >>> print (list_5)
    ['Burger', 'Sushi', 'Pizza'] # Returned list without 'Hot Dog'
    ```
- `reverse` - Reverses the order of given list

    **Example**
    ```python
    >>> list_5 = ['Burger', 'Sushi', 'Pizza', 'Hot Dog']
    >>> list_5.reverse()
    >>> print (list_5)
    ['Hot Dog', 'Pizza', 'Sushi', 'Burger']
    ```

- `index` - Returns the index value of an item in the list.

    **Example**
    ```python
    >>> list_5 = ['Burger', 'Sushi', 'Pizza', 'Hot Dog']
    >>> list_5.index('Pizza')
    2 # Index value of 'Pizza'
    ```


- `sort` - Sorts the list both alphabetically and numerically. By default it sorts in ascending order.

    **Example**
    ```python
    >>> list_5 = ['Burger', 'Sushi', 'Pizza', 'Hot Dog']
    >>> list_5.sort()
    >>> print (list_5)
    ['Burger', 'Hot Dog', 'Pizza', 'Sushi']
    ```
    ```python
    >>> list_6 = [135,45,673,324,124]
    >>> list_6.sort()
    >>> print (list_6)
    [45, 124, 135, 324, 673]
    ```

    To print a list in descending order,you can pass an argument value `reverse=True`. It can be applied to both alphabets and numbers.

    **Example**
    ```python
    >>> list_6 = [135,45,673,324,124]
    >>> list_6.sort(reverse=True) 
    >>> print (list_6)
    [673, 324, 135, 124, 45] # Descending order list
    ```
---

## List functions

- `min()` - Returns the minimum value of the list.

- `max()` - Returns the maximum value of the list.

- `sum()` - Returns the summation of all the elements in the list.

- `len()` - Returns the number of elements in the list.

- `list()` - Converts any iterable like set,tuple,dictionary into a list.

- `sorted()` - Returns a new list with sorting.

     **Example**
    ```python
    >>> list_6 = [135,45,673,324,124]
    >>> list_7 = sorted(list_6) # Sorted function
    >>> print (list_6)
    [135, 45, 673, 324, 124]
    >>> print (list_7)
    [45, 124, 135, 324, 673] # Sorted list
    ```

- `enumerate()` - Returns the list along with index.

    **Example**
    ```python
    >>> list_5 = ['Burger', 'Sushi', 'Pizza', 'Hot Dog']
    >>> for index, items in  enumerate(list_5):
    ...     print (index, items)
    0 Burger
    1 Sushi
    2 Pizza
    3 Hot Dog
    ```
---
### Convert list into a string

Use `join` method on the list to convert into a string.

**Example**

```python
>>> list_5 = ['Burger', 'Sushi', 'Pizza', 'Hot Dog']
>>> list_5_str = " - ".join(list_5)
>>> print (list_5_str)
Burger - Sushi - Pizza - Hot Dog
```
### Convert string into a list

Use `split` method on the string to convert into a list.

**Example**
```python
>>> list_5_str = 'Burger - Sushi - Pizza - Hot Dog' 
>>> new_list = list_5_str.split(" - ")
>>> print (new_list)
['Burger', 'Sushi', 'Pizza', 'Hot Dog']
```
