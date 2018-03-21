/*
 * @Author: Maggie 
 * @Date: 2018-03-14 16:04:25 
 * @Last Modified by: Maggie
 * @Last Modified time: 2018-03-14 18:36:22
 * 
 * CSV文件导出
 * 支持Antd Table组价使用。
 * 支持合并表头导出格式（支持一层合并）
 * 可以根据render进行渲染
 */
import FileSaver from 'file-saver';
import ReactDOMServer from 'react-dom/server';

const HTML_DECODE = {
	"&lt;": "<",
	"&gt;": ">",
	"&amp;": "&",
	"&nbsp;": " ",
	"&quot;": "\"",
	"&copy;": "©"
};

let renderHtml = function (s) {
	if (typeof s != "string")
		return s;

	return s.replace(/&\w+;|&#\d+;/g, function ($0) {
		let cur = HTML_DECODE[$0];
		if (cur == undefined) {
			let m = $0.match(/\d+/);
			if (m) {
				let curInit = m[0];
				curInit = (curInit == 160) ? 32 : curInit;
				cur = String.fromCharCode(curInit);
			} else {
				cur = $0;
			}
		}
		return cur;
	});
};

function renderText(renderObj) {
    let reactHtml = ReactDOMServer.renderToString(renderObj);
    let value = reactHtml
		.replace(/<(?:button|input)\s+value=(?:'([^']*)'|"([^"]*)")[^>]*>/g, "$1$2\u0000")
		.replace(/<[^>]*>/g, "\u0000")
		.replace(/^\u0000+|\u0000+$/g, "")
		.replace(/\u0000+/g, " ")
		.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

	return renderHtml(value);
};

function formatText(text) {
    if(text === null || text === undefined){
        return '';
    }else if(typeof(text) === 'object' && text.props && typeof(text.props) === 'object'){
        return renderText(text);
    }else{
        return text
    }
}

const ExportExc = {
    saveFile(cloumns, dataSource) {
        let data = this.formatData(cloumns, dataSource);
        let exportConent = "\uFEFF";
        let blob = new Blob([data], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, 'export.csv');
    },

    formatData(cloumns, dataSource) {
        let title = cloumns.map(v => {
            if(v.children){
                let childTitle =  v.children.map(child => {
                    return formatText(child.title);
                })
                return childTitle.join();
            }
            return formatText(v.title);
        });
        let data = dataSource.map((item, index) => {
            let arr = cloumns.map(v => {
                if(v.children){
                    let subData =  v.children.map(child => {
                        if(child.render) return formatText(child.render(item[child.dataIndex], item, index));
                        return formatText(item[child.dataIndex]);
                    });
                    return subData.join();
                }
                if(v.render) return formatText(v.render(item[v.dataIndex], item, index));
                return formatText((item[v.dataIndex]));
            });
            return arr.join();
        });

        return title.join() + '\n' + data.join('\n');
    }
}

export default ExportExc;