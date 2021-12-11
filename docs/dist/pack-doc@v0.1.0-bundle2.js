(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{27:function(a,e,p){var i=p(28);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,p(1).default)("data-quickpaper-4a3e2478",i,!0)},28:function(a,e,p){(a.exports=p(0)(!1)).push([a.i,"",""])},33:function(a,e,p){"use strict";p.r(e);var i={};p(27);i.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-4a3e2478":""},[a("header",{id:"fixed-top","data-quickpaper-4a3e2478":""},["如何使用"]),a("h2",{id:"fixed-config","data-quickpaper-4a3e2478":""},["添加配置文件"]),a("p",{"data-quickpaper-4a3e2478":""},["首先，你需要在项目中新建一个js文件（比如",a("span",{class:"important","data-quickpaper-4a3e2478":""},["'pack.config.js'"]),"），并写入下面内容："]),a("pre",{"q-code":"","data-quickpaper-4a3e2478":""},["module.exports = {↵    // 在此处添加具体的配置条目↵};"]),a("p",{"data-quickpaper-4a3e2478":""},["然后，根据实际情况，写入需要的具体配置条目即可。"]),a("h3",{id:"fixed-config-items","data-quickpaper-4a3e2478":""},["可配置条目"]),a("h4",{id:"fixed-config-items-entry","data-quickpaper-4a3e2478":""},["entry"]),a("p",{"data-quickpaper-4a3e2478":""},["必输，打包入口文件。"]),a("h4",{id:"fixed-config-items-output","data-quickpaper-4a3e2478":""},["output"]),a("p",{"data-quickpaper-4a3e2478":""},["必输，打包后的代码存放的位置。"]),a("h4",{id:"fixed-config-items-redirect","data-quickpaper-4a3e2478":""},["redirect"]),a("p",{"data-quickpaper-4a3e2478":""},["可选，对导入node_modules中的包进行重定向。"]),a("p",{"data-quickpaper-4a3e2478":""},["例如："]),a("pre",{"q-code":"","data-quickpaper-4a3e2478":""},["redirect: {↵    'nefbl': \"./src/lib/nefbl.js\"↵}"]),a("h4",{id:"fixed-config-items-loader","data-quickpaper-4a3e2478":""},["loader"]),a("p",{"data-quickpaper-4a3e2478":""},["可选，对于各种文件如何解析的配置（一般而言，除了js、json等文件，都需要配置对应的解析方法，如果你想作为模块导入的话）。"]),a("pre",{"q-code":"","data-quickpaper-4a3e2478":""},["loader: [{↵    test: /\\.(js|ts)$/,↵    handler:Array<Function|String>↵},...]"]),a("p",{"data-quickpaper-4a3e2478":""},["handler的值是一个数组，成员可以是函数或字符串（处理顺序从右往左依次进行），如果是函数，格式如下："]),a("pre",{"q-code":"","data-quickpaper-4a3e2478":""},["function(source) {↵    // 进行处理↵    // 当前上下文this中包含了一些有用的信息↵}"]),a("p",{"data-quickpaper-4a3e2478":""},["如果是字符串，会引入字符串对应的包进行处理，包应该导出一个函数，格式和上面函数一样。"]),a("h4",{id:"fixed-config-items-task","data-quickpaper-4a3e2478":""},["task"]),a("p",{"data-quickpaper-4a3e2478":""},["可选，类似生命周期，在特定时期触发。可选的钩子如下："]),a("pre",{"q-code":"","data-quickpaper-4a3e2478":""},["task:{↵↵}"]),a("h4",{id:"fixed-config-items-mode","data-quickpaper-4a3e2478":""},["mode"]),a("p",{"data-quickpaper-4a3e2478":""},["必输，当前环境，应该是一个字符串，只有两个值可选："]),a("ul",{"data-quickpaper-4a3e2478":""},[a("li",{"data-quickpaper-4a3e2478":""},["【1】",a("span",{class:"important","data-quickpaper-4a3e2478":""},["development"]),"：开发模式，配合命令'pack_dev'使用。"]),a("li",{"data-quickpaper-4a3e2478":""},["【2】",a("span",{class:"important","data-quickpaper-4a3e2478":""},["production"]),"：打包模式，配合命令'pack_build'使用。"])]),a("h4",{id:"fixed-config-items-devServer","data-quickpaper-4a3e2478":""},["devServer"]),a("p",{"data-quickpaper-4a3e2478":""},["对于开发模式是必输，表示用于辅助开发的本地服务器。"]),a("pre",{"q-code":"","data-quickpaper-4a3e2478":""},['devServer: {↵    contentBase: "./",↵    port: 20000↵}']),a("h4",{id:"fixed-config-items-min","data-quickpaper-4a3e2478":""},["min"]),a("p",{"data-quickpaper-4a3e2478":""},["可选，只在打包模式有效，布尔值类型，默认true，表示打包后进行代码压缩。"]),a("h2",{id:"fixed-terminal","data-quickpaper-4a3e2478":""},["命令"]),a("p",{"data-quickpaper-4a3e2478":""},["配置文件准备好了以后，根据实际情况，配置不同的启动命令即可："]),a("pre",{"q-code":"","data-quickpaper-4a3e2478":""},["scripts:{↵    'dev':'pack_dev --config pack.config.js'↵}"]),a("p",{"data-quickpaper-4a3e2478":""},["上面是开发的时候使用的命令，会启动一个服务器，编辑后立刻可以看到效果。如果是开发完毕，需要进行最终打包："]),a("pre",{"q-code":"","data-quickpaper-4a3e2478":""},["scripts:{↵    'build':'pack_pkg --config pack.config.js'↵}"]),a("p",{"data-quickpaper-4a3e2478":""},["上面的配置是在",a("span",{class:"important","data-quickpaper-4a3e2478":""},["package.json"]),"中进行添加。"])])};e.default=i}}]);