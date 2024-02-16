$(function () {
  $("#greet").text("こんばんは");
  $("#new-color").addClass("add-class");
  $("#add-elem").append("<li>item1</li>");
  $("#add-elem").append("<li>item2</li>");
  $("#add-elem").append("<li>item3</li>");

  $("#delete-elem").remove();
});
