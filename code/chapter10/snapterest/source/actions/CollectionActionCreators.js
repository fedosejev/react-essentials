var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

  addTweetToCollection: function (tweet) {
    var action = {
      type: 'add_tweet_to_collection',
      tweet: tweet
    };

    AppDispatcher.dispatch(action);
  },

  removeTweetFromCollection: function (tweetId) {
    var action = {
      type: 'remove_tweet_from_collection',
      tweetId: tweetId
    };

    AppDispatcher.dispatch(action);
  },

  removeAllTweetsFromCollection: function () {
    var action = {
      type: 'remove_all_tweets_from_collection'
    };

    AppDispatcher.dispatch(action);
  },

  setCollectionName: function (collectionName) {
    var action = {
      type: 'set_collection_name',
      collectionName: collectionName
    };
    
    AppDispatcher.dispatch(action);
  }
};