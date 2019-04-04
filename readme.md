This is a tetris plugin for markdown-it markdown parser.

# Install
```
npm install markdown-it-tetris
```

# Usage
```
var MarkdownIt = require('markdown-it')
var tetris_plugin = require('markdown-it-tetris')
md = new MarkdownIt().use(tetris_plugin);

var result = md.render(`
tetris{

    t
   ttti
    ssizz
oo sslijzz
oo lllijjj
}
`);

console.log(result);
```

the result is following:

```
<div class="tetris">
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<br/>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-t"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<br/>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-t"></span>
<span class="tetris-t"></span>
<span class="tetris-t"></span>
<span class="tetris-i"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<br/>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-empty"></span>
<span class="tetris-s"></span>
<span class="tetris-s"></span>
<span class="tetris-i"></span>
<span class="tetris-z"></span>
<span class="tetris-z"></span>
<span class="tetris-empty"></span>
<br/>
<span class="tetris-o"></span>
<span class="tetris-o"></span>
<span class="tetris-empty"></span>
<span class="tetris-s"></span>
<span class="tetris-s"></span>
<span class="tetris-l"></span>
<span class="tetris-i"></span>
<span class="tetris-j"></span>
<span class="tetris-z"></span>
<span class="tetris-z"></span>
<br/>
<span class="tetris-o"></span>
<span class="tetris-o"></span>
<span class="tetris-empty"></span>
<span class="tetris-l"></span>
<span class="tetris-l"></span>
<span class="tetris-l"></span>
<span class="tetris-i"></span>
<span class="tetris-j"></span>
<span class="tetris-j"></span>
<span class="tetris-j"></span>
</div>
```

and then you could write some css to show the result.