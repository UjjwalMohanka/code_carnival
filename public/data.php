<?php

$conn = mysqli_connect("localhost:3307", "root", "", "form");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if form submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Insert into table
    $sql = "INSERT INTO `form`(`name`, `email`, `message`) VALUES ('$name','$email','$message')";

    if (mysqli_query($conn, $sql)) {
        echo "Thank you! Your message has been sent.";
        header("Location: /code-carnival-create-main/public/index.html");
        exit();
        
    } else {
        echo "Error: " . mysqli_error($conn);
    }

    // Close connection
    mysqli_close($conn);
}
?>
