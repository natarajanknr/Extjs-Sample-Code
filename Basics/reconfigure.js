Ext.onReady(function() {
  var json1 = [{
    "dialogue": "cheers",
    "surname": "Rajini"
  }, {
    "dialogue": "ketavan",
    "surname": "Simbu"
  }, {
    "dialogue": "Athu",
    "surname": "Ajith"
  }, {
    "dialogue": "Antha bayam",
    "surname": "Vijay"
  }];
  var json2 = [{
    "name": "vetri",
    "age": "23"
  }, {
    "name": "kumar",
    "age": "42"
  }, {
    "name": "sreejith",
    "age": "30"
  }, {
    "name": "Siva",
    "age": "28"
  }];
  var getKeysFromJson = function(obj) {
    var keys = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  var createStore = function(json) {
    var keys = getKeysFromJson(json[0]);
    return Ext.create('Ext.data.Store', {
      fields: keys,
      data: json
    });
  };
  var createColumns = function(json) {
    var keys = getKeysFromJson(json[0]);
    return keys.map(function(field) {
      return {
        text: Ext.String.capitalize(field),
        width: 150,
        dataIndex: field
      };
    });
  };
  var grid = Ext.create('Ext.grid.Panel', {
    renderTo: Ext.getBody(),
    columns: [],
    dockedItems: {
      xtype: 'toolbar',
      dock: 'top',
      items: [{
        xtype: 'button',
        text: 'Movie stars',
        listeners: {
          'click': function() {
            grid.reconfigure(createStore(json1), createColumns(json1));
          }
        }
      }, {
        xtype: 'button',
        text: 'Name List',
        listeners: {
          'click': function() {
            grid.reconfigure(createStore(json2), createColumns(json2));
          }
        }
      }]
    }
  });
});