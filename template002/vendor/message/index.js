!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e : "function" == typeof define && define.amd ? define([], function() {
      return e(t)
  }) : t.Qmsg = e(t)
}(this, function(t) {
  "function" != typeof Object.assign && (Object.assign = function(t) {
      if (null == t)
          throw new TypeError("Cannot convert undefined or null to object");
      t = Object(t);
      for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          if (null != n)
              for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
      }
      return t
  }
  ),
  "classList"in HTMLElement.prototype || Object.defineProperty(HTMLElement.prototype, "classList", {
      get: function() {
          var e = this;
          return {
              add: function(t) {
                  this.contains(t) || (e.className += " " + t)
              },
              remove: function(t) {
                  this.contains(t) && (t = new RegExp(t),
                  e.className = e.className.replace(t, ""))
              },
              contains: function(t) {
                  return -1 != e.className.indexOf(t)
              },
              toggle: function(t) {
                  this.contains(t) ? this.remove(t) : this.add(t)
              }
          }
      }
  });
  var l = t && t.QMSG_GLOBALS && t.QMSG_GLOBALS.NAMESPACE || "qmsg"
    , a = {
      opening: "MessageMoveIn",
      done: "",
      closing: "MessageMoveOut"
  }
    , m = Object.assign({
      position: "center",
      type: "info",
      showClose: !1,
      timeout: 2500,
      animation: !0,
      autoClose: !0,
      content: "",
      onClose: null,
      maxNums: 5,
      html: !1
  }, t && t.QMSG_GLOBALS && t.QMSG_GLOBALS.DEFAULTS)
    , c = {
      info: '<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#1890ff" stroke="#1890ff" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z" fill="#FFF"/><path d="M24.5 34V20H23.5H22.5" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 34H28" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      warning: '<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#faad14" stroke="#faad14" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z" fill="#FFF"/><path d="M24 12V28" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      error: '<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#f5222d" stroke="#f5222d" stroke-width="4" stroke-linejoin="round"/><path d="M29.6569 18.3431L18.3432 29.6568" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3432 18.3431L29.6569 29.6568" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      success: '<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z" fill="#52c41a" stroke="#52c41a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 24L22 29L32 19" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      loading: '<svg class="animate-turn" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36" stroke="#1890ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      close: '<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  }
    , e = void 0 !== (t = document.createElement("div").style).animationName || void 0 !== t.WebkitAnimationName || void 0 !== t.MozAnimationName || void 0 !== t.msAnimationName || void 0 !== t.OAnimationName;
  function g() {
      for (var t = l, e = 0; e < arguments.length; ++e)
          t += "-" + arguments[e];
      return t
  }
  function f(t) {
      var e = this;
      e.settings = Object.assign({}, m, t || {}),
      e.id = h.instanceCount;
      var n = (n = e.settings.timeout) && parseInt(0 <= n) & parseInt(n) <= Math.NEGATIVE_INFINITY ? parseInt(n) : m.timeout;
      e.timeout = n,
      e.settings.timeout = n,
      e.timer = null;
      var i = document.createElement("div")
        , o = c[e.settings.type || "info"]
        , s = g("content-" + e.settings.type || "info");
      s += e.settings.showClose ? " " + g("content-with-close") : "";
      var r = e.settings.content || ""
        , t = c.close
        , n = e.settings.showClose ? '<i class="qmsg-icon qmsg-icon-close">' + t + "</i>" : ""
        , t = document.createElement("span");
      e.settings.html ? t.innerHTML = r : t.innerText = r,
      i.innerHTML = '<div class="qmsg-content">            <div class="' + s + '">                <i class="qmsg-icon">' + o + "</i>" + t.outerHTML + n + "</div>        </div>",
      i.classList.add(g("item")),
      i.style.textAlign = e.settings.position;
      n = document.querySelector("." + l);
      n || ((n = document.createElement("div")).classList.add(l, g("wrapper"), g("is-initialized")),
      document.body.appendChild(n)),
      n.appendChild(i),
      e.$wrapper = n,
      e.$elem = i,
      d(e, "opening"),
      e.settings.showClose && i.querySelector(".qmsg-icon-close").addEventListener("click", function() {
          e.close()
      }
      .bind(i)),
      i.addEventListener("animationend", function(t) {
          var e = t.target;
          t.animationName == a.closing && (clearInterval(this.timer),
          this.destroy()),
          e.style.animationName = "",
          e.style.webkitAnimationName = ""
      }
      .bind(e)),
      e.settings.autoClose && (e.timer = setInterval(function() {
          this.timeout -= 10,
          this.timeout <= 0 && (clearInterval(this.timer),
          this.close())
      }
      .bind(e), 10),
      e.$elem.addEventListener("mouseover", function() {
          clearInterval(this.timer)
      }
      .bind(e)),
      e.$elem.addEventListener("mouseout", function() {
          "closing" != this.state && (this.timer = setInterval(function() {
              this.timeout -= 10,
              this.timeout <= 0 && (clearInterval(this.timer),
              this.close())
          }
          .bind(e), 10))
      }
      .bind(e)))
  }
  function d(t, e) {
      e && a[e] && (t.state = e,
      t.$elem.style.animationName = a[e])
  }
  function n(t, e) {
      var n = Object.assign({}, m);
      return 0 === arguments.length ? n : t instanceof Object ? Object.assign(n, t) : (n.content = t.toString(),
      e instanceof Object ? Object.assign(n, e) : n)
  }
  function i(t) {
      t = t || {};
      var e, n, i, o, s = JSON.stringify(t), r = -1;
      for (n in this.oMsgs) {
          var l = this.oMsgs[n];
          if (l.config == s) {
              r = n,
              e = l.inst;
              break
          }
      }
      if (r < 0) {
          this.instanceCount++;
          var a = {};
          a.id = this.instanceCount,
          a.config = s,
          (e = new f(t)).id = this.instanceCount,
          e.count = "",
          a.inst = e,
          this.oMsgs[this.instanceCount] = a;
          var c = this.oMsgs.length
            , d = this.maxNums;
          if (d < c)
              for (var h = 0, u = this.oMsgs; h < c - d; h++)
                  u[h] && u[h].inst.settings.autoClose && u[h].inst.close()
      } else
          e.count = e.count ? 99 <= e.count ? e.count : e.count + 1 : 2,
          i = e,
          o = g("count"),
          t = i.$elem.querySelector("." + g("content")),
          (a = t.querySelector("." + o)) || ((a = document.createElement("span")).classList.add(o),
          t.appendChild(a)),
          a.innerHTML = i.count,
          a.style.animationName = "",
          a.style.animationName = "MessageShake",
          i.timeout = i.settings.timeout || m.timeout;
      return e.$elem.setAttribute("data-count", e.count),
      e
  }
  f.prototype.destroy = function() {
      this.$elem.parentNode && this.$elem.parentNode.removeChild(this.$elem),
      clearInterval(this.timer),
      h.remove(this.id)
  }
  ,
  f.prototype.close = function() {
      d(this, "closing"),
      e ? h.remove(this.id) : this.destroy();
      var t = this.settings.onClose;
      t && t instanceof Function && t.call(this)
  }
  ;
  var h = {
      version: "0.0.1",
      instanceCount: 0,
      oMsgs: [],
      maxNums: m.maxNums || 5,
      config: function(t) {
          m = t && t instanceof Object ? Object.assign(m, t) : m,
          this.maxNums = m.maxNums && 0 < m.maxNums ? parseInt(m.maxNums) : 3
      },
      info: function(t, e) {
          e = n(t, e);
          return e.type = "info",
          i.call(this, e)
      },
      warning: function(t, e) {
          e = n(t, e);
          return e.type = "warning",
          i.call(this, e)
      },
      success: function(t, e) {
          e = n(t, e);
          return e.type = "success",
          i.call(this, e)
      },
      error: function(t, e) {
          e = n(t, e);
          return e.type = "error",
          i.call(this, e)
      },
      loading: function(t, e) {
          e = n(t, e);
          return e.type = "loading",
          e.autoClose = !1,
          i.call(this, e)
      },
      remove: function(t) {
          this.oMsgs[t] && delete this.oMsgs[t]
      },
      closeAll: function() {
          for (var t in this.oMsgs)
              this.oMsgs[t] && this.oMsgs[t].inst.close()
      }
  };
  return h
});
