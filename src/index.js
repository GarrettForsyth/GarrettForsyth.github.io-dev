import './style.scss';
import { Projects } from './projects';

let projects = Projects.configure();

function showProjectDescription(event, project) {
  let el = event.target;
  el.classList.add('active');
  appendProjectTitle(el, project.name);
  appendProjectDescription(el, project.description);
  appendLinks(el, project.github, project.live, project.google);
}

function appendProjectTitle(parent, title) {
  let title_el = document.createElement('div');
  title_el.innerHTML = title;
  title_el.classList.add('title');
  title_el.style.color = 'white';
  title_el.style.position = 'relative';
  parent.appendChild(title_el);
}

function appendProjectDescription(parent, desc) {
  let desc_el = document.createElement('div');
  desc_el.innerHTML = desc;
  desc_el.classList.add('description');
  desc_el.style.color = 'white';
  desc_el.style.position = 'relative';
  parent.appendChild(desc_el);
}

function appendLinks(parent, github, live, google) {
  if (typeof github !== 'undefined') {
    addLink(parent, github, 'github-link');
  }
  if (typeof live !== 'undefined') {
    addLink(parent, live, 'live-link');
  }
  if (typeof google !== 'undefined') {
    addLink(parent, google, 'google-play-link');
  }
}

function addLink(parent, href, className) {
  let icon = document.createElement('div');
  let link = document.createElement('a');

  icon.classList.add(className);
  link.href = href;

  link.appendChild(icon);
  parent.appendChild(link);
}

function clearChildren(parent) {
  parent.classList.remove('active');
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function resetProjectDisplay() {
  clearChildren(this);
}

projects.forEach( function(project) {
  project.element.addEventListener('mouseenter', event =>
    showProjectDescription(event, project)
  );
  project.element.addEventListener('mouseleave', resetProjectDisplay);
});
