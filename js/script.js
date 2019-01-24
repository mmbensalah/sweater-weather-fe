







// makePostCall = function (url, data) { // here the data and url are not hardcoded anymore
//    var json_data = JSON.stringify(data);
//
//     return $.ajax({
//         type: "POST",
//         url: url,
//         data: json_data,
//         dataType: "json",
//         contentType: "application/json;charset=utf-8"
//     });
// }
//
//
// // and here a call example
// makePostCall("index.php?action=READUSERS", {'city' : 'Tokio'})
//     .success(function(data){
//                // treat the READUSERS data returned
//    })
//     .fail(function(sender, message, details){
//            alert("Sorry, something went wrong!");
//   });

$.ajax({
        url: "https://api.github.com/users/mmbensalah",
        type: 'GET',
        dataType: 'json',
        success: function(res) {
            console.log(res);
            alert(res);
        }
    });
