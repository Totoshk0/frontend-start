### Скачать Node JS

[URL](https://nodejs.org/ru/download)

### Настройка плагина Code Runner

[Скачать](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

Перейти в JSON-настройки VS Code

Добавить настройку

```json
"code-runner.runInTerminal": true,
  "code-runner.executorMap": {
    "javascript": "cd $dir && clear && echo '>>> $fileName:' &&  node $fileName",
  },
```

### Escape-последовательность
[Escape sequences](https://learn.microsoft.com/ru-ru/cpp/c-language/escape-sequences?view=msvc-170#escape-sequences-1)