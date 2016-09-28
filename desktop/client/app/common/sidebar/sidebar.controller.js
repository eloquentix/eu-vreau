class SidebarController {
  constructor($scope, $timeout) {
    "ngInject";

    // Insert content here based on the most searched for things. results
    $scope.stats = [
      {number: 24, name: 'Ministere', link: '/buletine'},
      {number: 90, name: 'Institutii ale statului', link: '/buletine'}
      ];
    $scope.searches = [
      {title: 'Ce acte am nevoie pentru buletin?', link: '/buletine'},
      {title: 'Ce Acte am nevoie pentru pasaport ?', link: '/buletine'},
      {title: 'Cum imi scot cazierul', link: '/buletine'},
      {title: 'Ce acte am nevoie pentru buletin?', link: '/buletine'},
      {title: 'Cum imi scot cazierul', link: '/buletine'},
      {title: 'Taxe si Impozite', link: '/buletine'},
      {title: 'Taxe si Impozite', link: '/buletine'},
      {title: 'Ce Acte am nevoie pentru pasaport ?', link: '/buletine'}
    ];

    $scope.latest = [
      {title: 'Universitatea Alexandru Ioan Cuza', link: '/buletine'},
      {title: 'Camera de Comert si Industrie a Judetului Alba', link: '/buletine'}
    ];

  }
}

export default SidebarController;
