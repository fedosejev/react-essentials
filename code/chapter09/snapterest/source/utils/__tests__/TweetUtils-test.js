jest.dontMock('../TweetUtils');

describe('Tweet utilities module', function () {
  it('returns an array of tweet ids', function () {
    var TweetUtils = require('../TweetUtils');
    
    var tweetsMock = {
      tweet1: {},
      tweet2: {},
      tweet3: {}
    };

    var expectedListOfTweetIds = [ 'tweet1', 'tweet2', 'tweet3' ];
    var actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetsMock);
    
    expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
  });
});