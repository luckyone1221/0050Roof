<?php
//Принимаем постовые данные
$whatever=$_POST['whatever'];
$name=$_POST['name'];
$tell=$_POST['tell'];
//Тут указываем на какой ящик посылать письмо
$to = "ooo_tehnodom@mail.ru";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сайта Технодом";
// Сообщение письма
$message = "
Форма, которую заполнил клиент: ".htmlspecialchars($whatever)."<br />
Имя пользователя: ".htmlspecialchars($name)."<br />
Телефон: <a href='tel:$tell'>".htmlspecialchars($tell)."</a>";
// Отправляем письмо при помощи функции mail();
$headers = "From: sitename <site@mail.ru>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
header('Location: thanks.html');
exit();
?>