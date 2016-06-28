var tableController = {

	table: null,

	setTable: function(table) {
		this.table = table;
	},

	addItem: function(item) {
		if(item) {
			var
			 tbody = tableController.table.tBodies[0],
			    row = tableController.createNewRow(),
			    index = 0;
                
                row.cells[index++].innerHTML = item.final;
                row.cells[index++].innerHTML = item.data;
                row.cells[index++].innerHTML = item.hora;
                
				tableController.createActions(row.cells[index++], item);
                

			tbody.appendChild(row);
		}
	},
    
    
	addList: function(list) {
		if(list && list.length > 0) {
			for (var i = 0; i < list.length; i++) {
				tableController.addItem(list[i]);
			}
		}
	},

	clearList: function() {
		tableController.table.tBodies[0].innerHTML = "";
	},
	
	createNewRow: function() {
		var row = document.createElement('tr');
		row.appendChild(document.createElement('td'));
		row.appendChild(document.createElement('td'));
		row.appendChild(document.createElement('td'));
		
		return row;
    }
    };