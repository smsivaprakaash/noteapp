console.log("Index.js");
let axios = require('axios-proxy-fix');
let aouthcode = "aPrxvJDqQzo3F9Z1CAWX85DP4oz3JDmQBar6pesQeq0TggU1o6qWDL_Fx9hRaUmO0vpKx9JhAw==";
let redirect_uri = 'https://udx-qa.cloud.health.ge.com/api/sitecore/CPLogin/LoginCallbackSaml';
axios.post(
    `https://gehealthcare-amer--qa2.cs77.my.salesforce.com/services/oauth2/token?client_id=3MVG9ifmAKCHISbZybG3yRmk5FJCO9g1UfbrGxvVz2Om0LCRsg_dhvzTcKHJMvd__0W9FFm2H75i1TaERdcON&client_secret=4083487728419669520&grant_type=authorization_code&code=${aouthcode}&redirect_uri=${redirect_uri}`
)
    .then((res) => {
        console.log(res);
        //console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });

// var rp = require('request-promise');
// let code = "aPrxvJDqQzo3F9Z1CAWX85DP4nBgIm2myL49r_XeDuzgj2qvndsGIC6xuMt5oW3yS2xk92JmlQ==";
// let redirect_uri = 'https://udx-qa.cloud.health.ge.com/api/sitecore/CPLogin/LoginCallbackSaml';
// var options = {
//     method: 'POST',
//     url: "https://gehealthcare-amer--qa2.cs77.my.salesforce.com/services/oauth2/token",
//     qs:
//     {
//         grant_type: "authorization_code",
//         client_id: "3MVG9ifmAKCHISbZybG3yRmk5FJCO9g1UfbrGxvVz2Om0LCRsg_dhvzTcKHJMvd__0W9FFm2H75i1TaERdcON",
//         client_secret: "4083487728419669520",
//         code: code,
//         redirect_uri: redirect_uri
//     },
//     headers:
//     {
//         'cache-control': 'no-cache'
//     }
// };
// rp(options, function (error, response, body) {
//     console.log(body);
//     console.log(error);
// });
