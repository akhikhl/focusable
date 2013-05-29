/**
 * focusable.js
 *
 * Simple "focusable" behavior that can be attached to any DOM-element.
 * Written by Andrey Hihlovskiy (akhikhl AT gmail DOT com).
 * Licensed under the MIT (http://opensource.org/licenses/MIT).
 * Date: 29.05.2013
 *
 * @author Andrey Hihlovskiy
 * @version 1.0.0
 * @requires jQuery v1.7 or later
 *
 * https://github.com/akhikhl/focusable
 *
 **/
jQuery(function($) {
  // add/remove "focused" style on clicks and focusin inside/outside the "focusable" element
  $("body").on("click focusin", function(event) {
    var thisFocusable = $(event.target).closest(".focusable");
    $(".focusable.focused").not(thisFocusable).removeClass("focused").trigger("lostFocus.focusable");
    if(!thisFocusable.hasClass("focused"))
      thisFocusable.addClass("focused").focus().trigger("gotFocus.focusable");
  });
});