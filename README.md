# @bytesberry/greetings

A lightweight utility to get dynamic greeting messages based on the current time.

## Installation

Install the package via npm or yarn:

### Using Yarn

```bash
yarn add @bytesberry/greetings
```

### Using npm

```bash
npm install @bytesberry/greetings
```

## API Reference

| Method          | Description                                           |
| --------------- | ----------------------------------------------------- |
| `getGreeting()` | Returns a greeting message based on the current time. |

## Usage Example

```javascript
import getGreeting from "@bytesberry/greetings";

const greet = getGreeting();

console.log(greet);
```

### Output

The output will be a greeting message such as:

- "Good Morning" (if the current time is morning)
- "Good Afternoon" (if it's afternoon)
- "Good Evening" (if it's evening)

## Features

- Automatically detects the current time.
- Provides appropriate greetings dynamically.
- Lightweight and easy to integrate.

---

Start greeting your users dynamically with `@bytesberry/greetings`
