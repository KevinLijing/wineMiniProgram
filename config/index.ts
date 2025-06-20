import { defineConfig, type UserConfigExport } from '@tarojs/cli'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import devConfig from './dev'
import prodConfig from './prod'

export default defineConfig<'webpack5'>(async (merge, { command, mode }) => {
  const baseConfig: UserConfigExport<'webpack5'> = {
    projectName: 'wineMiniProgram1',
    sourceRoot: 'src',
    outputRoot: 'dist',
    framework: 'react',
    compiler: 'webpack5',
    copy: {
      patterns: [],
      options: {}
    },

    mini: {
      // 只在这里声明 PostCSS 插件，key 不能为空
      postcss: {
        pxtransform: {
          enable: true,
          config: {}
        },
        // 补上 url，否则可能拿不到这个插件也报错
        url: {
          enable: true,
          config: { limit: 1024 }
        },
        cssModules: {
          enable: false,
          config: {
            namingPattern: 'module',
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      // Less loader 的选项要放到这里，而不是 postcss 里
      lessLoaderOption: {
        lessOptions: {
          javascriptEnabled: true
        }
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)
      }
    },

    h5: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false,
          config: {
            namingPattern: 'module',
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      // 同样，Less 配置也独立出来
      lessLoaderOption: {
        lessOptions: {
          javascriptEnabled: true
        }
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)
      }
    },

    rn: {
      appName: 'taroDemo',
      postcss: {
        cssModules: {
          enable: false
        }
      }
    }
  }

  if (process.env.NODE_ENV === 'development') {
    return merge({}, baseConfig, devConfig)
  }
  return merge({}, baseConfig, prodConfig)
})
