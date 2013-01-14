


Topsight = (function() {
	var artifacts = {};

	var init = function() {
		if (artifacts == {}) {
			define_built_ins();
		}
	);

	var define = function(name, constructor) {
		if (typeof(constructor) == "function") {
			artifacts[name] = constructor;
		}
		else {
			console.log("Error: Topsight.define should receive a name and a constructor function");
		}
	};

	var View = function(element_id) {
		this.$element = $("#" + element_id);
	}

	View.prototype.construct = function(model) {
		for (var a in model) {
			if (model.hasOwnProperty(a)) {
				if (artifacts[a]) {
					// TODO support also a list of values
					artifacts[a](model[a]);
				}
				else {
					console.log("Error: undefined artifact: " + a);
				}
			}
		}
	}; 

	var define_built_ins = function() {
		// TODO define artifacts such as: circle, label, paper, pipe
	}


	init();

	return {
		define: define,
		View: View
	}

}());
