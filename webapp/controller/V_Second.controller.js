sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("Hello_world_xml_2_pantalles.controller.V_Second", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Hello_world_xml_2_pantalles.view.V_Second
		 */
			onInit: function() {
		// Get the Router Info
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// Validate/Match the Router Details sent from source using oRouter.navTo("Second_page", {SelectInput: vInput});
			oRouter.getRoute("Second_page").attachMatched(this._onRouteFound, this);
		     
			},
			
			
			// Custom Method to bind the elements using the Event Arguments
			_onRouteFound: function(oEvt) {

				var oArgument = oEvt.getParameter("arguments");
        
                 var oLabel = this.byId("idlabel");
                 oLabel.setText(oArgument.SelectInput);
			//	var oView = this.getView();

			//	oView.bindElement({
			//		path: "/Products(" + oArgument.SelectedItem + ")"
			//	});
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Hello_world_xml_2_pantalles.view.V_Second
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Hello_world_xml_2_pantalles.view.V_Second
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Hello_world_xml_2_pantalles.view.V_Second
		 */
		//	onExit: function() {
		//
		//	}

        
		goToFirst: function() {

			// Now Get the Router Info
			//	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// Tell the Router to Navigate To Route_Tar_1
			//	oRouter.navTo("First_page", {});

			//Altre mètode;
			//Get the instance of the history and check the previous hash. 
			//If a hash is found, go one screen back, else take to the default first screen.
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			// Go one screen back if you find a Hash
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			}
			// If you do not find a correct Hash, go to the Source screen using default router;
			else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("", true);
			}

		}

	});

});