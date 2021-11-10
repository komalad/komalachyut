$('#submit-button').on('click', function(event) {
    console.log("Started");
    event.preventDefault(); 
    var fullName =$("fullNameInput");
    firebase.database().ref('guest/' + fullName).set({
        fullName : fullName,
        attending: "Y"
      });
    console.log("done");
  });