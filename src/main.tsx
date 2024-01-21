// you can import some functions from other lib
// 现在你可以导入模块了
import { add } from "./lib";

// open aftereffect and create three layer and run this
// 打开ae 并且创建3个图层
const activeLayer = app.project.activeItem;

// now right click and run ae script
// 现在右键, 运行ae脚本
alert((activeLayer as CompItem).layer(add(1, 2)).name);
