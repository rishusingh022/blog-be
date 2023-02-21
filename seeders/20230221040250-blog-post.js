/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('blogPosts', [{
      date: '2023-02-01T14:46:22.001Z',
      reading_time: '2 mins',
      title: 'The future of abstract art and the culture is a bright one',
      description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas laoreet nibh euismod vestibulum.',
      claps: 10,
      liked: false,
      image: 'https://i.ibb.co/LNxt44v/abstract.png',
    }, {
      date: '2023-01-01T07:46:22.001Z',
      reading_time: '1 min',
      title: 'How painting outdoors can transform your ',
      description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas laoreet nibh euismod vestibulum.',
      claps: 1,
      liked: true,
      image: 'https://i.ibb.co/8cDkQkS/outdoor.png',
    }, {
      date: '2023-02-20T21:00:00.001Z',
      reading_time: '2 mins',
      title: '10 young painters you need to know',
      description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas laoreet nibh euismod vestibulum.',
      claps: 15,
      liked: false,
      image: 'https://i.ibb.co/V38cHQ3/young-painters.png',
    }, {
      date: '2023-01-15T23:30:00.001Z',
      reading_time: '5 mins',
      title: 'Tips for creating the perfect art',
      description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas laoreet nibh euismod vestibulum.',
      claps: 11,
      liked: false,
      image: 'https://i.ibb.co/nQc7b28/perfect-art.png',
    }, {
      date: '2023-02-11T08:15:00.001Z',
      reading_time: '9 mins',
      title: 'Stay inspired: top artists blog to get your creativity flowing',
      description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Proin semper ex leo, ut elementum erat rutrum non. Praesent luctus at urna quis elementum.',
      claps: 45,
      liked: true,
      image: 'https://i.ibb.co/dLMY5G2/inspired.png',
    }, {
      date: '2023-01-07T16:45:00.001Z',
      reading_time: '2 mins',
      title: '5 reasons why everyone should try another way to increase their productivity',
      description: 'Mollis turpis. In bibendum mi felis, vel fermentum quam consectetur sit amet. Suspendisse mauris lectus, tempor non porttitor a, tristique eu ligula. Etiam commodo convallis justo nec viverra. Proin semper ex leo, ut elementum erat rutrum non.',
      claps: 11,
      liked: false,
      image: 'https://i.ibb.co/DgWBMwz/reason.png',
    }], {});
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('blogPosts', null, {});
  },
};
