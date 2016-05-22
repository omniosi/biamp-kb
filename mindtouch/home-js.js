$(document).ready(function() {
    $(".mt-content").after($("#home-quick-links")).show();
    $(".mt-foot").after("<form name='logmeinsupport' action='https://secure.logmeinrescue.com/Customer/Code.aspx' method='post' id='logmeinsupport'>" +
                        "<div><strong id='errortext'></strong><span>Remote support code: </span>" +
                        "<input type='text' name='Code' id='codefield' size='6' maxlength='6'/>" +
                        "<input type='submit' value='Connect' id='submitbutton' />" +
                        "<input type='hidden' name='hostederrorhandling' value='1' /></div></form>");
    var error = window.location.search;
    if (error.substring(0,1) == "?")
    {
        error = error.substring(1);
    }
    var response = error.substring(22);
    if(response.toLowerCase() == "pincode_missing")
    {
        $("#errortext").html("Assisted service can be obtained by first contacting Biamp Support at +1-800-826-1457.<br />");
    }
    else if(response.toLowerCase() == "pincode_invalid")
    {
        $("#errortext").html("The PIN code you have entered is invalid.<br />");
    }
    else if(response.toLowerCase() == "pincode_expired")
    {
        $("#errortext").html("The PIN code you have entered is expired.<br />");
    }
    else if(response.toLowerCase() == "pincode_error")
    {
        $("#errortext").html("The PIN code you have entered is invalid.<br />");
    }
    else if(response.toLowerCase() == "pincode_alreadyused")
    {
        $("#errortext").html("The PIN code you have entered has already been used.<br />");
    }
    else
    {
        $("#errortext").html(response + "<br />");
    }
});
