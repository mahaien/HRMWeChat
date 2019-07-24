<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019/5/10
  Time: 18:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" type="text/css" href="/HRM/HRMWeChat/Font/iconfont.css">
    <link rel="stylesheet" href="/HRM/HRMWeChat/Css/style.css"/>
    <link rel="stylesheet" href="/HRM/HRMWeChat/Css/main.css"/>
    <script src="/HRM/js/jquery-1.8.0.min.js"></script>
    <title>Title</title>
</head>
<body>
<!--提示弹框-->
<div class="alert_conmon" style="display:block;">
    <!-- 是否 -->
    <div class="xs_alert alert_info" id="YesNo" style="display: none;">
        <div class="nei">
            <i class="iconfont icon-xunwen"></i>
            <p class="tipText">是否要重置密码？</p>
        </div>
        <div class="bnt_div">
            <a class="alert_bnt bnt" href="javascript:void(0);" onclick="Common.CloseBox();">否</a>
            <a id="keep1" class="alert_bnt bnt2" href="javascript:void(0);">是</a>
        </div>
    </div>
    <!-- /是否-->
    <!-- 警告 -->
    <div class="xs_alert alert_info2" id="warn" style="display: none;">
        <div class="nei">
            <i class="iconfont icon-jinggao"></i>
            <p class="tipText">新密码不超过123个字符</p>
        </div>
    </div>
    <!-- /警告-->
    <!-- 成功 -->
    <div class="xs_alert alert_info2" id="success" style="display: none;">
        <div class="nei">
            <i class="iconfont icon-chenggong"></i>
            <p class="tipText">添加成功</p>
        </div>
    </div>
    <!-- /成功-->
    <!-- 是否 -->
    <div class="xs_alert alert_info2" id="fail" style="display: none;">
        <div class="nei">
            <i class="iconfont icon-fail"></i>
            <p class="tipText">添加失败</p>
        </div>
    </div>
    <!-- /是否-->
</div>
<!--弹框end-->

<div class="content_mark1" style="display: none;" onclick="Common.CloseBox();"></div>
<!-- 加载动画 -->
<div class="lds-css ng-scope" id="loading">
    <div class="lds-spinner" style="100%; height: 100%">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
<!-- 加载动画end -->
</body>
</html>
