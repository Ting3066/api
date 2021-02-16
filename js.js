var data, num;
$.getJSON('https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-001?Authorization=CWB-0427E86C-6036-420C-B4DB-251E78D1E025&downloadType=WEB&format=JSON')
  .done(function (re) {
    data = re.cwbopendata.dataset.location;

    $("#location").append(data[0].locationName);

    $("#img").append(`<img src='img/${data[0].weatherElement[0].time[0].parameter.parameterValue}.svg'>`)
    $("#per").text(data[0].weatherElement[4].time[0].parameter.parameterName+"%")
    $("#tempH").text(data[0].weatherElement[1].time[0].parameter.parameterName+"℃")
    $("#tempL").text(data[0].weatherElement[2].time[0].parameter.parameterName+"℃")

    
    

  })

  function show(id,type){
    $("#location").html(data[id].locationName);

    $("#img").html(`<img src='img/${data[id].weatherElement[0].time[0].parameter.parameterValue}.svg'>`)
    $("#tempH").text(data[id].weatherElement[1].time[0].parameter.parameterName+"℃")
    $("#tempL").text(data[id].weatherElement[2].time[0].parameter.parameterName+"℃")
    $("#per").text(data[id].weatherElement[4].time[0].parameter.parameterName+"%")
    $("path").removeClass("active")
    $(type).addClass("active");
  }


  function showTime(){
    let day = new Array();
    day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    var date= new Date();
    var h= date.getHours();
    var m= date.getMinutes();
    var s= date.getSeconds();
    var DN="AM";

    if(h>12){
      DN="PM";
    }
    
    if(h<10){
      h="0"+h;
    }
    if(m<10){
      m="0"+m;
    }
    if(s<10){
      s="0"+s;
    }

    var time= h+":"+m+":"+s;
    document.getElementById("date").innerText=day[date.getDay()]+","+(date.getMonth()+1)+"/"+date.getDate()+" "+time;
    document.getElementById("date").textContent=day[date.getDay()]+","+(date.getMonth()+1)+"/"+date.getDate()+" "+time;
    $("#clock").append(`
    <span class="DN">
      ${DN}
    </span>
    `)
    setTimeout(showTime,1000);
  }

  showTime();