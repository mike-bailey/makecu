<?php

require "/var/www/html/twilib/Services/Twilio.php";

// set your AccountSid and AuthToken from www.twilio.com/user/account
$AccountSid = "CENSORED";
$AuthToken = "CENSORED";

$client = new Services_Twilio($AccountSid, $AuthToken);

$message = $client->account->messages->create(array(
    "From" => "CENSORED",
    "To" => "CENSORED",
    "Body" => "An assessment of your trama has lead to the conclusion that you should see your primary care physician for the following reasons: " . $_REQUEST["reasons"]
));

// Display a confirmation message on the screen
echo "Sent message {$message->sid}";

