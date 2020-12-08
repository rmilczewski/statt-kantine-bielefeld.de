function getMonday() {
    d = new Date();
    var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}
function getFriday() {
    d = new Date();
    var day = getMonday(d);
    diff = day.getDate() + 4;
    return new Date(d.setDate(diff));
}
function getWeek(d) {
    d = new Date(d);
    var DonnerstagDat = new Date(d.getTime() + (3-((d.getDay()+6) % 7)) * 86400000);
    KWJahr = DonnerstagDat.getFullYear();
    var DonnerstagKW = new Date(new Date(KWJahr,0,4).getTime() + (3-((new Date(KWJahr,0,4).getDay()+6) % 7)) * 86400000);
    return Math.floor(1.5 + (DonnerstagDat.getTime() - DonnerstagKW.getTime()) / 86400000/7);
}

var monday = getMonday();
var friday = getFriday();
var monday_date = monday.getDate();
var friday_date = friday.getDate();
var monday_month = monday.getMonth() + 1;
var friday_month = friday.getMonth() + 1;
var monday_str = ((monday_date < 10) ? "0" + monday_date : monday_date) + "." + ((monday_month < 10) ? "0" + monday_month : monday_month) + ".";
var friday_str = ((friday_date < 10) ? "0" + friday_date : friday_date) + "." + ((friday_month < 10) ? "0" + friday_month : friday_month) + ".";

var week = monday_str + " - " + friday_str + (friday.getYear() + 1900);
var kw_num = getWeek(monday);
var kw = "kw" + (kw_num < 10 ? "0" : "") + kw_num;