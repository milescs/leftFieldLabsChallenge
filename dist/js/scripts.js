function toggleSidebar(e){var s=document.getElementsByClassName("sidebar-closed");s.length>0&&window.innerWidth<1e3&&(s[0].setAttribute("class","sidebar-open"),document.getElementsByClassName("sidebar-open")[0].focus(),addBlurListeners())}function resizeMenuChecker(e){null===e.relatedTarget&&document.getElementsByClassName("sidebar-open")[0].setAttribute("class","sidebar-closed"),window.innerWidth>999&&(document.getElementsByClassName("sidebar-closed")[0]?(document.getElementsByClassName("search-form-input")[0].removeEventListener("blur",resizeMenuChecker,!1),document.getElementsByClassName("language-selector")[0].removeEventListener("blur",resizeMenuChecker,!1)):document.getElementsByClassName("sidebar-open")[0].setAttribute("class","sidebar-closed"))}function addBlurListeners(){document.getElementsByClassName("sidebar-open")[0].addEventListener("blur",resizeMenuChecker,!1),document.getElementsByClassName("search-form-input")[0].addEventListener("blur",resizeMenuChecker,!1),document.getElementsByClassName("language-selector")[0].addEventListener("blur",resizeMenuChecker,!1)}function toggleWhyAndroid(){var e=document.getElementsByClassName("why-android-list-closed");e.length>0?(e[0].setAttribute("class","why-android-list-open"),document.getElementsByClassName("caret-down")[0].setAttribute("class","why-android-expand-open caret-up"),document.getElementsByClassName("menu-list-label")[0].setAttribute("class","menu-list-label-active"),document.getElementsByClassName("why-android-list-open")[0].focus()):(document.getElementsByClassName("why-android-list-open")[0].setAttribute("class","why-android-list-closed"),document.getElementsByClassName("menu-list-label-active")[0].setAttribute("class","menu-list-label"),document.getElementsByClassName("caret-up")[0].setAttribute("class","why-android-expand-closed caret-down"))}function addGreen(e){"why-android-wrapper"===e?(document.getElementsByClassName(e)[0].children[0].style.cssText="color: #6ab344;",document.getElementsByClassName(e)[0].children[1].style.cssText="fill: #6ab344;"):(document.getElementsByClassName(e)[0].children[0].children[0].style.cssText="fill: #6ab344;",document.getElementsByClassName(e)[0].children[1].style.cssText="color: #6ab344;")}function removeGreen(e){"why-android-wrapper"===e?(document.getElementsByClassName(e)[0].children[0].style.cssText="",document.getElementsByClassName(e)[0].children[1].style.cssText=""):(document.getElementsByClassName(e)[0].children[0].children[0].style.cssText="",document.getElementsByClassName(e)[0].children[1].style.cssText="")}function viewSearch(){document.getElementsByClassName("search-form")[0]&&(document.getElementsByClassName("search-form")[0].setAttribute("class","search-form-desktop"),document.getElementsByClassName("search-form-icon-desktop")[0].style.cssText="display: none;",document.getElementsByClassName("search-form-icon-desktop-active")[0].style.cssText="display: inline-block;")}function closeDesktopSearch(){document.getElementsByClassName("search-form-desktop")[0].setAttribute("class","search-form"),document.getElementsByClassName("search-form-icon-desktop-active")[0].style.cssText="display: none;",document.getElementsByClassName("search-form-icon-desktop")[0].style.cssText="display: inline-block;"}window.addEventListener("resize",resizeMenuChecker);