// Get elements from the HTML
const detailsButton = document.getElementById("details-btn");
const extraDetails = document.getElementById("extra-details");

const statusButton = document.getElementById("status-btn");
const studentStatus = document.getElementById("student-status");
const statusMessage = document.getElementById("status-message");

// Show / Hide student details
detailsButton.addEventListener("click", function () {

    if (extraDetails.style.display === "none") {

        extraDetails.style.display = "block";
        detailsButton.textContent = "Hide Details";

    } else {

        extraDetails.style.display = "none";
        detailsButton.textContent = "Show Details";

    }

});

// Change student status
statusButton.addEventListener("click", function () {

    if (studentStatus.textContent === "Active") {

        studentStatus.textContent = "Available";
        statusMessage.textContent =
            "Student status changed to Available.";

    } else {

        studentStatus.textContent = "Active";
        statusMessage.textContent =
            "Student status changed to Active.";

    }

});