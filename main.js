$(document).ready(function () {
    //weekend/weekday/refresh
    let bgCash = document.getElementById('bgCash')
    let bgTotal = document.getElementById('bgTotal')
    let bbCash = document.getElementById('bbCash')
    let bbTotal = document.getElementById('bbTotal')
    let serverCash = document.getElementById('serverCash')
    let serverTotal = document.getElementById('serverTotal')
    let samonim = document.getElementById('samonim')
    let piggy = document.getElementById('piggy')

    //refreshs page
    $('#refresh').on('click', () => location.reload());

    $('#weekday').on('click', () => {
        $('#numBG').val(1);
        $('#numBB').val(3);
        $('#numServer').val(7);
    })

    $('#weekend').on('click', () => {
        $('#numBG').val(1);
        $('#numBB').val(3.65);
        $('#numServer').val(10);
    })

    $('#calculate').on('click', () => {
        let totalCash = numCash.value;
        if(Number.isInteger(totalCash) || isNaN(totalCash)){
            alert('CASH IS NOT RIGHT!')
        }

        let bgHelper;
        calculateBG = () => {
            if (numBG.value == 1) {
                bgHelper = Math.ceil(totalCash * .015);
            }
            bgCash.innerHTML = bgHelper;
            bgTotal.innerHTML = bgHelper;
        }

        let bbHelper;
        calculateBB = () => {
            let bbSolo;
            if (numBB.value == 3) {
                bbSolo = Math.round((((((totalCash - bgHelper) /
                    numServer.value) * .25) * 2.5) / numBB.value));

                bbCash.innerHTML = bbSolo;
                bbHelper = bbSolo * numBB.value
            }else if (numBB.value == 3.65) {
                let bbAD = Math.round((((((totalCash - bgHelper) /
                    numServer.value) * .25) * 3) / numBB.value));
                let bbD = Math.round((bbAD * .65));
                bbHelper = (bbAD * 3 + bbD)
                console.log(bbHelper)
                console.log(bbD, bbAD)
                bbCash.innerHTML = "Dinner only: " + bbD + "---------" + "All Day: " + bbAD;
                bbCash.innerHTML.breakAt(10)
            } else {
                alert('Error: bus-boys. Can not compute');
            };
            
            bbTotal.innerHTML = bbHelper;
        }

        let serverHelper;
        calculateServer = () => {
            if ((numServer.value % 1) == 0) {
                var serverSolo = Math.floor(((totalCash - bgHelper - bbHelper) /
                    numServer.value));
                serverCash.innerHTML = serverSolo;
                serverHelper = (serverSolo * numServer.value);
            }
            else if ((numServer.value % 1) != 0) {
                var senior = Math.floor(((totalCash - bgHelper - bbHelper) /
                    numServer.value));
                let trainee = Math.floor(senior * (numServer.value % 1));
                let serverTemp = senior * (numServer.value / 1);
                serverCash.innerHTML = 'Senior: ' + senior + + '\nTrainee: ' + trainee;
                serverHelper = ((senior * (numServer.value / 1)) + trainee)
            } else {
                alert('Error: Servers. Can not compute');
            };
            serverTotal.innerHTML = serverHelper
        }

        let samonimHelper;
        calculateSamonim = () => {
            samonimHelper = bgHelper + bbHelper + 0;
            samonim.innerHTML = samonimHelper
        }

        let piggyHelper;
        calculatePiggy = () =>{
            piggyHelper = totalCash - bgHelper - bbHelper - serverHelper;
            piggy.innerHTML = piggyHelper;
        }


        calculateBG();
        calculateBB();
        calculateServer();
        calculateSamonim();
        calculatePiggy();
    })


});

/*
$('.fwdBtn').on('click', function () {


    $( "#mypanel" ).trigger( "updatelayout" );
    this.style.backgroundColor = 'LightSteelBlue';
    var btnId = $(this).attr('tog-lerID');
    $("#" + btnId).slideToggle(300);
    $("#" + btnId).next().slideToggle(300);
    if (btnId == 'defaults') {
        setEmployeeCount(this.id);
    } else if (btnId == 'enterManually') {
        setEmployeeCount(this.id);
    } else if (btnId == 'cashV') {
        calculateTips();
        //$('#enterManually').slideToggle(300);
        //$('#' + btnId).slideToggle(300);
    }
});

//hides current element shows previous element
$('.backBtn').on('click', function(){
    var backBtnId = $(this).attr('tog-lerID');
    this.style.backgroundColor = 'Blue';
    console.log(backBtnId);
    $('#' + backBtnId).slideToggle(300);
    $("#" + backBtnId).next().slideToggle(300);
});


//initialize variables
function setEmployeeCount(helper) {
    if (helper == 'weekday') {
        $('#numBG').val(1);
        $('#numBB').val(3);
        $('#numServer').val(7);
    } else if (helper == 'weekend') {
        console.log(helper);
        $('#numBG').val(1);
        $('#numBB').val(3.65);
        $('#numServer').val(10);
    } else if (helper == 'manual')
        //if($('#manualSelectorBtn').is('click', function(){
        $('#numBG').value;
    $('#numBB').value;
    $('#numServer').value;
    //}))
};
        //calculates servers
        if ((numServer.value % 1) == 0) {
            serv.value = Math.floor(((totalCash.value - bgHelper - bbHelper) /
                numServer.value));
            var servHelper = (serv.value * numServer.value);
        } else if ((numServer.value % 1) != 0) {
            let senior = Math.floor(((totalCash.value - bgHelper - bbHelper) /
                numServer.value));
            let trainnee = Math.floor(senior * (numServer.value % 1));
            servHelper = senior + trainee + 0;
            serv.value = servHelper;
            servHelper = (servHelper * numServer * 1);
        } else {
            alert('Error: Servers. Can not compute');
        };
        //display totalBB
        totalBB.value = bbHelper;
        //display total bussers
        totalBusser.value = bgHelper + bbHelper + 0;

        //calculates remaining cash after distribution
        remainder.value = totalCash.value - totalBusser.value - servHelper;
    }
}
*/
