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
                    return child.title;
                })
                return childTitle.join();
            }
            return v.title;
        });
        let data = dataSource.map((item, index) => {
            let arr = cloumns.map(v => {
                if(v.children){
                    let subData =  v.children.map(child => {
                        if(child.render) return child.render(item[child.dataIndex], item, index)
                        return item[child.dataIndex];
                    });
                    return subData.join();
                }
                if(v.render) return v.render(item[v.dataIndex], item, index);
                return item[v.dataIndex];
            });
            return arr.join();
        });

        return title.join() + '\n' + data.join('\n');
    }
}

export default ExportExc;