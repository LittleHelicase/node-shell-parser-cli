# node-shell-parser-cli
A command line interface for [node-shell-parser](https://github.com/namshi/node-shell-parser)

# Installation

```
npm install -g node-shell-parser-cli
```

# Usage

Simply pipe some shell contents into nsp.

```
df | nsp
```

You can pretty print the results with the flag `-p`. You can use `jq` for further filtering.
