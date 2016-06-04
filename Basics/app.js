Ext.define('Person', {
	extend: 'Ext.Container',
    xtype: 'menu-buttons',
    layout: 'vbox',	
    name : 'Unknown',
	getName: function() {
	alert("Student Name : " + this.name);
	},
	constructor: function(sName) {
		if(sName)this.name = sName;
	},
	statics: {
		staticMethod: function() {
			alert("Static Method 1");
		}
	},		
});
Ext.application({
    name : 'Fiddle',

    launch : function() {
        Ext.create('Person', {
            renderTo: Ext.getBody()
        });
    }
});
/*
var student1 = new Person('John');
student1.getName();

Person.staticMethod();
*/