(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
  var I = document.querySelector(".trm-typed-text"),
    u = window.ASYNC_CONFIG.typed_text || [];
  function y(i, e) {
    if (!i || !Array.isArray(e) || Array.isArray(e) && !e.length) return;
    var T = 100,
      A = 3e3,
      o = 0,
      c = 1,
      n = o,
      r = 0,
      t = 0,
      s;
    l();
    function l() {
      s = setInterval(a, T);
    }
    function a() {
      var d = e[r];
      n == o ? (t++, t == d.length && (n = c, clearInterval(s), setTimeout(l, A))) : n == c && (t--, t == 0 && f());
      var p = d.substring(0, t);
      i.textContent = p;
    }
    function f() {
      t = 0, n = o, r++, r == e.length && (r = 0);
    }
  }
  y(I, u);
  window.ASYNC_CONFIG.swup && document.addEventListener("swup:contentReplaced", function () {
    y(document.querySelector(".trm-typed-text"), u);
  });
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvaGV4by10aGVtZS1hc3luYy9zb3VyY2UvanMvcGx1Z2lucy90eXBpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsWUFBSTtFQUFDLElBQUksQ0FBQyxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFBQyxDQUFDLEdBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLElBQUUsRUFBRTtFQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7SUFBQyxJQUFHLENBQUMsQ0FBQyxJQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBQztJQUFPLElBQUksQ0FBQyxHQUFDLEdBQUc7TUFBQyxDQUFDLEdBQUMsR0FBRztNQUFDLENBQUMsR0FBQyxDQUFDO01BQUMsQ0FBQyxHQUFDLENBQUM7TUFBQyxDQUFDLEdBQUMsQ0FBQztNQUFDLENBQUMsR0FBQyxDQUFDO01BQUMsQ0FBQyxHQUFDLENBQUM7TUFBQyxDQUFDO0lBQUMsQ0FBQyxFQUFFO0lBQUMsU0FBUyxDQUFDLEdBQUU7TUFBQyxDQUFDLEdBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFBQTtJQUFDLFNBQVMsQ0FBQyxHQUFFO01BQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUFDLENBQUMsSUFBRSxDQUFDLElBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUcsQ0FBQyxHQUFDLENBQUMsRUFBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBRSxDQUFDLEtBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxJQUFFLENBQUMsSUFBRSxDQUFDLEVBQUUsQ0FBQztNQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztNQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUMsQ0FBQztJQUFBO0lBQUMsU0FBUyxDQUFDLEdBQUU7TUFBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUFBO0VBQUM7RUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztFQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsRUFBQyxZQUFVO0lBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsRUFBQyxDQUFDLENBQUM7RUFBQSxDQUFDLENBQUM7QUFBQyxDQUFDLEdBQUciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIoKCk9Pnt2YXIgST1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRybS10eXBlZC10ZXh0XCIpLHU9d2luZG93LkFTWU5DX0NPTkZJRy50eXBlZF90ZXh0fHxbXTtmdW5jdGlvbiB5KGksZSl7aWYoIWl8fCFBcnJheS5pc0FycmF5KGUpfHxBcnJheS5pc0FycmF5KGUpJiYhZS5sZW5ndGgpcmV0dXJuO2xldCBUPTEwMCxBPTNlMyxvPTAsYz0xLG49byxyPTAsdD0wLHM7bCgpO2Z1bmN0aW9uIGwoKXtzPXNldEludGVydmFsKGEsVCl9ZnVuY3Rpb24gYSgpe2xldCBkPWVbcl07bj09bz8odCsrLHQ9PWQubGVuZ3RoJiYobj1jLGNsZWFySW50ZXJ2YWwocyksc2V0VGltZW91dChsLEEpKSk6bj09YyYmKHQtLSx0PT0wJiZmKCkpO2xldCBwPWQuc3Vic3RyaW5nKDAsdCk7aS50ZXh0Q29udGVudD1wfWZ1bmN0aW9uIGYoKXt0PTAsbj1vLHIrKyxyPT1lLmxlbmd0aCYmKHI9MCl9fXkoSSx1KTt3aW5kb3cuQVNZTkNfQ09ORklHLnN3dXAmJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzd3VwOmNvbnRlbnRSZXBsYWNlZFwiLGZ1bmN0aW9uKCl7eShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRybS10eXBlZC10ZXh0XCIpLHUpfSk7fSkoKTtcbiJdfQ==
