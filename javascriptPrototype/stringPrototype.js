"use strict";
/*
Create a function prototype that allows expressing opinions about specific strings using your name. Specifically, implement a method that:

Uses your name as the method name (e.g., if your name is ""Alice"").
Takes a single argument representing an opinion (""like"" or ""dislike"").
This method should be called on a string (e.g., ""chocolate""), and it should return a formatted string that states your opinion about that string.

If your name is ""Alice"" and you express a ""like"" for ""chocolate"", calling ""chocolate"".alice(""like"") should return:
""alice likes 'chocolate'""

If you express a ""dislike"", it should return:
""alice dislikes 'chocolate'"" when called as ""chocolate"".alice(""dislike"").
*/
String.prototype.Alice = function (opinion) {
    return `Alice ${opinion}s ${this}.`;
};
