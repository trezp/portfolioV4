const projectList = Vue.component('project-list', {
  template: `
    <div>
      <ul v-for="project in projects">
        <li>
          <h2>{{ project.title }}</h2>
          <h3>{{ project.tagline }}</h3>
          <p>{{ project.description }}</p>
        </li>
      </ul>
    </div>
  `,
  data: function(){
    return {
      projects: projects
    }
  }
})

const websitesList = Vue.component('website-list', {
  template: `
    <div>
      <ul v-for="website in websites">
        <li>
          <h2>{{ website.title }}</h2>
          <p>{{ website.description }}</p>
        </li>
      </ul>
    </div>
  `,
  data: function(){
    return {
      websites: websites
    }
  }
})

const home = Vue.component('app-home', {
  template: `
    <div>
      <h1>This is a home page.</h1>
    </div>
  `
})

const about = Vue.component('app-about', {
  template: `
    <div>
      <h1>This is an about page.</h1>
    </div>
  `
})


new Vue({
  el: '#portfolio',
  data: {
    currentView: 'home',
    isActive: true
  },
  components: {
    home: home,
    about: about,
    projects: projectList,
    websites: websitesList
  },
});

