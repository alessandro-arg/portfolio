<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"):
            header("Access-Control-Allow-Origin: *");
            $json = file_get_contents('php://input');
            $params = json_decode($json);
    
            $email = filter_var($params->email, FILTER_SANITIZE_EMAIL);
            $name = htmlspecialchars($params->name, ENT_QUOTES, 'UTF-8');
            $userMessage = nl2br(htmlspecialchars($params->message, ENT_QUOTES, 'UTF-8'));
    
            $recipient = 'contact@alessandro-argenziano.com';
            $subject = "New Contact Form Submission from $name";
            $message = "
                    <html>
                    <head>
                    <style>
                        body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background-color: #f4f4f7;
                        margin: 0;
                        padding: 0;
                        }
                        .email-wrapper {
                        max-width: 600px;
                        margin: 40px auto;
                        background-color: #ffffff;
                        border-radius: 8px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                        overflow: hidden;
                        border: 1px solid #e0e0e0;
                        }
                        .email-header {
                        background-color: #4a90e2;
                        color: white;
                        padding: 20px;
                        font-size: 20px;
                        font-weight: bold;
                        }
                        .email-body {
                        padding: 20px;
                        color: #333333;
                        }
                        .email-section {
                        margin-bottom: 20px;
                        }
                        .email-label {
                        font-weight: 600;
                        margin-bottom: 5px;
                        display: block;
                        color: #666;
                        }
                        .email-value {
                        font-size: 15px;
                        line-height: 1.5;
                        }
                        .email-footer {
                        padding: 15px 20px;
                        font-size: 12px;
                        color: #999999;
                        background-color: #fafafa;
                        border-top: 1px solid #eeeeee;
                        text-align: center;
                        }
                    </style>
                    </head>
                    <body>
                    <div class='email-wrapper'>
                        <div class='email-header'>📬 New Contact Message</div>
                        <div class='email-body'>
                        <div class='email-section'>
                            <span class='email-label'>Name</span>
                            <div class='email-value'>$name</div>
                        </div>
                        <div class='email-section'>
                            <span class='email-label'>Email</span>
                            <div class='email-value'>$email</div>
                        </div>
                        <div class='email-section'>
                            <span class='email-label'>Message</span>
                            <div class='email-value'>" . nl2br(htmlspecialchars($userMessage)) . "</div>
                        </div>
                        </div>
                        <div class='email-footer'>
                        This message was sent via the contact form on <a href='https://alessandro-argenziano.com' style='color: #999;'>alessandro-argenziano.com</a>
                        </div>
                    </div>
                    </body>
                    </html>
                    ";
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';
            $headers[] = 'From: ' .  '<' . $email . '>';
            $headers[] = 'Reply-To: ' . $email;

            mail($recipient, $subject, $message, implode("\r\n", $headers));
            break;

            default:
                header("Allow: POST", true, 405);
                exit;
    } 
