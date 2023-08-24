// ==UserScript==
// @name        poe settings
// @namespace   Violentmonkey Scripts
// @match        *://poe.com/
// @match        *://poe.com/chat/*
// @license     MIT
// @grant       none
// @version     1.0.2
// @author      jyking
// @require     https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js
// @description close right column 2023/8/24 09:26:43
// ==/UserScript==

(function () {
  "use strict"
  $(function(){
    // close right column
    $(".SidebarLayout_right__FS_8M").attr("data-sidebar-state", 2)
    $("body").click(function(){
      $(".SidebarLayout_right__FS_8M").attr("data-sidebar-state", 2)
    })
  })
})()