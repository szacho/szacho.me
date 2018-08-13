---
layout: article
title: Kramdown cheat sheet for Jekyll
date: 2017-07-23 00:42:24 +0200
categories: jekyll
comments: true
math: false
image: false
---
> **kramdown** (sic, not Kramdown or KramDown, just kramdown) is a free MIT-licensed Ruby library for parsing and converting a superset of Markdown. It is completely written in Ruby, supports standard Markdown (with some minor modifications) and various extensions that have been made popular by the PHP Markdown Extra package and Maruku[^1]

## Paragraphs & text modifiers
Any block containing nothing more than lines of text converts into a paragraph.
A blank line separates distinct paragraphs. Two backslashes \\
at the end of a line break its.

The text can *be* _emphasized_ or **made** __bold__ in two ways.
{: .l-no-margin }
~~~
Any block containing nothing more than lines of text converts into a paragraph.
A blank line separates distinct paragraphs. Two backslashes \\
at the end of a line break its.

The text can *be* _emphasized_ or **made** __bold__ in two ways.
~~~

## Headers
~~~
# header h1
## header h2
### header h3
~~~

## Links & images
The most useful approach to create a link in my opinion is by using a reference. First pair of brackets contains
a content and the second the reference, which consists of URL and a title (optional). Images are simply preceded by exclamation mark. \\
[Read more][links] about links.

~~~
[Read more][links] about links and images.
...
[links]: https://kramdown.gettalong.org/quickref.html#links-and-images "Documentation"
~~~

## Blockquotes & footnotes
An example from the top of this post.
{: .l-no-margin }
~~~
> **kramdown** (sic, not Kramdown or KramDown, just kramdown) is a free MIT-licensed Ruby library
for parsing and converting a superset of Markdown. It is completely written in Ruby,
supports standard Markdown (with some minor modifications) and various extensions that
have been made popular by the PHP Markdown Extra package and Maruku[^1]
~~~
And a footnote reference (with link):
{: .l-no-margin }
~~~
[^1]: [https://kramdown.gettalong.org](http://kramdown.gettalong.org)
~~~

## Code
~~~ ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
~~~
~~~~
~~~ ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT
~~~
~~~~

[^1]: [https://kramdown.gettalong.org](http://kramdown.gettalong.org)
[links]: https://kramdown.gettalong.org/quickref.html#links-and-images "Documentation"
