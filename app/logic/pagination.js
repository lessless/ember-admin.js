var Pagination = Ember.Object.extend();

Pagination.reopenClass({
  setup: function(controller, page) {
    var nextPage, prevPage;
    if (page) {
      nextPage = page + 1;
      prevPage = page - 1 < 1 ? 1 : page - 1;
      controller.set('__nextPage', nextPage);
      return controller.set('__prevPage', prevPage);
    } else {
      controller.set('__nextPage', void 0);
      return controller.set('__prevPage', void 0);
    }
  }
});

export default Pagination;
