


Topsight = (function() {

	var View = function(element_id) {
		this.$element = $("#" + element_id);
		if (!this.$element) {
			console.log("No such element: " + element_id);
		}
		this.artifacts = {};
		define_built_ins.call(this);
	}

	View.prototype.define = function(name, constructor) {
                if (typeof(constructor) == "function") {
                        artifacts[name] = constructor;
                }
                else {
                        console.log("Error: Topsight.define should receive a name and a constructor function");
                }
        };

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
		define("circle", function(model) {
			
		});

	}



	return {
		View: View
	}

}());
