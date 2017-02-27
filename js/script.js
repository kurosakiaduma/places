//business logic
functon Adventure(resort, destination, time, landmarks, experience) {
    this.resort = resort;
    this.destination = destination;
    this.time =  time;
    this.landmarks = landmarks;
    this.experience = experience;
}

//user interface logic
$(document).ready(function() {
    $("form#new-adventure").submit(function(event) {
        event.preventDefault();

        var inputtedResort = $("input#resort").val();
        var inputtedDestination = $("input#destination").val();
        var inputtedTime = $("select#time").val();
        var inputtedLandmarks = $("input#landmarks").val();
        var inputtedExperience = $("input#experience").val();
