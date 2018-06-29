const { injectBabelPlugin, compose } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
    // antdesign css+js按需加载
    config = injectBabelPlugin(
        [
            "import",
            { libraryName: "antd", libraryDirectory: "es", style: true }
        ],
        config
    );
    // antdesign默认变量覆盖
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@font-size-base": "12px" }
    })(config, env);
    return config;
};
