# Updates

Unfortunately some errors are discovered after the book is published. Here I will describe updates for the current version of the book.

## Chapter 1, Page 14

Instead of:

`npm install --save-dev babelify`

Use:

`npm install --save-dev babelify@^6.2.0`

## Chapter 8, Page 6

Instead of:

`npm install --save-dev jest-cli`

Use:

`npm install --save-dev jest-cli@^0.4`

## Chapter 10, Page 29

Instead of:

```js
<Tweet tweet={tweet} onImageClick={this.props.onAddTweetToCollection} />
```

Use:

```js
<Tweet tweet={this.props.tweet} onImageClick={this.props.onAddTweetToCollection} />
```

And instead of:

```js
<Tweet tweet={tweet} onImageClick={this.addTweetToCollection} />
```

Use:

```js
<Tweet tweet={this.props.tweet} onImageClick={this.addTweetToCollection} />
```

## Found another error?

Please contact Artemij: reactessentials@gmail.com
