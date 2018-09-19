# now-fetch
A bare-bones [Now API] [fetch] wrapper that:

* Sets the base URL for requests to `https://api.zeit.co`, or the `url` option
* Lazily finds your Now authentication token with [now-token] and automatically sets the `Authorization` header

## Installation
```
npm install --save now-fetch
```

## Usage
The default export of `now-fetch` is a function that _configures_ the `fetch()` wrapper with [options](#fetch-wrapper-options):

```js
const makeNowFetch = require('now-fetch')
const nowFetch = makeNowFetch()
```

```js
// or, more succinctly:
const nowFetch = require('now-fetch')()

nowFetch('/v2/now/deployments')
  .then(data => {
    console.warn('You have %d deployments.', data.deployments.length)
  })
  .catch(error => {
    console.error('Oops:', error)
    process.exitCode = 1
  })
```

## Fetch wrapper options
| Option | Description | Default |
| :----- | :---        | :---    |
| `token` | Provides the Now access token | (use [now-token]) |
| `tokenOptions` | If no `token` is provided, pass these options to [now-token] |
| `url` | Set the request base URL | `https://api.zeit.co` |

## Fetch options
See the [node-fetch docs](https://github.com/bitinn/node-fetch#options) for which options you can pass to the configured `fetch()` function.


[now-token]: https://npm.im/now-token
[now api]: https://zeit.co/api
