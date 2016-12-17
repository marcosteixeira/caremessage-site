function careersJobBuilder(data) {
  if (! (data.jobs && data.jobs.length)) {
    return;
  }

  var list = $('.careers-position-list');
  for(var i = 0; i < data.jobs.length; i++) {
    var job = data.jobs[i];

    // Run the content through the text filter twice. First run changes &gt;
    // to >. Second run removes >.
    var contentText = $('<div/>').html(job.content).text();
    contentText = $('<div/>').html(contentText).text();

    // Truncate at a word boundary
    contentText = contentText.substr(0, 400).split(" ").slice(0, -1).join(" ")
      + '...';

    // Append the job information to the list
    list.append('<li><h4>' + job.title + '</h4>' +
      '<div class="careers-job-location">' + job.location.name + '</div>' +
      '<p class="clear">' + contentText + '</p>' +
      '<a href="' + job.absolute_url + '" target="_blank">Learn More</a></li>');
  }
}
