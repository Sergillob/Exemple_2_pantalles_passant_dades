sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Hello_world_xml_2_pantalles.controller.V_First", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Hello_world_xml_2_pantalles.view.V_First
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Hello_world_xml_2_pantalles.view.V_First
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Hello_world_xml_2_pantalles.view.V_First
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Hello_world_xml_2_pantalles.view.V_First
		 */
		//	onExit: function() {
		//
		//	}

  
		goToSecond: function(Evt) {
            //Recuperem valor entrat al input
            //var vInput = this.byId("IdInput").getValue();
            // Get Property of the Clicked Item....
            debugger;
			var selectAnimal = Evt.getSource().getBindingContext().getProperty("id");
            var selectAnimal2 = Evt.getSource().getBindingContext().getProperty("Name");
             //Si agaféssim un event de la List que es el "itemPress" (enlloc del press del StandardListItem) 
             //també funcionaria, pero com l'event es diferent(mirar API reference paràmeteres de l'event), la manera de 
             //agafar el valor seria;
             // Evt.getParameters().listItem.getProperty("title")   on title es la propietat del StandardListItem!!!!
            
			// Now Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// Tell the Router to Navigate To Route_Tar_1
			//oRouter.navTo("Second_page", {});
			
			//o si es amb parámetre;
			oRouter.navTo("Second_page", {
				SelectInput:selectAnimal2
			});
		}

	});

});