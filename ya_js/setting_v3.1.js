
//var socketip="http://qinniaofu.coolingesaving.com:63001";//http://47.106.255.38:63000  http://qinniaofu.coolingesaving.com:63001
var socketip = "http://qinniaofu.coolingesaving.com:63001";//http://47.106.255.38:63000  http://qinniaofu.coolingesaving.com:63001
if (document.location.protocol == "https:") {
    socketip = "https://www.coolingesaving.com:63010";
}
var hosp_list = {
    '10': '阳新县人民医院',
    '11': '阳新县人民医院',
    '21': '钦州市第一人民医院',
    '22': '钦州市第二人民医院',
    '24': '钦州市钦南区人民医院',
    '25': '钦州市中西医结合医院',
    '26': '钦州市南珠社区卫生院',
    '27': '钦州市妇幼保健院',
    '51': '隆回县第一人民医院',
    '52': '隆回县第二人民医院',
    '53': '隆回县妇幼保健院',
    '54': '隆回县中医医院',
    '81': '长宁县中医医院',
    '12': '阳新县中医医院',
    '61': '周至县人民医院',
    '28': '灵山县人民医院',
    '30': '灵山县人民医院',
    '70': '黄冈市中心医院',
    '75': '湖北航天医院',
    '31': '灵山县第二人民医院',
    '85': '吕梁市人民医院',
    '86': '衡阳市中心医院',
    '33': '浦北县第三人民医院',
    '34': '钦州新华社区卫生服务中心',
    '35': '浦北县第二人民医院',
    '13': '阳新县中医医院',
    '65': '浠水县人民医院',
    '66': '浠水县团陂镇松山卫生院',
    '67': '浠水县总医院兰溪分院',
    '68': '浠水县总医院团陂分院',
    '71': '浠水县总医院关口分院',
    '72': '浠水县总医院丁司垱分院',
    '73': '浠水县总医院散花分院',
    '14': '阳新县率洲管理区卫生院',
    '15': '阳新县韦源口卫生院',
    '16': '阳新国泰医院',
    '76': '浠水县中医院',
    '84': '怀仁市人民医院',
    '17': '阳新县白沙镇中心卫生院',
    '40': '凤庆县人民医院',
}

var report_page_url = "qrcode_report_page.html";
var wws_report_page_url = "qr_report/index.html#/";
var wws_report_array = Array("14", "15", "16", "17", "18", "33", "34", "66", "67", "68", "71", "72", "73")
var default_yyx_url = "../../../../../qingniao/index.html"
var yyx_hosp_url = Array();
//yyx_hosp_url["86"] = "../../../../../cloud/qingniao/index.html"
yyx_hosp_url["86"] = "http://www.coolingesaving.com/cloud/qingniao/index.html"
//yyx_hosp_url["14"] = "../../../../../yxqingniao/index.html"
function get_hosp_name(study_id, hospital) {
    hot_name = hosp_list[hospital];
    if ((study_id == "935984745725" || study_id == "539741") && hospital == "t8") {
        hot_name = "阳新县人民医院";
    }
    if (study_id == "CT0839560" && hospital == "t8") {
        hot_name = "阳新县中医医院";
    }
    if (study_id == "GE-CT6985175" && hospital == "t8") {
        hot_name = "长宁县中医医院";
    }
    if (study_id == "10845" && hospital == "t8") {
        hot_name = "隆回县第二人民医院";
    }
    if (study_id == "539741" && hospital == "t8") {
        hot_name = "阳新县人民医院";
    }
    if (study_id == "27309659" && hospital == "t8") {
        hot_name = "周至县人民医院";
    }
    if ((study_id == "569874" || study_id == "236984") && hospital == "t8") {
        hot_name = "钦州市第一人民医院";
    }
    if (study_id == "587425" && hospital == "t8") {
        hot_name = "******医院";
    }
    if (study_id == "784216" && hospital == "t8") {
        hot_name = "黄冈市中心医院";
    }
    if (study_id == "10280" && hospital == "t8") {
        hot_name = "湖北航天医院";
    }
    if (study_id == "20011786" && hospital == "t8") {
        hot_name = "大别山区域医疗中心";
    }
    if (study_id == "CT1659621" && hospital == "t8") {
        hot_name = "阳新县人民医院";
    }
    if (study_id == "APPI20211201299004" && hospital == "t8") {
        hot_name = "吕梁市人民医院";
    }
    if (study_id == "96527518" && hospital == "t8") {
        hot_name = "衡阳市中心医院";
    }
    if (study_id == "92561821" && hospital == "t8") {
        hot_name = "衡阳市中心医院";
    }
    if (study_id == "742591" && hospital == "t8") {
        hot_name = "钦州市第二人民医院";
    }
    if ((study_id == "CT19108832109" || study_id == "CT20221012050") && hospital == "t8") {
        hot_name = "浠水县人民医院";
    }

    return hot_name
}

function default_load() {
    if (getPar('d')) {
        show_home_page_div_back_icon();
    }
}