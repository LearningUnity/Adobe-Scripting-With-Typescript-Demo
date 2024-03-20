// you can import some functions from other lib
// 现在你可以导入模块了
import { add } from "./lib";


$.writeln(add(1, 2));
// open aftereffect and create three layer and run this
// 打开ae, 并且创建3个图层
const comp = app.project.activeItem;

if (comp instanceof CompItem) {
    let numChildren = comp.numLayers;
    if (numChildren > 0) {
        alert('first layer name is: ' + comp.layer(1).name);
    } else {
        alert("Please create some layers");
        throw new Error("Please create some layers");
    }
} else {
    alert("Please open a comp");
    throw new Error("Please open a comp");
}

// now right click and run ae script
// 现在右键, 运行ae脚本
