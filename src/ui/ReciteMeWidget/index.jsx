import PropTypes from "prop-types";
import Script from "next/script";
import button from "./reciteme_button.webp";
import { getGlobal } from "@/getters/getGlobal";

export default function ReciteMeWidget() {
  const global = getGlobal();
  const serviceKey = global["_theme.reciteme.key"];

  return (
    <>
      <Script id="reciteme">
        {`
            var serviceUrl = "//api.reciteme.com/asset/js?key=";
            var serviceKey = "${serviceKey}";
            var options = {};  // Options can be added as needed
            var autoLoad = false;
            var enableFragment = "#reciteEnable";
            var loaded = [], frag = !1; window.location.hash === enableFragment && (frag = !0); function loadScript(c, b) { var a = document.createElement("script"); a.type = "text/javascript"; a.readyState ? a.onreadystatechange = function () { if ("loaded" == a.readyState || "complete" == a.readyState) a.onreadystatechange = null, void 0 != b && b() } : void 0 != b && (a.onload = function () { b() }); a.src = c; document.getElementsByTagName("head")[0].appendChild(a) } function _rc(c) { c += "="; for (var b = document.cookie.split(";"), a = 0; a < b.length; a++) { for (var d = b[a]; " " == d.charAt(0);)d = d.substring(1, d.length); if (0 == d.indexOf(c)) return d.substring(c.length, d.length) } return null } function loadService(c) { for (var b = serviceUrl + serviceKey, a = 0; a < loaded.length; a++)if (loaded[a] == b) return; loaded.push(b); loadScript(serviceUrl + serviceKey, function () { "function" === typeof _reciteLoaded && _reciteLoaded(); "function" == typeof c && c(); Recite.load(options); Recite.Event.subscribe("Recite:load", function () { Recite.enable() }) }) } "true" == _rc("Recite.Persist") && loadService(); if (autoLoad && "false" != _rc("Recite.Persist") || frag) document.addEventListener ? document.addEventListener("DOMContentLoaded", function (c) { loadService() }) : loadService();

            // Floating Button:
            function _reciteLoaded() {
                if (reciteMeButton && reciteMeButton.parentNode) {
                    reciteMeButton.parentNode.removeChild(reciteMeButton); 
                }
            }
    
            var reciteMeButton;
            function _createReciteButton() {
                var buttonParentSelector = 'body';
                var buttonContainer = document.createElement("div");
                var buttonImage = document.createElement("img");
                var buttonAlt = "Recite Me accessibility and Language Support";
                var buttonTitle = "Launch Recite Me";
    
                buttonContainer.setAttribute('id', 'reciteme-button');
                buttonContainer.setAttribute('alt', buttonAlt);
                buttonContainer.setAttribute('title', buttonTitle);
                buttonImage.setAttribute('alt', buttonAlt);
                buttonImage.setAttribute('title', buttonTitle);
                buttonImage.setAttribute('src', "${button}");
                buttonContainer.appendChild(buttonImage);
                var buttonParent = document.querySelector(buttonParentSelector);
                buttonParent.appendChild(buttonContainer);
                buttonContainer.addEventListener("click", function () {
                    loadService();
                    return false;
                });
                reciteMeButton = buttonContainer;
            }
            _createReciteButton();
        `}
      </Script>
      <style id="reciteme_styles">
        {`
            #reciteme-button {
              background: ${global["_theme.color.quaternary"]};
              width: 60px;
              height: 60px;
              bottom: 14px;
              left: 14px;
              position: fixed;
              border-radius: 50%;
              z-index: 100;
              cursor: pointer;
            }
            #reciteme-button:hover {
              background: ${global["_theme.color.quaternary.active"]};
            }
            #reciteme-button img {
              width: 45px;
              height: 45px;
              position: absolute;
              top: 52%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
        `}
      </style>
    </>
  );
}

ReciteMeWidget.defaultProps = {
  className: "",
};

ReciteMeWidget.propTypes = {
  className: PropTypes.string,
};
