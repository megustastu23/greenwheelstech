setInterval(updateAvailabilityStatus, 5000); 

function updateAvailabilityStatus() {
    // Array of driver names
    var drivers = ["manoj", "prakash", "suresh", "ramesh", "deepak"];

    drivers.forEach(function (driver) {
        var statusElement = document.getElementById(driver + "Status");
        if (statusElement) {
            var newStatus = Math.random() < 0.5 ? "Available" : "Unavailable";
            statusElement.innerText = newStatus;
        }
    });
}
