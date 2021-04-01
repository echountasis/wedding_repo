
const  SubmitData = async (params) => {
    const response = await fetch('https://x9qvcwp41d.execute-api.us-east-2.amazonaws.com/staging/items', {
        method: 'POST',
        body: JSON.stringify(params), // string or object
        headers: {
        'Content-Type': 'application/json'
        }
    });
    const myJson = await response.json(); //extract JSON from the http response

    $('#wedding-rsvp-form').css("display","none");
    
    if( myJson.email === params.email) {
        var name = myJson.name.split(" ")[0];
        var html = "<div class='style-msg2 successmsg'>" +
                        "<div class='msgtitle'>Hey " + name + ", we received your reservation!</div>" +
                        "<div class='sb-msg'>" +
                        "We are so excited to see you in Paros. If you wish to change the details you shared with us you can come back, fill the form again and use the same email address. We will contact you once we have more details!"
                        "</div>" +
                    "</div>";
        $('.form-result').append(html);
    }
    else {
        $('.form-result').append("<div class='style-msg errormsg'><div class='sb-msg'><i class='icon-remove'></i><strong>Oh snap!</strong> Something went wrong apparently! Give it another try and if you still have issues please contact us via <a href='mailto:echountasis@outlook.com'>email</a></div></div>");
    };

    $('.form-result').css("display","block");
 }


$(function() {
    $('#wedding-rsvp-form').on("submit", function(e,data) {
      e.preventDefault(); // cancel the actual submit
  
      /* do what you want with the form */
      var name = $('#name')[0].value
      var email = $('#email')[0].value
      var guests = $('#guests')[0].value
      var events = $('#events')[0].value
      // var countryFrom = $('#countryFrom')[0].value
      var travelWith = $('#travelWith')[0].value
     // var startOn = $('#startOn')[0].value
     // var backOn = $('#backOn')[0].value

      if(name === "" || email === "" || guests === "") return;
  
      var result = SubmitData({
        name: name,
        email: email,
        guests: guests,
        events: events,
        // countryFrom: countryFrom,
        travelWith: travelWith,
        //startOn: startOn,
        //backOn: backOn
    });

    return result;
    });
  });