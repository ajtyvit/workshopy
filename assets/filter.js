// var workshops = require('./workshops.json');


var Filter = {
  workshops: [],

  getAllRegions: function () {
    return this.workshops
      .map(function (workshop) {
        return workshop.regions;
      })
      .reduce(function (a, b) {
        return a.concat(b.filter(function (bElem) {
          return a.indexOf(bElem) < 0;
        }));
      });
  },

  filterByRegion: function (region) {
    return this.workshops.filter(function (workshop) {
      return workshop.regions.indexOf(region) >= 0;
    });
  },

  getRequestFormURL(workshop) {
    return 'https://docs.google.com/forms/d/e/1FAIpQLSeLMOuTCdnUwD37jpMHSQlbX0fGI2Qs5j1uI1thWaIj1ooC_A/viewform' +
      '?entry.2089397298=' + encodeURIComponent(workshop.name) +
      '&entry.1064790964=' + encodeURIComponent(workshop.lecturer.name);
  }
};


// console.log(filterByRegion('Prešov'));
// console.log(getAllRegions());
