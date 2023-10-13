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
                            online_questionnaire_w1:"oq-w4",
                            online_questionnaire_w3:"oq-w8",
                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"},
                            participant_export:"ID,Subject_ID,Screening_Number,Randomisation_Number,Subject_Initials,Gender,DOB",
                            task_name:"Participants Data",router:1
    };                   
    m[p+"participant-form"] ={url:H+"/form-grid/participant/participant-form.html",Table:"contact-sleepfix",task_name:"Participant's Details"};
    m[p+"notes-data"]       ={url:H+"/form-grid/backend/notes-data.html",Table:"notes-sleepfix",form_module:"notes-form"},
    m[p+"notes-form"]       ={url:H+"/form-grid/backend/notes-form.html",Table:"notes-sleepfix"},

    m[p+"oq-bl"] ={url:I+"/oq-bl.html"};
    m[p+"oq-w4"] ={url:I+"/oq-w4.html"};
    m[p+"oq-w8"] ={url:I+"/oq-w8.html"};
    m[p+"shm1-w0"] ={url:I+"/nfuo.html"},
    m[p+"shm2-w1"] ={url:I+"/ktpa.html"},
    m[p+"shm3-w2"] ={url:I+"/jvqs.html"},

    
    m[p+"panel-main"]=    	        {url:H+"/panels/main.html",router:1,task_name:"Study Panel"};
    m[p+"panel-child"]=              {url:H+"/panels/child.html",task_name:"Data Entry"};
    m[p+"panel-oq-bl"]=              {url:H+"/panels/oq-bl.html"};
    m[p+"panel-oq-w4"]=              {url:H+"/panels/oq-w4.html"};
    m[p+"panel-oq-w8"]=              {url:H+"/panels/oq-w8.html"};
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
    m[p+"w4-data"]      ={url:H+"/form-grid/backend/date-w4-form.html",   Table:"progress-sleepfix", task_name:"Week 4"};
    m[p+"w8-data"]      ={url:H+"/form-grid/backend/date-w8-form.html",   Table:"progress-sleepfix", task_name:"Week 8"};
    m[p+"ac-data"]      ={url:H+"/form-grid/backend/date-ac-form.html",   Table:"progress-sleepfix", task_name:"Access Code Sent"};
    m[p+"progress-data"]      ={url:H+"/form-grid/backend/progress-data.html",   Table:"progress-sleepfix",router:1};
    m[p+"control-panel--data"]      ={url:H+"/form-grid/backend/control-panel-data.html",   Table:"progress-sleepfix",router:1};
    m[p+"treatment-panel-data"]      ={url:H+"/form-grid/backend/treatment-panel-data.html",   Table:"progress-sleepfix",router:1};
    m[p+"randomisation-check-data"]      ={url:H+"/form-grid/backend/randomisation-check-data.html",   Table:"progress-sleepfix"};
    m[p+"send-email-control-data"]      ={url:H+"/form-grid/backend/send-email-control-data.html",   Table:"progress-sleepfix"};
    m[p+"send-email-treatment-data"]      ={url:H+"/form-grid/backend/send-email-treatment-data.html",   Table:"progress-sleepfix"};
    m[p+"send-email"]      ={url:H+"/form-grid/backend/send-email-form.html",   Table:"progress-sleepfix", task_name:"send email"};

    m[p+"demographics-bl-data"]      ={url:H+"/form-grid/backend/demographics-data.html",Table:"demographics-bl-sleepfix",form_module:"demographics-bl-form",task_name:"Baseline - Demographics"};
    m[p+"demographics-bl-form"]      ={url:H+"/form-grid/backend/demographics-form.html",Table:"demographics-bl-sleepfix",task_name:"Demographics",timepoint:'bl'};
    m[p+"PSQI-bl-data"]               ={url:H+"/form-grid/backend/PSQI-data.html",Table:"PSQI-bl-sleepfix",form_module:"PSQI-bl-form",task_name:"Baseline - PSQI"};
    m[p+"PSQI-bl-form"]               ={url:H+"/form-grid/backend/PSQI-form.html",Table:"PSQI-bl-sleepfix",task_name:"PSQI",timepoint:'bl'};
    m[p+"PHQ-bl-data"]               ={url:H+"/form-grid/backend/PHQ-data.html",Table:"PHQ-bl-sleepfix",form_module:"PHQ-bl-form",task_name:"Baseline - PHQ-8"};
    m[p+"PHQ-bl-form"]               ={url:H+"/form-grid/backend/PHQ-form.html",Table:"PHQ-bl-sleepfix",task_name:"PHQ-8",timepoint:'bl'};
    m[p+"GAD-bl-data"]               ={url:H+"/form-grid/backend/GAD-data.html",Table:"GAD-bl-sleepfix",form_module:"GAD-bl-form",task_name:"Baseline - GAD-7"};
    m[p+"GAD-bl-form"]               ={url:H+"/form-grid/backend/GAD-form.html",Table:"GAD-bl-sleepfix",task_name:"GAD-7",timepoint:'bl'};
    m[p+"FFS-bl-data"]               ={url:H+"/form-grid/backend/FFS-data.html",Table:"FFS-bl-sleepfix",form_module:"FFS-bl-form",task_name:"Baseline - FFS"};
    m[p+"FFS-bl-form"]               ={url:H+"/form-grid/backend/FFS-form.html",Table:"FFS-bl-sleepfix",task_name:"FFS",timepoint:'bl'};
    m[p+"EQ-5D-bl-data"]               ={url:H+"/form-grid/backend/eq-5d-data.html",Table:"EQ-5D-bl-sleepfix",form_module:"EQ-5D-bl-form",task_name:"Baseline - EQ-5D"};
    m[p+"EQ-5D-bl-form"]               ={url:H+"/form-grid/backend/eq-5d-form.html",Table:"EQ-5D-bl-sleepfix",task_name:"EQ-5D",timepoint:'bl'};
    m[p+"SMP-bl-data"]               ={url:H+"/form-grid/backend/SMP-data.html",Table:"SMP-bl-sleepfix",form_module:"SMP-bl-form",task_name:"Baseline - SMP"};
    m[p+"SMP-bl-form"]               ={url:H+"/form-grid/backend/SMP-form.html",Table:"SMP-bl-sleepfix",task_name:"SMP",timepoint:'bl'};

    m[p+"ISI-w4-data"]               ={url:H+"/form-grid/backend/ISI-data.html",Table:"ISI-w4-sleepfix",form_module:"ISI-w4-form",task_name:"Week 4 - ISI"};
    m[p+"ISI-w4-form"]               ={url:H+"/form-grid/backend/ISI-form.html",Table:"ISI-w4-sleepfix",task_name:"Week 4 - ISI",timepoint:'w4'};
    m[p+"AEC-w4-data"]               ={url:H+"/form-grid/backend/AEC-data.html",Table:"AEC-w4-sleepfix",form_module:"AEC-w4-form",task_name:"Week 4 - Adverse Event Check-in"};
    m[p+"AEC-w4-form"]               ={url:H+"/form-grid/backend/AEC-form.html",Table:"AEC-w4-sleepfix",task_name:"Week 4 - Adverse Event Check-in",timepoint:'w4'};


    m[p+"ISI-w8-data"]               ={url:H+"/form-grid/backend/ISI-data.html",Table:"ISI-w8-sleepfix",form_module:"ISI-w8-form",task_name:"Week 8 - ISI"};
    m[p+"ISI-w8-form"]               ={url:H+"/form-grid/backend/ISI-form.html",Table:"ISI-w8-sleepfix",task_name:"Week 8 - ISI",timepoint:'w8'};
    m[p+"PSQI-w8-data"]               ={url:H+"/form-grid/backend/PSQI-data.html",Table:"PSQI-w8-sleepfix",form_module:"PSQI-w8-form",task_name:"Week 8 - PSQI"};
    m[p+"PSQI-w8-form"]               ={url:H+"/form-grid/backend/PSQI-form.html",Table:"PSQI-w8-sleepfix",task_name:"Week 8 - PSQI",timepoint:'w8'};
    m[p+"GAD-w8-data"]               ={url:H+"/form-grid/backend/GAD-data.html",Table:"GAD-w8-sleepfix",form_module:"GAD-w8-form",task_name:"Week 8 - GAD-7"};
    m[p+"GAD-w8-form"]               ={url:H+"/form-grid/backend/GAD-form.html",Table:"GAD-w8-sleepfix",task_name:"Week 8 - GAD-7",timepoint:'w8'};
    m[p+"PHQ-w8-data"]               ={url:H+"/form-grid/backend/PHQ-data.html",Table:"PHQ-w8-sleepfix",form_module:"PHQ-w8-form",task_name:"Week 8 - PHQ-2"};
    m[p+"PHQ-w8-form"]               ={url:H+"/form-grid/backend/PHQ-form.html",Table:"PHQ-w8-sleepfix",task_name:"Week 8 - PHQ-2",timepoint:'w8'};
    m[p+"FFS-w8-data"]               ={url:H+"/form-grid/backend/FFS-data.html",Table:"FFS-w8-sleepfix",form_module:"FFS-w8-form",task_name:"Week 8 - FFS"};
    m[p+"FFS-w8-form"]               ={url:H+"/form-grid/backend/FFS-form.html",Table:"FFS-w8-sleepfix",task_name:"Week 8 - FFS",timepoint:'w8'};
    m[p+"EQ-5D-w8-data"]               ={url:H+"/form-grid/backend/eq-5d-data.html",Table:"EQ-5D-w8-sleepfix",form_module:"EQ-5D-w8-form",task_name:"Week 8 - EQ-5D"};
    m[p+"EQ-5D-w8-form"]               ={url:H+"/form-grid/backend/eq-5d-form.html",Table:"EQ-5D-w8-sleepfix",task_name:"Week 8 - EQ-5D",timepoint:'w8'};
    m[p+"SMP-w8-data"]               ={url:H+"/form-grid/backend/SMP-data.html",Table:"SMP-w8-sleepfix",form_module:"SMP-w8-form",task_name:"Week 8 - SMP"};
    m[p+"SMP-w8-form"]               ={url:H+"/form-grid/backend/SMP-form.html",Table:"SMP-w8-sleepfix",task_name:"Week 8 - SMP",timepoint:'w8'};
    m[p+"SUS-w8-data"]               ={url:H+"/form-grid/backend/SUS-data.html",Table:"SUS-w8-sleepfix",form_module:"SUS-w8-form",task_name:"Week 8 - SUS"};
    m[p+"SUS-w8-form"]               ={url:H+"/form-grid/backend/SUS-form.html",Table:"SUS-w8-sleepfix",task_name:"Week 8 - SUS",timepoint:'w8'};
    m[p+"AEC-w8-data"]               ={url:H+"/form-grid/backend/AEC-data.html",Table:"AEC-w8-sleepfix",form_module:"AEC-w8-form",task_name:"Week 3 - Adverse Event Check-in"};
    m[p+"AEC-w8-form"]               ={url:H+"/form-grid/backend/AEC-form.html",Table:"AEC-w8-sleepfix",task_name:"Week 3 - Adverse Event Check-in",timepoint:'w8'};

    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
