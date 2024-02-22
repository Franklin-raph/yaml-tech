$(document).ready(function() {
    $('#mail-contact-form').submit(function(e) {
        e.preventDefault(); // Prevent the form from submitting normally
        $('.send-mail-btn').css('display', 'none');
        $('.loader').css('display', 'block');

        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val(),
            subject: $('#subject').val()
        };

        $.ajax({
            type: 'POST',
            url: 'https://yamltech.onrender.com/send-mail', // Replace 'send-email.php' with the path to your server-side script
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                // $("#alert-message").css("display", "block").text(`${response.detail}`)

                Swal.fire({
                    text: `We have received your message, we would get back to you in the next 24 hours. Thank you and have a wonderful day.😊`,
                    icon: "success"
                  });

                $('.send-mail-btn').css('display', 'block');
                $('.loader').css('display', 'none');

                $('#mail-contact-form')[0].reset();
                setTimeout(function() {
                    $("#alert-message").css("display", "none");  
                }, 5000);

            },
            error: function(xhr, status, error) {
                console.error('Error sending email:', error);
                // Optionally, you can display an error message to the user
            }
        });
    });
});