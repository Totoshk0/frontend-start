- `kebab-case`
- `snake_case`
- `CamelCase`
- `lowerCamelCase`

`magic constant` => `magic number`

```js
drawSprite(23.98, 320, 240);
```

```js
let screenWidth = 640;
let screenHeight = 480;
let screenCenterX = screenWidth / 2;
let screenCenterY = screenHeight / 2;
let frameRate = 23.98;
```

```js
drawSprite(frameRate, screenCenterX, screenCenterY);
```