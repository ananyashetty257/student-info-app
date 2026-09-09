// Get elements from the HTML
const detailsButton = document.getElementById("details-btn");
const extraDetails = document.getElementById("extra-details");

const statusButton = document.getElementById("status-btn");
const studentStatus = document.getElementById("student-status");
const statusMessage = document.getElementById("status-message");


// Show / Hide student details
detailsButton.addEventListener("click", function () {

    extraDetails.classList.toggle("hidden");

    if (extraDetails.classList.contains("hidden")) {

        detailsButton.textContent = "Show Details";

    } else {

        detailsButton.textContent = "Hide Details";

    }
});


// Change student status
statusButton.addEventListener("click", function () {

    if (studentStatus.textContent === "Active") {

        studentStatus.textContent = "Available";
        statusMessage.textContent = "Student status changed to Available.";

    } else {

        studentStatus.textContent = "Active";
        statusMessage.textContent = "Student status changed to Active.";

    }

});