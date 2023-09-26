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