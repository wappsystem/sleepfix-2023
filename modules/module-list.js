(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var I=$vm.hosting_path;
    var m=$vm.module_list;
    var api="wapp";
    //-------------------------------------------------------------------------------------
    m[p+"not_elig1"]         ={url:H+"/form-grid/survey/not_elig1.html"},
    m[p+"thank-you"]         ={url:H+"/form-grid/survey/thank-you.html"},
    m[p+"survey-data"]       ={url:H+"/form-grid/survey/eligibility-data.html",Table:"screening-sleepfix",router:1 };
    m[p+"survey-all-data"]   ={url:H+"/form-grid/survey/eligibility-data.html",Table:"screening-sleepfix",router:1 };
    m[p+"contact-data"]      ={url:H+"/form-grid/survey/contact-data.html",Table:"contact-sleepfix",form_module:"contact-form",router:1,taskname:"Contact details" };
    m[p+"contact-form"]      ={url:H+"/form-grid/survey/contact-form.html",Table:"contact-sleepfix"};
    
    m[p+"participant-data"] ={url:H+"/form-grid/participant/participant-data.html",Table:"contact-sleepfix"
                            ,form_module:"participant-form",
                            child_panel:"panel-child",
                            online_questionnaire_bl:"oq-bl",
                            online_questionnaire_fu:"oq-fu",
                            online_questionnaire_w1:"oq-w1",
                            online_questionnaire_w3:"oq-w3",
                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"},
                            participant_export:"ID,Subject_ID,Screening_Number,Randomisation_Number,Subject_Initials,Gender,DOB",
                            task_name:"Participants Data",router:1
    };                   
    m[p+"participant-form"] ={url:H+"/form-grid/participant/participant-form.html",Table:"contact-sleepfix",task_name:"Participant's Details"};
    m[p+"notes-data"]       ={url:H+"/form-grid/backend/notes-data.html",Table:"notes-sleepfix",form_module:"notes-form"},
    m[p+"notes-form"]       ={url:H+"/form-grid/backend/notes-form.html",Table:"notes-sleepfix"},

    m[p+"oq-bl"] ={url:I+"/oq-bl.html"};
    m[p+"oq-fu"] ={url:I+"/oq-fu.html"};
    m[p+"oq-w1"] ={url:I+"/oq-w1.html"};
    m[p+"oq-w3"] ={url:I+"/oq-w3.html"};
    m[p+"shm1-w0"] ={url:I+"/nfuo.html"},
    m[p+"shm2-w1"] ={url:I+"/ktpa.html"},
    m[p+"shm3-w2"] ={url:I+"/jvqs.html"},

    
    m[p+"panel-main"]=    	        {url:H+"/panels/main.html",router:1,task_name:"Study Panel"};
    m[p+"panel-child"]=              {url:H+"/panels/child.html",task_name:"Data Entry"};
    m[p+"panel-oq-bl"]=              {url:H+"/panels/oq-bl.html"};
    m[p+"panel-oq-fu"]=              {url:H+"/panels/oq-fu.html"};
    m[p+"panel-oq-w1"]=              {url:H+"/panels/oq-w1.html"};
    m[p+"panel-oq-w3"]=              {url:H+"/panels/oq-w3.html"};
    m[p+"randomisation-table-data"]=		{url:H+"/form-grid/backend/randomisation-table-data.html",Table:"randomisation-table-sleepfix",form_module:"randomisation-table-form",task_name:"Randomisation Table"},
    m[p+"randomisation-table-form"]=		{url:H+"/form-grid/backend/randomisation-table-form.html",Table:"randomisation-table-sleepfix",task_name:"Randomisation Table"},
    m[p+"access-code-data"] ={url:H+"/form-grid/backend/access-code-data.html",Table:"access-code-sleepfix",form_module:"access-code-form", task_name:"Access Code" };
    m[p+"access-code-form"] ={url:H+"/form-grid/backend/access-code-form.html",Table:"access-code-sleepfix", task_name:"Access Code" };

    m[p+"progress-new-form"]      ={url:H+"/form-grid/backend/progress-new-form.html",   Table:"progress-sleepfix",task_name:"Progress form"};
    m[p+"progress-mod-form"]      ={url:H+"/form-grid/backend/progress-mod-form.html",   Table:"progress-sleepfix",task_name:"Progress form"};

    m[p+"adverse-event-data"] ={url:H+"/form-grid/unscheduled/adverse-event-data.html",Table:"adverse-event-sleepfix",form_module:"adverse-event-form", task_name:"Adverse event" };
    m[p+"adverse-event-form"] ={url:H+"/form-grid/unscheduled/adverse-event-form.html",Table:"adverse-event-sleepfix", task_name:"Adverse event" };
    m[p+"serious-adverse-event-data"] ={url:H+"/form-grid/unscheduled/serious-adverse-event-data.html",Table:"serious-adverse-event-sleepfix",form_module:"serious-adverse-event-form", task_name:"Serious Adverse event" };
    m[p+"serious-adverse-event-form"] ={url:H+"/form-grid/unscheduled/serious-adverse-event-form.html",Table:"serious-adverse-event-sleepfix", task_name:"Serious Adverse event" };
    m[p+"serious-adverse-event-follow-up-data"] ={url:H+"/form-grid/unscheduled/serious-adverse-event-follow-up-data.html",Table:"serious-adverse-event-follow-up-sleepfix",form_module:"serious-adverse-event-follow-up-form", task_name:"Serious Adverse event follow-up" };
    m[p+"serious-adverse-event-follow-up-form"] ={url:H+"/form-grid/unscheduled/serious-adverse-event-follow-up-form.html",Table:"serious-adverse-event-follow-up-sleepfix", task_name:"Serious Adverse event follow-up" };

    m[p+"start-date"]      ={url:H+"/form-grid/backend/date-start-form.html",   Table:"progress-sleepfix", task_name:"Start Date"};
    m[p+"shem-data"]      ={url:H+"/form-grid/backend/date-shem-form.html",   Table:"progress-sleepfix", task_name:"SHEM"};
    m[p+"fu-data"]      ={url:H+"/form-grid/backend/date-fu-form.html",   Table:"progress-sleepfix", task_name:"Follow Up"};
    m[p+"ac-data"]      ={url:H+"/form-grid/backend/date-ac-form.html",   Table:"progress-sleepfix", task_name:"Access Code Sent"};
    m[p+"ae-data"]      ={url:H+"/form-grid/backend/date-ae-form.html",   Table:"progress-sleepfix", task_name:"Adverse Event Check-in"};
    m[p+"progress-data"]      ={url:H+"/form-grid/backend/progress-data.html",   Table:"progress-sleepfix",router:1};
    m[p+"control-panel-data"]      ={url:H+"/form-grid/backend/control-panel-data.html",   Table:"progress-sleepfix",router:1};
    m[p+"randomisation-check-data"]      ={url:H+"/form-grid/backend/randomisation-check-data.html",   Table:"progress-sleepfix"};
    m[p+"send-email-control-data"]      ={url:H+"/form-grid/backend/send-email-control-data.html",   Table:"progress-sleepfix"};
    m[p+"send-email-treatment-data"]      ={url:H+"/form-grid/backend/send-email-treatment-data.html",   Table:"progress-sleepfix"};
    m[p+"send-email"]      ={url:H+"/form-grid/backend/send-email-form.html",   Table:"progress-sleepfix", task_name:"send email"};
    m[p+"fitbit-sent"]      ={url:H+"/form-grid/backend/fitbit-sent-form.html",   Table:"progress-sleepfix", task_name:"Date - Fitbit Sent"};

    m[p+"AEC-w1-data"]               ={url:H+"/form-grid/backend/AEC-data.html",Table:"AEC-w1-sleepfix",form_module:"AEC-w1-form",task_name:"Week 1 - Adverse Event Check-in"};
    m[p+"AEC-w1-form"]               ={url:H+"/form-grid/backend/AEC-form.html",Table:"AEC-w1-sleepfix",task_name:"Week 1 - Adverse Event Check-in",timepoint:'w1'};
    m[p+"AEC-w3-data"]               ={url:H+"/form-grid/backend/AEC-data.html",Table:"AEC-w3-sleepfix",form_module:"AEC-w3-form",task_name:"Week 3 - Adverse Event Check-in"};
    m[p+"AEC-w3-form"]               ={url:H+"/form-grid/backend/AEC-form.html",Table:"AEC-w3-sleepfix",task_name:"Week 3 - Adverse Event Check-in",timepoint:'w3'};
    m[p+"demographics-bl-data"]      ={url:H+"/form-grid/backend/demographics-data.html",Table:"demographics-bl-sleepfix",form_module:"demographics-bl-form",task_name:"Baseline - Demographics"};
    m[p+"demographics-bl-form"]      ={url:H+"/form-grid/backend/demographics-form.html",Table:"demographics-bl-sleepfix",task_name:"Baseline - Demographics",timepoint:'bl'};
    m[p+"BPI-bl-data"]               ={url:H+"/form-grid/backend/BPI-data.html",Table:"BPI-bl-sleepfix",form_module:"BPI-bl-form",task_name:"Baseline - BPI"};
    m[p+"BPI-bl-form"]               ={url:H+"/form-grid/backend/BPI-form.html",Table:"BPI-bl-sleepfix",task_name:"Baseline - BPI",timepoint:'bl'};
    m[p+"PSQI-bl-data"]               ={url:H+"/form-grid/backend/PSQI-data.html",Table:"PSQI-bl-sleepfix",form_module:"PSQI-bl-form",task_name:"Baseline - PSQI"};
    m[p+"PSQI-bl-form"]               ={url:H+"/form-grid/backend/PSQI-form.html",Table:"PSQI-bl-sleepfix",task_name:"Baseline - PSQI",timepoint:'bl'};
    m[p+"PHQ-2-bl-data"]               ={url:H+"/form-grid/backend/PHQ-2-data.html",Table:"PHQ-2-bl-sleepfix",form_module:"PHQ-2-bl-form",task_name:"Baseline - PHQ-2"};
    m[p+"PHQ-2-bl-form"]               ={url:H+"/form-grid/backend/PHQ-2-form.html",Table:"PHQ-2-bl-sleepfix",task_name:"Baseline - PHQ-2",timepoint:'bl'};
    m[p+"GAD-7-bl-data"]               ={url:H+"/form-grid/backend/GAD-7-data.html",Table:"GAD-7-bl-sleepfix",form_module:"GAD-7-bl-form",task_name:"Baseline - GAD-7"};
    m[p+"GAD-7-bl-form"]               ={url:H+"/form-grid/backend/GAD-7-form.html",Table:"GAD-7-bl-sleepfix",task_name:"Baseline - GAD-7",timepoint:'bl'};
    m[p+"PBAS-bl-data"]               ={url:H+"/form-grid/backend/PBAS-data.html",Table:"PBAS-bl-sleepfix",form_module:"PBAS-bl-form",task_name:"Baseline - PBAS"};
    m[p+"PBAS-bl-form"]               ={url:H+"/form-grid/backend/PBAS-form.html",Table:"PBAS-bl-sleepfix",task_name:"Baseline - PBAS",timepoint:'bl'};
    m[p+"EQ-5D-bl-data"]               ={url:H+"/form-grid/backend/eq-5d-data.html",Table:"EQ-5D-bl-sleepfix",form_module:"EQ-5D-bl-form",task_name:"Baseline - EQ-5D"};
    m[p+"EQ-5D-bl-form"]               ={url:H+"/form-grid/backend/eq-5d-form.html",Table:"EQ-5D-bl-sleepfix",task_name:"Baseline - EQ-5D",timepoint:'bl'};
    m[p+"eHEALs-bl-data"]               ={url:H+"/form-grid/backend/eHEALS-data.html",Table:"eHEALs-bl-sleepfix",form_module:"eHEALs-bl-form",task_name:"Baseline - eHEALs"};
    m[p+"eHEALs-bl-form"]               ={url:H+"/form-grid/backend/eHEALS-form.html",Table:"eHEALs-bl-sleepfix",task_name:"Baseline - eHEALs",timepoint:'bl'};

    m[p+"med-use-fu-data"]               ={url:H+"/form-grid/backend/med-use-data.html",Table:"med-use-fu-sleepfix",form_module:"med-use-fu-form",task_name:"Follow-up - Med-use"};
    m[p+"med-use-fu-form"]               ={url:H+"/form-grid/backend/med-use-form.html",Table:"med-use-fu-sleepfix",task_name:"Follow-up - Med-use",timepoint:'fu'};
    m[p+"BPI-fu-data"]               ={url:H+"/form-grid/backend/BPI-data.html",Table:"BPI-fu-sleepfix",form_module:"BPI-fu-form",task_name:"Follow-up - BPI"};
    m[p+"BPI-fu-form"]               ={url:H+"/form-grid/backend/BPI-form.html",Table:"BPI-fu-sleepfix",task_name:"Follow-up - BPI",timepoint:'fu'};
    m[p+"ISI-fu-data"]               ={url:H+"/form-grid/backend/ISI-data.html",Table:"ISI-fu-sleepfix",form_module:"ISI-fu-form",task_name:"Follow-up - ISI"};
    m[p+"ISI-fu-form"]               ={url:H+"/form-grid/backend/ISI-form.html",Table:"ISI-fu-sleepfix",task_name:"Follow-up - ISI",timepoint:'fu'};
    m[p+"PSQI-fu-data"]               ={url:H+"/form-grid/backend/PSQI-data.html",Table:"PSQI-fu-sleepfix",form_module:"PSQI-fu-form",task_name:"Follow-up - PSQI"};
    m[p+"PSQI-fu-form"]               ={url:H+"/form-grid/backend/PSQI-form.html",Table:"PSQI-fu-sleepfix",task_name:"Follow-up - PSQI",timepoint:'fu'};
    m[p+"PHQ-2-fu-data"]               ={url:H+"/form-grid/backend/PHQ-2-data.html",Table:"PHQ-2-fu-sleepfix",form_module:"PHQ-2-fu-form",task_name:"Follow-up - PHQ-2"};
    m[p+"PHQ-2-fu-form"]               ={url:H+"/form-grid/backend/PHQ-2-form.html",Table:"PHQ-2-fu-sleepfix",task_name:"Follow-up - PHQ-2",timepoint:'fu'};
    m[p+"GAD-7-fu-data"]               ={url:H+"/form-grid/backend/GAD-7-data.html",Table:"GAD-7-fu-sleepfix",form_module:"GAD-7-fu-form",task_name:"Follow-up - GAD-7"};
    m[p+"GAD-7-fu-form"]               ={url:H+"/form-grid/backend/GAD-7-form.html",Table:"GAD-7-fu-sleepfix",task_name:"Follow-up - GAD-7",timepoint:'fu'};
    m[p+"PBAS-fu-data"]               ={url:H+"/form-grid/backend/PBAS-data.html",Table:"PBAS-fu-sleepfix",form_module:"PBAS-fu-form",task_name:"Follow-up - PBAS"};
    m[p+"PBAS-fu-form"]               ={url:H+"/form-grid/backend/PBAS-form.html",Table:"PBAS-fu-sleepfix",task_name:"Follow-up - PBAS",timepoint:'fu'};
    m[p+"EQ-5D-fu-data"]               ={url:H+"/form-grid/backend/eq-5d-data.html",Table:"EQ-5D-fu-sleepfix",form_module:"EQ-5D-fu-form",task_name:"Follow-up - EQ-5D"};
    m[p+"EQ-5D-fu-form"]               ={url:H+"/form-grid/backend/eq-5d-form.html",Table:"EQ-5D-fu-sleepfix",task_name:"Follow-up - EQ-5D",timepoint:'fu'};

    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
