document.addEventListener("DOMContentLoaded", function () {
    var dateTimeElement = document.createElement("div");
    dateTimeElement.id = "date-time";
    dateTimeElement.style.position = "fixed";
    dateTimeElement.style.top = "10px";
    dateTimeElement.style.left = "10px";
    dateTimeElement.style.color = "#f50d0d";
    dateTimeElement.style.fontWeight = "bold";
    dateTimeElement.style.fontSize = "30px";
    document.body.appendChild(dateTimeElement);
  });  