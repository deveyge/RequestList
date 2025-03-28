import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      };

    const cssLoader = {
        test: /\.css$/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev 
                        ? '[path][name]__[local]--[hash:base64:5]' 
                        : '[hash:base64:8]',
                        namedExport: false,
                    },
                }
            },
            "postcss-loader",
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const fileLoader = {
        test: /\.(png|jpg|gif|woff2|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      };


    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ]
}
