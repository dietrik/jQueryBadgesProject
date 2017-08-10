$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/bulwark.json',
    datatype: 'jsonp',
    success: function(response){
      $.each(response.courses.completed, function(title, url, badge){
        var badge = $('<div></div>');
        $(badge).addClass('course');
        var h3Title = $('<h3>'+ title +'</h3>');
        var image = $('<img></img>');
        $(image).attr('src', badge);
        var link = $('<a></a>');
        $(link).attr('href', url);
        $(link).attr('target', '_blank');
        $(link).addClass('btn').addClass('btn-primary');
        $(link).text('See Courses');
        $(badge).append(h3Title);
        $(badge).append(image);
        $(badge).append(link);
        $("#badges").append(badge);
      });
    }
  })
});
