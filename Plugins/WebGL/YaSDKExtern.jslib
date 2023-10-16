mergeInto(LibraryManager.library, {

ShowFullscreenAd: function() {
showFullScreenAdv();
},

ShowRewardedAd: function(placement) {
showRewardedAdv(placement);
return placement;
},
OpenRateUs: function(placement){
    openRateUs();
},
Authenticate: function()
{
  auth();
},
SetPlayerData: function(dataStr)
{
  setPlayerData(UTF8ToString(dataStr));
},
GetLang: function()
{
  try{
    var lang = sdk.environment.i18n.lang;
    var bufferSize = lengthBytesUTF8(lang) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(lang, buffer, bufferSize);
    return buffer;
  } catch(err){
    location.reload();
  }
},
SetToLeaderboard: function(value)
{
  sdk.getLeaderboards()
   .then(lb => {
    // Без extraData
     lb.setLeaderboardScore('Levels', value);
  });
},
GetPlayerData: function()
{
  try{
    getPlayerData();
  } catch(err){
    location.reload();
  } 
}
});