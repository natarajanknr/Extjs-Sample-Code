Ext.define('Student', function() {
	var name = 'Unknow';
	return {
		constructor: function(sName) {
			if(sName) this.name = sName;
		},
		getName:function(){
			alert("Student Name :" + this.name);
		}
	};
});

var student2 = new Student("kumar");
student2.getName();
