iron
====

iron cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/iron.svg)](https://npmjs.org/package/iron)
[![CircleCI](https://circleci.com/gh/projects/iron/tree/master.svg?style=shield)](https://circleci.com/gh/projects/iron/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/iron.svg)](https://npmjs.org/package/iron)
[![License](https://img.shields.io/npm/l/iron.svg)](https://github.com/projects/iron/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g iron-express-cli
$ iron COMMAND
running command...
$ iron (-v|--version|version)
iron-express-cli/0.0.3 darwin-x64 node-v12.16.0
$ iron --help [COMMAND]
USAGE
  $ iron COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`iron create [FILE]`](#iron-create-file)
* [`iron help [COMMAND]`](#iron-help-command)

## `iron create [FILE]`

Init a new project

```
USAGE
  $ iron create [FILE]

OPTIONS
  -h, --help       show CLI help
  -n, --name=name  (required) project name

EXAMPLE
  $ iron new -n projectname
```

_See code: [src/commands/create.ts](https://github.com/projects/iron/blob/v0.0.3/src/commands/create.ts)_

## `iron help [COMMAND]`

display help for iron

```
USAGE
  $ iron help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
