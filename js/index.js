var index = {
    
    init: function() {
        index.setForm();
        index.listReminder();
    },
    
    
    
    setForm: function(){
        var form = document.getElementById('form-reminder');
        if(form){
            form.onsubmit = function(){
                index.saveReminder(form);
                return false;
            };
        }
    },
    
       
    
    saveReminder: function(form){
        var reminder = {};
        reminder.final = form.final.value;
        reminder.data = form.data.value;
        reminder.hora = form.hora.value;
        
        if(reminderDAO.save(reminder) == reminderDAO.NEW){
           tableController.addItem(reminder);
        } else {
            tableController.clearList();
            index.listReminder();
        }
               
            form.final.value = 
            form.data.value =
            form.hora.value = "";

 },
     
     setTable: function(){
        var table = document.getElementById('reminder');
        tableController.setTable(table);
    },
        
        listReminder: function () {
            index.setTable();
            var reminderList = reminderDAO.retrieve();
            if (reminderList && reminderList.length){
                tableController.addList(reminderList);
            }
        }

};
//inicialização
          
reminderDAO.unserializeAndParse();
index.init();
        
        
            
            
           