//-------------------------------------
var sending=function(data,timepoint){
    //m.after_update = function (data, res) {
        var Group=data.Group
        console.log(JSON.stringify(data))
        console.log(timepoint)
        var tb = $vm.module_list['participant-data'].Table;
        var p_uid=parseInt(data.Participant_uid);
        var qry = { UID: p_uid };
        var pw="";
        jQuery.ajaxSetup({ async: false });
        $vm.request({ cmd: "find", table: tb, query: qry, options: {} }, function (res) {
            if (res.result.length != 0) {
                pw=res.result[0].Data._Password;
            }
            else $vm.alert("Sorry, something went wrong!")
        })
        jQuery.ajaxSetup({ async: true });

        var db=""; if(window.location.toString().indexOf('tb=demo')!=-1) db="&tb=demo";
        var d="";  if(window.location.toString().indexOf('_d=1')!=-1) d="&_d=1";
        var p="";  if(window.location.toString().indexOf('_p=1')!=-1) p="&_p=1";
        var u="?username="+data.Participant_uid+"&password="+pw;
        var q_url="";
        var param = [];
        var url='';
        var sms_url='';
        switch(timepoint){
            case 'AC_Sent': 
                console.log("Sending access code")
                q_url=$vm.module_list['ac'].url; //Link to pdf manual
                url='access code '
                sms_url='sms access code'
                console.log("URL: "+url)
                //url='https://prod-17.australiasoutheast.logic.azure.com:443/workflows/d069b8f35ca440e9ad646a7dab4416db/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=l8CSTL3as3zy8tx2r_lL9NMftcBqeGTlTd7TQFkBR2U'; //email
                //sms_url='https://prod-25.australiasoutheast.logic.azure.com:443/workflows/4226fb1dee4a42c285f0b1773f21c09d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=j1bTOs54K1gk78bU8RS2JhTNhIhjdFUxYY8bp2Yzk1s'; //sms
            break;
            case 'w0_shem_1':
                if(Group=='Sleep Health Education'){
                    q_url=$vm.module_list['shm1-w0'].url;
                    url='sleep health education module 1'
                    sms_url='sms sleep health education module 1'
                    console.log("URL: "+url)
                    // url='https://prod-24.australiasoutheast.logic.azure.com:443/workflows/dc511733756c484db5bdee6ca32ca7da/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=G2-IyVgK37a5uPvxC4s1UXa9J2Q9bnSNMKdBiZ48u2s'; //email
                    // sms_url='https://prod-00.australiasoutheast.logic.azure.com:443/workflows/7d2b2f0d3f054368bea344d81d5c5c4c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=poLsecm1c-10PLMh1e13Jd-C2Hmh1LIRBdgXXDyjifM'; //sms
                }
            break;
            case 'w1_shem_2':
                if(Group=='Sleep Health Education'){
                    q_url=$vm.module_list['shm2-w1'].url;
                    url='sleep health education module 2'
                    sms_url='sms sleep health education module 2'
                    // url='https://prod-31.australiasoutheast.logic.azure.com:443/workflows/e14ad809e9be47218671b61bb3e58019/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wckgH65FkgyvVOv7eRnPZ5V9ArexTiwBxgXSzDSbua4'
                    // sms_url='https://prod-24.australiasoutheast.logic.azure.com:443/workflows/fd58eb6a3d6741b38b1a1a8882a9dd6f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=22xYGKwDdbllur6jkFJcaiO_not0XM5PYSklbyHlqU8'
                }
            break;
            case 'w2_shem_3':
                if(Group=='Sleep Health Education'){
                    q_url=$vm.module_list['shm3-w2'].url;
                    url='sleep health education module 3'
                    sms_url='sms sleep health education module 3'
                    // url='https://prod-31.australiasoutheast.logic.azure.com:443/workflows/e14ad809e9be47218671b61bb3e58019/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wckgH65FkgyvVOv7eRnPZ5V9ArexTiwBxgXSzDSbua4'
                    // sms_url='https://prod-24.australiasoutheast.logic.azure.com:443/workflows/fd58eb6a3d6741b38b1a1a8882a9dd6f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=22xYGKwDdbllur6jkFJcaiO_not0XM5PYSklbyHlqU8'
                }
            break;
            case 'w4_email':
                if(Group=='Sleep Health Education'){
                    q_url=$vm.module_list['oq-w4'].url+u+db+d+p;
                    url='week 4 email'
                    sms_url='sms week 4 email'
                    // url='https://prod-12.australiasoutheast.logic.azure.com:443/workflows/8591bebd51e342b498acea0b31011c88/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fqV-rRuvvq22FfxPGEpYiJn1yIwYRspTIoq1KKkVyEE'
                    // sms_url='https://prod-29.australiasoutheast.logic.azure.com:443/workflows/c6334a1b6a4a4a36a4d64106524de972/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OOHAbF5Zvy_Cm92lp8L4DgS_MP4o8GKhyqPx1fL1qkc'
                }
                else{
                    q_url=$vm.module_list['oq-w4'].url+u+db+d+p;
                    url='week 4 email - treatment'
                    sms_url='sms week 4 email - treatment'
                    // url='https://prod-05.australiasoutheast.logic.azure.com:443/workflows/8cd5575a4a2f4d0f813f405118253314/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4GApilPVMF33esHANqfXGrtfHnJChAyxWgqvwelnAUY'
                    // sms_url='https://prod-25.australiasoutheast.logic.azure.com:443/workflows/9cb4dbf6bcbe4936acefc1395500d796/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Z5BIDX9DM1TGD8AK4-aT8jx2uvj8H_rDYUubLuRPe4g';
                }
                break;
                case 'w4_rem_1':
                    if(Group=='Sleep Health Education'){
                        q_url=$vm.module_list['oq-w4'].url+u+db+d+p;
                        url='week 4 reminder 1'
                        sms_url='sms week 4 reminder 1'
                        // url='https://prod-12.australiasoutheast.logic.azure.com:443/workflows/8591bebd51e342b498acea0b31011c88/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fqV-rRuvvq22FfxPGEpYiJn1yIwYRspTIoq1KKkVyEE'
                        // sms_url='https://prod-29.australiasoutheast.logic.azure.com:443/workflows/c6334a1b6a4a4a36a4d64106524de972/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OOHAbF5Zvy_Cm92lp8L4DgS_MP4o8GKhyqPx1fL1qkc'
                }
                else{
                    q_url=$vm.module_list['oq-w4'].url+u+db+d+p;
                    url='week 4 reminder 1 - treatment'
                    sms_url='sms week 4 reminder 1 - treatment'
                    // url='https://prod-05.australiasoutheast.logic.azure.com:443/workflows/8cd5575a4a2f4d0f813f405118253314/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4GApilPVMF33esHANqfXGrtfHnJChAyxWgqvwelnAUY'
                    // sms_url='https://prod-25.australiasoutheast.logic.azure.com:443/workflows/9cb4dbf6bcbe4936acefc1395500d796/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Z5BIDX9DM1TGD8AK4-aT8jx2uvj8H_rDYUubLuRPe4g';
                }
            break;
            case 'w4_rem_2':
            if(Group=='Sleep Health Education'){
                    q_url=$vm.module_list['oq-w4'].url+u+db+d+p;
                    url='week 4 reminder 2'
                    sms_url='sms week 4 reminder 2'
                    // url='https://prod-05.australiasoutheast.logic.azure.com:443/workflows/8cd5575a4a2f4d0f813f405118253314/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4GApilPVMF33esHANqfXGrtfHnJChAyxWgqvwelnAUY'
                    // sms_url='https://prod-25.australiasoutheast.logic.azure.com:443/workflows/9cb4dbf6bcbe4936acefc1395500d796/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Z5BIDX9DM1TGD8AK4-aT8jx2uvj8H_rDYUubLuRPe4g';
                }
                else{
                    q_url=$vm.module_list['oq-w4'].url+u+db+d+p;
                    url='week 4 reminder 2 - treatment'
                    sms_url='sms week 4 reminder 2 - treatment'
                    // url='https://prod-05.australiasoutheast.logic.azure.com:443/workflows/8cd5575a4a2f4d0f813f405118253314/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4GApilPVMF33esHANqfXGrtfHnJChAyxWgqvwelnAUY'
                    // sms_url='https://prod-25.australiasoutheast.logic.azure.com:443/workflows/9cb4dbf6bcbe4936acefc1395500d796/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Z5BIDX9DM1TGD8AK4-aT8jx2uvj8H_rDYUubLuRPe4g';
                }
            break;
            case 'w8_email':
                if(Group=='Sleep Health Education'){
                    q_url=$vm.module_list['oq-w8'].url+u+db+d+p;
                    url='week 8 email'
                    sms_url='sms week 8 email'
                    // url='https://prod-12.australiasoutheast.logic.azure.com:443/workflows/8591bebd51e342b498acea0b31011c88/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fqV-rRuvvq22FfxPGEpYiJn1yIwYRspTIoq1KKkVyEE'
                    // sms_url='https://prod-29.australiasoutheast.logic.azure.com:443/workflows/c6334a1b6a4a4a36a4d64106524de972/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OOHAbF5Zvy_Cm92lp8L4DgS_MP4o8GKhyqPx1fL1qkc'
                }
                else{
                    q_url=$vm.module_list['oq-w8'].url+u+db+d+p;
                    url='week 8 email - treatment'
                    sms_url='sms week 8 email - treatment'
                    // url='https://prod-05.australiasoutheast.logic.azure.com:443/workflows/8cd5575a4a2f4d0f813f405118253314/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4GApilPVMF33esHANqfXGrtfHnJChAyxWgqvwelnAUY'
                    // sms_url='https://prod-25.australiasoutheast.logic.azure.com:443/workflows/9cb4dbf6bcbe4936acefc1395500d796/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Z5BIDX9DM1TGD8AK4-aT8jx2uvj8H_rDYUubLuRPe4g';
                }
                break;
                case 'w8_rem_1':
                    if(Group=='Sleep Health Education'){
                        q_url=$vm.module_list['oq-w8'].url+u+db+d+p;
                        url='week 8 reminder 1'
                        sms_url='sms week 8 reminder 1'
                        // url='https://prod-12.australiasoutheast.logic.azure.com:443/workflows/8591bebd51e342b498acea0b31011c88/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fqV-rRuvvq22FfxPGEpYiJn1yIwYRspTIoq1KKkVyEE'
                        // sms_url='https://prod-29.australiasoutheast.logic.azure.com:443/workflows/c6334a1b6a4a4a36a4d64106524de972/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OOHAbF5Zvy_Cm92lp8L4DgS_MP4o8GKhyqPx1fL1qkc'
                }
                else{
                    q_url=$vm.module_list['oq-w8'].url+u+db+d+p;
                    url='week 8 reminder 1 - treatment'
                    sms_url='sms week 8 reminder 1 - treatment'
                    // url='https://prod-05.australiasoutheast.logic.azure.com:443/workflows/8cd5575a4a2f4d0f813f405118253314/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4GApilPVMF33esHANqfXGrtfHnJChAyxWgqvwelnAUY'
                    // sms_url='https://prod-25.australiasoutheast.logic.azure.com:443/workflows/9cb4dbf6bcbe4936acefc1395500d796/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Z5BIDX9DM1TGD8AK4-aT8jx2uvj8H_rDYUubLuRPe4g';
                }
            break;
            case 'w8_rem_2':
            if(Group=='Sleep Health Education'){
                    q_url=$vm.module_list['oq-w8'].url+u+db+d+p;
                    url='week 8 reminder 2'
                    sms_url='sms week 8 reminder 2'
                    // url='https://prod-05.australiasoutheast.logic.azure.com:443/workflows/8cd5575a4a2f4d0f813f405118253314/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4GApilPVMF33esHANqfXGrtfHnJChAyxWgqvwelnAUY'
                    // sms_url='https://prod-25.australiasoutheast.logic.azure.com:443/workflows/9cb4dbf6bcbe4936acefc1395500d796/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Z5BIDX9DM1TGD8AK4-aT8jx2uvj8H_rDYUubLuRPe4g';
                }
                else{
                    q_url=$vm.module_list['oq-w8'].url+u+db+d+p;
                    url='week 8 reminder 2 - treatment'
                    sms_url='sms week 8 reminder 2 - treatment'
                    // url='https://prod-05.australiasoutheast.logic.azure.com:443/workflows/8cd5575a4a2f4d0f813f405118253314/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=4GApilPVMF33esHANqfXGrtfHnJChAyxWgqvwelnAUY'
                    // sms_url='https://prod-25.australiasoutheast.logic.azure.com:443/workflows/9cb4dbf6bcbe4936acefc1395500d796/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Z5BIDX9DM1TGD8AK4-aT8jx2uvj8H_rDYUubLuRPe4g';
                }
            break;
        }
        //console.log("DATA: "+JSON.stringify(data))
        param.push(data.email); //0
        param.push(data.name); //1
        param.push(q_url); //2
        if (data.Access_Code!=undefined) param.push(data.Access_Code)
        else param.push(''); //3 Access code
        param.push(data.phone) //4
        param.push(data.cont_pref) //5
        param.push(url) //6
        param.push(sms_url) //7
        //$vm.alert('Send Email:'+param[0]+' First Name:'+param[1]+' Access Code:'+param[3]+' Phone:'+param[4]+' SMS:'+param[5]); 
        //send_email(param);
        console.log(url)              
        console.log(sms_url)              
        console.log(JSON.stringify(param))
        $vm.refresh=1;
        //if(m.change_status==undefined) m.change_status=0;
        m.change_status++;
        window.history.go(-1);                       //modify
    }
    //-------------------------------------
    var send_email = function (param) {
        var url = param[6]
        var sms_url = param[7]
        if(param[5]=='2' || param[5]=='3'){
            var data = {
                "emailaddress": "" + param[0] + "",
                "first_name": "" + param[1] + "",
                "link": "" + param[2] + "",
                "code": "" + param[3] + ""
            }
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                }
                else if (this.readyState == 4 && this.status == 403) {
                }
                if (this.status == 404) {
                    $vm.alert(url + ", 404 (Not found)");
                }
            }
            xmlHttp.open("POST", url, true); // true for asynchronous
            xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.send(JSON.stringify(data));
        }
        //------------------------------------
        //SMS alert
        //------------------------------------
        if(param[5]=='1' || param[5]=='3'){
            var sms_data = {
                "emailaddress": "" + param[4].replace(/-/g,'') + "@e2s.directsms.com.au",
                "first_name": "" + param[1] + "",
                "link": "" + param[2] + "",
                "code": "" + param[3] + ""
            }
            var sms_xmlHttp = new XMLHttpRequest();
            sms_xmlHttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                }
                else if (this.readyState == 4 && this.status == 403) {
                }
                if (this.status == 404) {
                    $vm.alert(url + ", 404 (Not found)");
                }
            }
            sms_xmlHttp.open("POST", sms_url, true); // true for asynchronous
            sms_xmlHttp.setRequestHeader("Content-Type", "application/json");
            sms_xmlHttp.send(JSON.stringify(sms_data));                                        
        }              
    }
    //-------------------------------------
    var get_now_date = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var hh = today.getHours()
        var mn = today.getMinutes()
        var ss = today.getSeconds()
        if (dd < 10) { dd = '0' + dd; }
        if (mm < 10) { mm = '0' + mm; }
        if (mn < 10) { mn = '0' + mn; }
        if (hh < 10) { hh = '0' + hh; }
        if (ss < 10) { ss = '0' + ss; }
        return yyyy + '-' + mm + '-' + dd;
    }
