const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",

  entry: {
    main: path.resolve("./src/app.js"),
  },

  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },

  module: {
    rules: [
      // CSS 파일 로더 설정
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // 이미지 파일 설정
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/, // jpeg 확장자 수정
        type: "asset/inline",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 20KB 이하 파일은 인라인 처리
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: `마지막 빌드시간 :  ${new Date().toLocaleString()}  입니다!`,
    }),
  ],
};
