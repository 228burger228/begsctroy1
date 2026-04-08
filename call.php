<?php

// Email получателя
$to = "7554755@mail.ru";

// Тема письма
$subject = "Заказ-ДОМА ХаусГард";

// Сообщение
$message = "Вы получили новую заявку с сайта 'ДОМА ХаусГард':\n\n";
foreach ($_POST as $key => $value) {
    if ($key === 'formid') continue;
    $message .= "$key: $value\n";
}

// Отправитель
$from = "site@yourdomain.com";
$fromName = "HouseGuard";

// Кодируем заголовки
$headers = "From: $fromName <$from>\r\n";
$headers .= "MIME-Version: 1.0\r\n";

// Уникальный boundary
$boundary = md5(uniqid(time()));

// Файл, даже если его нет
$file = $_FILES['uploaded_file'] ?? [];
$tmp_name = $file['tmp_name'] ?? '';
$has_file = is_uploaded_file($tmp_name);

// Формируем заголовок content-type
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

// Начинаем тело письма
$body  = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= $message . "\r\n";

// Добавляем файл, если он реально был загружен
if ($has_file) {
    $file_content = file_get_contents($tmp_name);
    $file_encoded = chunk_split(base64_encode($file_content));
    $file_name = $file['name'] ?? 'attachment';
    $file_type = $file['type'] ?? 'application/octet-stream';

    $body .= "--$boundary\r\n";
    $body .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= $file_encoded . "\r\n";
}

// Завершаем
$body .= "--$boundary--";


if (mail($to, $subject, $body, $headers))
        {
            //header("Location: /upsell/index.php?name=$name&phone=$phone");
?>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="refresh" content="10; index.html" />
<style>
body {
    background: #fff;
    color: #313E47;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 1;
    margin:0;
    padding:0;
}

html {
    height: 100%
}

ol,
ul {
    list-style: none outside none
}

h2 {
    color: #313E47;
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    text-align: center;
    text-transform: uppercase
}

h3 {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin: 20px 0
}

a {
    color: #69B9FF
}

.order_number {
    color: #424242;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;
    margin: 25px 0
}

.url_more_info {
    display: block;
    font-size: 20px;
    text-align: center;
    margin: 20px 0
}

.block_success {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 30px
}

.list_info {
    display: inline-block;
    text-align: left
}

.list_info li {
    margin: 11px 0
}

.list_info li span {
    display: inline-block;
    font-style: normal;
    font-weight: 700;
    width: 150px
}

.fail {
    text-align: center;
    margin: 25px 0 50px
}

.email {
    margin-top: 40px;
    position: relative;
    text-align: center
}

.error {
    color: #CA3F3F;
    display: none;
    position: absolute;
    top: -28px
}

.mail_block {
    display: inline-block
}

.email input {
    border: 1px solid #B6B6B6;
    border-radius: 5px;
    font-size: 14px;
    height: 30px;
    margin-bottom: 10px;
    outline: medium none;
    padding-left: 10px;
    padding-right: 10px;
    width: 200px
}

.button {
    background: 0 repeat scroll 0 0 rgba(0, 0, 0, 0);
    border: 1px solid #0076A3;
    border-radius: .5em;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    color: #D9EEF7;
    cursor: pointer;
    display: inline-block;
    font: 15px/100% Arial, Helvetica, sans-serif;
    outline: medium none;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    padding: .55em 2em .6em
}

.button:hover {
    background: 0 repeat scroll 0 0 rgba(0, 0, 0, 0);
    color: #D9EEF7;
    text-decoration: none
}

.button:active {
    background: 0 repeat scroll 0 0 rgba(0, 0, 0, 0);
    color: #80BED6;
    position: relative;
    top: 1px
}

.disabled {
    background: 0 repeat scroll 0 0 rgba(0, 0, 0, 0);
    color: #80BED6
}

.disabled:hover {
    background: 0 repeat scroll 0 0 rgba(0, 0, 0, 0);
    color: #80BED6;
    cursor: default
}

.disabled:active {
    top: 0
}

.mail_s {
    color: green;
    position: inherit;
    top: 0
}

a:hover,
.order_number span,
.url_more_info:hover {
    color: #E14740
}

.success,
.wrap_list_info {
    text-align: center
}

</style>

</head>
<body>
<br>
<center>
<svg width="64.1" height="64" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="10 0 500 500" enable-background="new 10 0 500 500" xml:space="preserve">
<g>
    <polygon fill="#FF0000" points="227.1,280 172.9,225.7 142.9,255.7 225.7,340 241.4,324.3 242.9,325.7 377.1,190 347.1,160     "/>
    <path fill="#FF0000" d="M260,0C121.4,0,10,112.9,10,250s111.4,250,250,250s250-112.9,250-250S397.1,0,260,0z M260,457.1
        c-114.3,0-207.1-92.9-207.1-207.1S145.7,42.9,260,42.9S467.1,135.7,467.1,250S374.3,457.1,260,457.1z"/>
</g>
</svg>
</center>

<div class="wrap_block_success">
<div class="block_success">
<h2>Ваша заявка принята!</h2>
<p class="success">В ближайшее время с вами свяжется наш оператор. Пожалуйста, включите ваш контактный телефон.</p>
<h1 style="color:#FF0000; text-align: center;">Спасибо, что выбрали нас!</h1>
</div>
</div>
</body>
</html>
<?php
        } else echo "Function Mail() can not send! Проверьте ошибки, переменные и параметр From";
            

?>