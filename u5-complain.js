var information = {};

function checkDate() {
  let valueDate = document.getElementById("day").value;
  if (!valueDate) {
    alert("Date must be filled out");
    return false;
  }
  const date = new Date(valueDate);
  let year = date.getFullYear() + 543;
  let month = date.getMonth() + 1;
  let monthStr = "" + month;
  if(month < 10)  {monthStr = "0" + month; }
  let day = date.getDate();
  let dayStr = "" + day;
  if(day < 10)  {dayStr = "0" + day; }
  information["date"] = "" + year + "-" + monthStr + "-" + dayStr;
}

function checkFirstname() {
  let valueFirstname = document.getElementById("firstname").value;
  if (valueFirstname == "") {
    alert("First name must be filled out");
    return false;
  }

  let valueNametitle = document.getElementById("nametitle").value;
  information["studentFirstName"] = valueNametitle + "" + valueFirstname;
}

function checkLastname() {
  let valueLastname = document.getElementById("lastname").value;
  if (valueLastname == "") {
    alert("Last name must be filled out");
    return false;
  }
  information["studentLastName"] = "" + valueLastname;
}

function checkID() {
  let valueID = document.getElementById("id").value;
  if (!valueID || valueID.length != 10 || isNaN(valueID)) {
    alert("Student ID must be filled out");
    return false;
  }
  information["studentId"] = "" + valueID;
  let valueYear = document.getElementById("classyear").value;
  information["studentYear"] = "" + valueYear;
  let valueMajor = document.getElementById("major").value;
  information["studentField"] = "" + valueMajor;
}

function checkAddress() {
  let valueHouse = document.getElementById("house").value;
  let valueMoo = document.getElementById("moo").value;
  let valueSubarea = document.getElementById("subarea").value;
  let valueArea = document.getElementById("area").value;
  let valueProvince = document.getElementById("province").value;
  let valuePostcode = document.getElementById("post").value;

  if (valueHouse == "") {
    alert("House number must be filled out");
    return false;
  }
  if (valueMoo == "") {
    alert("Moo must be filled out");
    return false;
  }
  if (valueSubarea == "") {
    alert("Sub area must be filled out");
    return false;
  }
  if (valueArea == "") {
    alert("Area must be filled out");
    return false;
  }
  if (valueProvince == "") {
    alert("Province must be filled out");
    return false;
  }
  if (valuePostcode == "" || valuePostcode.length != 5) {
    alert("Postal code must be filled out and correctly");
    return false;
  }
  information["house"] = "" + valueHouse;
  information["moo"] = "" + valueMoo;
  information["subarea"] = "" + valueSubarea;
  information["area"] = "" + valueArea;
  information["province"] = "" + valueProvince;
  information["post"] = "" + valuePostcode;
}

function checkNumber()
{
  let valuePhonenumber = document.getElementById("phone").value;
  let valueHousenumber = document.getElementById("tel").value;
  if (valuePhonenumber == "" || valuePhonenumber.length != 10 || isNaN(valuePhonenumber || valuePhonenumber.charAt(0) != "0")) {
    alert("Phone number must be filled out and correctly");
    return false;
  }

  if (valueHousenumber.length != 10 || isNaN(valueHousenumber || valueHousenumber.charAt(0) != "0") || valueHousenumber.charAt(1) != "1") {
    alert("House phone number must be filled out and correctly");
    return false;
  }
  information["phone"] = "" + valuePhonenumber;
  information["tel"] = "" + valueHousenumber;
}

function checkProfessor() {
  let valueProfessor = document.getElementById("professor").value;
  if (valueProfessor == "") {
    alert("Advisor must be filled out and correctly");
    return false;
  }
  information["advisor"] = "" + valueProfessor;
}


var temp;
var countRow = 1;
var arrHead = new Array();
arrHead = ['description', 'codesub', 'sub', 'sec', 'time', 'credit', 'prof', ' permission'];

function addTable(table){ 
  var Tab = document.getElementById(table);
  var rowCnt = Tab.rows.length;
  var tr = Tab.insertRow(rowCnt);
  if (table == 'addTable')
    tbname = 'add';
  else tbname = 'del';

  for (var i = 0; i < arrHead.length; i++) {
      var td = document.createElement('td');
      td = tr.insertCell(i);
      if (i == 0) { 
          var ele = document.createElement('input');
          ele.setAttribute('id', `${tbname}column${rowCnt}0`);
          ele.setAttribute('type', 'text');
          ele.setAttribute('value','');
          td.appendChild(ele);
      }
      else if (i == 1) { 
          var ele = document.createElement('input');
          ele.setAttribute('id', `${tbname}column${rowCnt}1`);
          ele.setAttribute('type', 'text');
          ele.setAttribute('value','');
          td.appendChild(ele);
      }
      else if (i == 2) { 
        var ele = document.createElement('input');
        ele.setAttribute('id', `${tbname}column${rowCnt}2`);
        ele.setAttribute('type', 'text');
        ele.setAttribute('value','');
        td.appendChild(ele);
    }
      else if (i == 5){
          var ele = document.createElement('input');
          ele.setAttribute('id', 'my-id');
          ele.setAttribute('type', 'number');
          ele.setAttribute('value', '0');
          td.appendChild(ele);
      }
      else if (i == 7){
        var ele = document.createElement('input');
        ele.setAttribute('id', 'my-id');
        ele.setAttribute('type', 'checkbox');
        ele.setAttribute('value', 'on');
        td.appendChild(ele);
    }
      else{
          var ele = document.createElement('input');
          ele.setAttribute('id', 'my-id');
          ele.setAttribute('type', 'text');
          ele.setAttribute('value', '');

          td.appendChild(ele);
      }
  }
}

function deleteTable(table) {
  var table = document.getElementById(table);
  var rowCount = table.rows.length;
  var row = table.deleteRow(rowCount-1);
  rowCount--;
}

function table_to_array(table) {
  var myTab = document.getElementById(table);
  var arrValues = [];

  for (row = 1; row < myTab.rows.length; row++) {
    var informationFromArray = {};
    var count = 0;
      for (c = 0; c < myTab.rows[row].cells.length; c++) {  
            var element = myTab.rows.item(row).cells[c];
            if(element.childNodes[0].value == '' || element.childNodes[0].value < 1)
            { count -= 1;}
            if(c == 1)
            {
              informationFromArray["codesub"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 2)
            {
              informationFromArray["sub"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 3)
            {
              informationFromArray["sec"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 4)
            {
              informationFromArray["time"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 5)
            {
              informationFromArray["credit"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 6)
            {
              informationFromArray["prof"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 7)
            {
              if(element.childNodes[0].value == "on")
              {
                informationFromArray["permission"] = false;
              }
              else
              {
                informationFromArray["permission"] = true;
              }
            }
        }
    if(count == 6)
    {
      arrValues.push(informationFromArray);
    }
    else
    {
      if(table == 'addTable')
      {
        alert = "All information must be filled out\n";
        return 0;
      }
      else if(table == 'dropTable')
      {
        alert = "All information must be filled out\n";
        return 0;
      }
    }
  }

  if(table == 'addTable')
  {
    information["addSubjectList"] = arrValues;
  }
  else if(table == 'deleteTable')
  {
    information["dropSubjectList"] =  arrValues;
  }
}

function checkReason()
{
  let valueReason = document.getElementById("reason").value;
  if (valueReason == "") {
    alertMessage = "Reason must be filled out\n";
    return false;
  }
  information["reason"] = "" + valueReason;
}

function checkSubmit() {
  checkDate();
  checkFirstname();
  checkLastname();
  checkID();
  checkProfessor();
  checkAddress();
  checkNumber();
  checkReason();
  table_to_array("addTable");
  table_to_array("deleteTable");
  
  console.log(JSON.stringify(information, null, 4));
}

