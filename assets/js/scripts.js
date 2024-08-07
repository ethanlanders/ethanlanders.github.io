function openProject(evt, projectName) {
  var i, tabcontent, tablinks;

  /* Get all elements with class="tabcontent" and hide them */
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  /* Get all elements with class="tablinks" and remove the class "active" */
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  /* Show the current tab, and add an "active" class to the button that opened the tab */
  document.getElementById(projectName).style.display = "block";
  if (evt) {
    evt.currentTarget.className += " active";
  } else {
    document.querySelector(`[onclick="openProject(event, '${projectName}')"]`).className += " active";
  }
}

/* Have the UrbanAnalysis project tab show when entering the projects page of website */
document.addEventListener('DOMContentLoaded', (event) => {
  openProject(null, 'UrbanAnalysis');
});