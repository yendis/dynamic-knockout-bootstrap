dynamic-knockout-bootstrap
==========================
Description:
With dynamic-knockout-bootstrap, you can use the bootstrap methods using simple knockout binding.

Requirements:
* jQuery
* knockout
* bootstrap

Usage:
Add the bootstrap methods to the data binding of your elements as such:
<p><input type="text" data-bind="typeahead: { source: ta_List1 }" /></p>
Check out test/index.html and test/test.js for more info.
	
Overriding defaults:
The defaults of the plugin are mostly the bootstrap defaults. You can override defaults by adding the following code to your js files (where typeahead in the example is the method name):
	
	$.extend(ko.bindingHandlers.typeahead.defaults, {
		items: 5,
		minLength: 2
	});
	
Make sure this is executed after dynamic-knockout-bootstrap has been loaded. 