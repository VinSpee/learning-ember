var IndexRoute = Ember.Route.extend({
	redirect: function() {
		this.transitionTo("users");
	}
});
export default IndexRoute;
