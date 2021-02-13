
function SubmitData(params) {
    if (e.preventDefault) e.preventDefault();

    console.log("i am here for you :", params);

    return false;
}

console.log('ho');

$(function() {
    $('#wedding-rsvp-form').on("submit", function(e,data) {
      e.preventDefault(); // cancel the actual submit
  
      /* do what you want with the form */
      var name = $('#name')[0].value
      var email = $('#email')[0].value
      var guests = $('#guests')[0].value
      var events = $('#events')[0].value
      var countryFrom = $('#countryFrom')[0].value
      var travelWith = $('#travelWith')[0].value
      var startOn = $('#startOn')[0].value
      var backOn = $('#backOn')[0].value
      
    data = {
        name: name,
        email: email,
        guests: guests,
        events: events,
        countryFrom: countryFrom,
        travelWith: travelWith,
        startOn: startOn,
        backOn: backOn
    }
      // Should be triggered on form submit
  
      console.log('hi, ', data);

      return false;
    });
  });