---
title: "Regular Expressions Descriptions"
layout: single
permalink: /blog/regex-descriptions/
comments: true
tags:
    - regex
    - nlp
---

## Identifiers

S No | Identifier | Description | 
:---------:|:---------:|:----------:|
1| .  | Any character | 
2| \d | All digits  0 to 9 |
3| \D | All characters except digits| 
4| \w | All word characters | 
5| \W | All characters except word characters |
6| \s | Whitespaces (spaces, tabs, new lines) |
7| \S | All characters except whitespaces | 


## Quantifiers

S No|Quantifiers | Description | 
:---------:|:---------:|:----------:|
 1 | ? | 0 or 1 occurrence of a pattern 
 2 | * | 0 or more occurrence of a pattern
 3 | + | 1 or more occurrence of a pattern
 4 | {n}| Exact number of occurrences of a pattern
 5 | {min,max} | Min and Max number of occurrences of a pattern


## Boundaries

S No| Boundaries | Description | 
:---------:|:---------:|:----------:|
 1 | \b | Word Boundary
 2 | \B | Not a word boundary
 3 |  ^ | Beginning of a string
 4 | $  | End of a string


## Matchings

S No| Matching | Description | 
:--:|:---------:|:----------:|
1   |    [ ]    | Denotes the character class
2   |    \|    | Matches either of the character patterns
3   |    ( )    | Matches the grouping
4   |    [^ ]   | Matches Characters NOT in brackets

[For more clarification between `( )` and `[ ]` in matchings, please check this stackoverflow answer.](https://stackoverflow.com/a/3789451)

### Resources:

*  [This is an excellent tutorial for the folks who want to understand more about regular expressions](https://www.youtube.com/watch?v=sa-TUpSx1JA)

