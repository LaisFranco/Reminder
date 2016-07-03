var reminderDAO =  {
    
    DB_KEY: "reminder",
    NEW: 1,
    UPDATE:2,
    
    list: [],
    
    save:function(reminder,tableController){
        var list = reminderDAO.list;
            index = reminderDAO.getindex(reminder);
    
    if(index >-1){
        list[index] = reminder;
        reminderDAO.serealizeAndSave();
        return reminderDAO.UPDATE;
    }else {
        list.push(reminder);
        if(tableController){
            tableController.addItem(reminder);
        }
    }
     reminderDAO.serealizeAndSave();
     return reminderDAO.NEW;
    
},
    retrieve:function(){
        var list = reminderDAO.list;
        if(list && list.length >0){
            return list;
        }
         return null;
    },
      get:function(final){
          var list = reminderDAO.list,
              index = reminderDAO.getindex({'final':final});
        if (index > -1){
            var reminder = list[index];
            return reminder;
        }
          return null;
      },
          
        getindex:function(reminder){
            var list = reminderDAO.list,
                item = {};
            for(var i = 0; i<list.length; i++){
                item = list[i];
                return i;
            }
             return -1 ;
        },          
          
    serializeAndSave: function() {
		var list = reminderDAO.list;
		if(list && list.length > 0) {
			var json = JSON.stringify(reminderDAO.list);
			window.localStorage.setItem(reminderDAO.DB_KEY, json);
		}
	},

	unserializeAndParse: function() {
		var json = window.localStorage.getItem(reminderDAO.DB_KEY);
		if(json) {
			reminderDAO.list = JSON.parse(json);
		}
		else {
			reminderDAO.list = [];
		}
	}

};

        
        
    

    
    