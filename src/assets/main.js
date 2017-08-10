$(document).ready(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/bulwark.json',
    dataType: 'jsonp',
    success: function(response){
      $.each(response.courses.completed, function(index, info){
        var badge = $('<div></div>');
        badge.addClass('course');
        var h3Title = $('<h3>'+ info.title +'</h3>');
        var image = $('<img></img>');
        image.attr('src', info.badge);
        var link = $('<a></a>');
        link.attr('href', info.url).attr('target', '_blank').addClass('btn').addClass('btn-primary').text('See Courses');
        badge.append(h3Title).append(image).append(link);
        $("#badges").append(badge);
      });
    }
  })
});
