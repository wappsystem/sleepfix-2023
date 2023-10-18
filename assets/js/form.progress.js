      //-------------------------------------
      m.after_insert = function (data,index) {
        var P_record=$vm.vm['__ID'].input.participant_record;
        var tp=$vm.module_list[$vm.vm['__ID'].name].timepoint;
        var task=$vm.module_list[$vm.vm['__ID'].name].task_name;
        var records={};
        var first_progress_form=false;
        jQuery.ajaxSetup({async:false});
        $vm.request({cmd:"find-s",table:$vm.module_list['progress-mod-form'].Table,options:{}},function(res){
            if(res.permission==false){
                alert("No permission");
                return;
            }
            if(res.result.length==0){
                first_progress_form=true;
            }
            else{
                records=res.result[0]
            }
        })
        if(first_progress_form){
            if (m.prefix == undefined) { $vm.load_module('progress-new-form', '', {record:records,progress:task,time:tp,goback:1,participant_record:P_record}); }
            else {$vm.load_module(m.prefix + 'progress-new-form', '', {record:records,progress:task,time:tp,goback:1,participant_record:P_record});}    
        }
        else{
            if (m.prefix == undefined) { $vm.load_module('progress-mod-form', '', {record:records,progress:task,time:tp,goback:1,participant_record:P_record}); }
            else {$vm.load_module(m.prefix + 'progress-mod-form', '', {record:records,progress:task,time:tp,goback:1,participant_record:P_record});}
        }
        jQuery.ajaxSetup({async:true});
    }
    //-------------------------------------
