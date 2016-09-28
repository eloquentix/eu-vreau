class HomeController {
  constructor($scope, $timeout) {
    "ngInject";

    // Insert content here based on the most searched for things. results
    $scope.columns = [
      [{title: 'Administratie locala',
        links: [
          {title: 'Buletine', link: '/buletine'},
          {title: 'Serviciul Pasapoarte', link: '/buletine'},
          {title: 'Cazier', link: '/buletine'},
          {title: 'Taxe si Impozite', link: '/buletine'},
        ], goToLink: '/buletine-all'},
        {title: 'Primarii si Acte',
          links: [
            {title: 'Ce acte am nevoie pentru buletin?', link: '/buletine'},
            {title: 'Cum imi scot cazierul', link: '/buletine'},
            {title: 'Ce Acte am nevoie pentru pasaport ?', link: '/buletine'},
            {title: 'Taxe si Impozite', link: '/buletine'},
          ], goToLink: '/buletine-all'},
      ],
      [{title: 'IT',
        links: [
          {title: 'Buletine', link: '/buletine'},
          {title: 'Serviciul Pasapoarte', link: '/buletine'},
          {title: 'Cazier', link: '/buletine'},
          {title: 'Serviciul Pasapoarte', link: '/buletine'},
          {title: 'Buletine', link: '/buletine'},
          {title: 'Cazier', link: '/buletine'},
          {title: 'Taxe si Impozite', link: '/buletine'},
        ], goToLink: '/buletine-all'},
        {title: 'Primarii si Acte',
          links: [
            {title: 'Cum imi scot cazierul', link: '/buletine'},
            {title: 'Taxe si Impozite', link: '/buletine'},
            {title: 'Ce Acte am nevoie pentru pasaport ?', link: '/buletine'},
            {title: 'Serviciul Pasapoarte', link: '/buletine'},
            {title: 'Ce acte am nevoie pentru buletin?', link: '/buletine'},
          ], goToLink: '/buletine-all'},
      ],
      [{title: 'Turism',
        links: [
          {title: 'Buletine', link: '/buletine'},
          {title: 'Serviciul Pasapoarte', link: '/buletine'},
          {title: 'Cazier', link: '/buletine'},
          {title: 'Taxe si Impozite', link: '/buletine'},
        ], goToLink: '/buletine-all'},
        {title: 'Primarii si Acte',
          links: [
            {title: 'Buletine', link: '/buletine'},
            {title: 'Taxe si Impozite', link: '/buletine'},
            {title: 'Serviciul Pasapoarte', link: '/buletine'},
            {title: 'Cazier', link: '/buletine'},
            {title: 'Taxe si Impozite', link: '/buletine'},
          ], goToLink: '/buletine-all'},
      ]
    ];

  }
}

export default HomeController;
