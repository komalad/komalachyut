$(document).ready(function () {

    $("#chk-bx").click(function() {
        $("#guestNoFormGrp").toggle(this.checked);
        if(this.checked) {
            console.log("Coming ...");
            $("#chk-bx").val('Yes');
            
        }else{
            console.log("Not Coming ...");
             $("#chk-bx").val('No');
             $("#guestNo").val(0);
        }
    });

    
    $("#submitBtn").click(function (event) {
 
        //stop submit the form, we will post it manually.
        event.preventDefault();
         

       // Create an FormData object 
      var formData = {
          Name: $("#name").val(),
          Coming: $("#chk-bx").val(),
          Guests: $("#guestNo").val(),
        };

       // disabled the submit button
        $("#btnSubmit").prop("disabled", true);
 
        console.log("data");
        console.log(formData);
        
        $.ajax({
            type: "POST",
            url: "http://ec2-3-14-136-215.us-east-2.compute.amazonaws.com:8000/clinics/total_clinics",
            data: JSON.stringify(formData),
            processData: false,
            contentType: "application/json",
            cache: false,
            timeout: 800000,
            success: function (data) { 
                if($("#chk-bx".checked)){
                    $("#alertMsg").show().text("Thank you! Look forward to celebrating with you.");
                }else{
                   
                }                    
                console.log("SUCCESS : ", data);
                $("#submitBtn").val("Sent").prop("disabled", true);
 
            },
            error: function (e) {
 
                $("#alertMsg").text(e.responseText);
                console.log("ERROR : ", e);
                $("#submitBtn").prop("disabled", true);
 
            }
        });
 
    });
 
});
