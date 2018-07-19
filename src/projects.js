export const Projects = {
  configure: function() {
    const createProject = ({ name, description, element, github, live, google }) => ({
      name,
      description,
      element,
      github,
      live,
      google
    });

    let projects = [];

    projects.push(createProject({
      name: 'Odin Facebook',
      description: 'Recreates some of the core features of Facebook such as posting pictures and comments, adding friends via requests, and receiving notifications.',
      element: document.querySelector('#project-1'),
      github: 'https://github.com/GarrettForsyth/odin-facebook',
      live: 'https://aqueous-plains-68780.herokuapp.com/'
    }));

    projects.push(createProject({
      name: 'Who Is In?',
      description: 'An event organizer aimed at reoccuring events that involve many people. Allows users on the same team to message each other and a team captain to post upcoming events to find out who is in. This project was created using TDD (cucumber and rspec).',
      element: document.querySelector('#project-2'),
      github: 'https://github.com/GarrettForsyth/who_is_in_app',
      live: 'https://who-is-in.herokuapp.com/'
    }));

    projects.push(createProject({
      name: 'Odin Chess',
      description: 'A live chess server. Users can seek for a game which other users can accept. This app uses Rail\'s Action Cable to give real time board updates.',
      element: document.querySelector('#project-3'),
      github: 'https://github.com/GarrettForsyth/odin_chess',
      live: 'https://odin-chess.herokuapp.com/'
    }));

    projects.push(createProject({
      name: 'Where is Waldo?',
      description: 'Online version of the classic Where is Waldo puzzles. Users pick a puzzle and search for Waldo and his friends.',
      element: document.querySelector('#project-4'),
      github: 'https://github.com/GarrettForsyth/odin-where-is-waldo',
      live: 'https://odin-where-is-waldo.herokuapp.com/'
    }));

    projects.push(createProject({
      name: 'Battleship',
      description: 'A javascript battleship game against random computer.',
      element: document.querySelector('#project-5'),
      github: 'https://github.com/GarrettForsyth/odin-battleship',
      live: 'https://garrettforsyth.github.io/odin-battleship/'
    }));

    projects.push(createProject({
      name: 'Ontario\'s Liquor Cabinet',
      description: 'A drink recommendation system for android. It allows the user to explore drinks available from LCBO stores. Users can like and dislike drinks and then ask for a drink recommendation based on their ratings. Users can also see the availability of drinks in their local stores.',
      element: document.querySelector('#project-6'),
      github: 'https://github.com/GarrettForsyth/the_liquor_cabinet',
      google: 'https://play.google.com/store/apps/details?id=com.games.garrett.theliquorcabinet'
    }));

    projects.push(createProject({
      name: 'Generic Type',
      description: 'Android game aimed at improving typing speed.',
      element: document.querySelector('#project-7'),
      github: 'https://github.com/GarrettForsyth/generic_type'
    }));

    return projects;
  }
};
