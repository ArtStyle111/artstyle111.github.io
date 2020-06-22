<?php if (isset($_POST["btn"])) {
$to = "vladimir.orlof@gmail.com";
$subject = "Письмо с сайта";
$charset = "utf-8";
$headerss ="Content-type: text/html; charset=$charset\r\n";
$headerss.="MIME-Version: 1.0\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
$msg = "Name: ".$_POST["name"]."\n";
$msg .= "E-mail: ".$_POST["email"]."\n";
$msg .= "Phone: ".$_POST["phone"]."\n";
$msg .= "Address: ".$_POST["adderess"]."\n";
$msg .= "Message: ".$_POST["msg"]."\n";
mail($to, $subject, $msg, $headerss);
print "<script>alert(\"Сообщение успешно отправлено!\");window.location = window.location.href</script>";
}