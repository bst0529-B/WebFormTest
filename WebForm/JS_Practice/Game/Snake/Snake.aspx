<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Snake.aspx.cs" Inherits="WebForm.JS_Practice.Game.Snack.Snake" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>貪吃蛇</title>
    <style>
        .map {
            width:800px;
            height:600px;
            background:#ccc;
            margin:10px auto;
            position:relative;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="map"></div>
        <script src="js/Food.js"></script>
    </form>
    <script>
        var fd = new Food();
        fd.Init(document.querySelector(".map"));
    </script>
</body>
</html>
