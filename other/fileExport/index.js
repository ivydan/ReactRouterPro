var excelExport = function () {
    //获取table的内容装成一个xls格式的字符串
    var oHtml = document.getElementsByClassName('tableA')[0].outerHTML;

    //将table和style组成一个HTML
    var excelHtml = `
    <html>
      <head>
        <meta charset='utf-8' />
        <style>
            .tableA {
                border-collapse: collapse;
            }
            .tableA .title th{
                height: 50px;
                font-size: 24px;
                font-family: '微软雅黑';
                font-weight: 700;
            }
            .tableA tr th {
                border: 1px #000 solid;
                height: 40px;
                background: #efefef;
            }
            .tableA tr td {
                padding: 0 40px;
                border: 1px #000 solid;
                height: 40px;
                text-align: center;
            }
            .tableA .footer td {
                font-size: 20px;
                font-weight: 700;
            }
            </style>
        </head>
        <body>
            ${oHtml}
        </body>
        </html>
    `;
    //生成xls文件并通过a标签下载到本地
    //URL.createObjectURL()静态方法会创建一个DOMSting，其中包含一个表示参数中给出的对象的URL，这个URL的生命周期和创建他的窗口中的
    //document绑定，这个心的URL对象表示指定的File对象或Blob对象

    // var excelBlob = new Blob([excelHtml], {type: "application/vnd.ms-excel"});
    // var excelBlob = new Blob([excelHtml], {type: "text/csv;charset=utf-8"});

    /**
     * 
     * 最后一步下载 分两种方式：
     * 1. 通过a标签下载到本地了，下载前可以利用a标签的download属性命名
     * 2. 使用FileSaver进行文件下载。
     * 
     */

    //使用A标签进行文件下载
    // var oA = document.createElement('a');
    // oA.href = URL.createObjectURL(excelBlob);
    // oA.download = 'student.csv';
    // oA.click();

    //使用FileSaver方式进行文件下载
    var exprotContent = "\uFEFF";
    var SBlob = new Blob([exprotContent + "标题,标题,标题\n1, 2, 3\n4, 5, 6"], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(SBlob, "sblob.csv");

}