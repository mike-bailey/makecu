<?php
require("sendgrid-php/sendgrid-php.php");
$sendgrid = new SendGrid('CENSORED');
$email = new SendGrid\Email();
$email
    ->addTo($_REQUEST["to"])
    ->setFrom($_REQUEST["from"])
    ->setSubject($_REQUEST["subj"])
    ->setText($_REQUEST["body"])
    ->setHtml($_REQUEST["body"])
;

$sendgrid->send($email);

// Or catch the error

try {
    $sendgrid->send($email);
} catch(\SendGrid\Exception $e) {
    echo $e->getCode();
    foreach($e->getErrors() as $er) {
        echo $er;
    }
}
?>

