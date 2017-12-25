Convert png to gif

```
convert -delay 20 -loop 0 -alpha set -dispose previous *.png weather.gif
```

Parallel download

```
cat file.in | parallel curl -L {} -o {/}
```

Ref

- http://blog.gypsydave5.com/2016/02/04/xargs-and-curl/
