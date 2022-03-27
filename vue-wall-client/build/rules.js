const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'thread-loader',
                options: {
                    workers: 4 //设置进程数量
                }
            },
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        '@babel/plugin-transform-runtime',
                        '@babel/plugin-transform-regenerator'
                    ],
                    cacheDirectory: true
                }
            }
        ]
    },
    { test: /\.vue$/, loader: 'vue-loader' },
    {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'url-loader',
        options: {
            name: '[name].[ext]',
            limit: 2048
        }
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
    },
    {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
    },
    {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
            esModule: false
        }
    }
];

module.exports = rules;
