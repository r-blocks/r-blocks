// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = {
  items: [
    {
      type: 'category',
      label: 'App',
      items: [
        {
          type: 'category',
          label: 'Functions',
          items: [{ type: 'doc', id: './App/functions/default', label: 'default' }],
        },
      ],
      link: { type: 'doc', id: './App/index' },
    },
    { type: 'doc', id: './index/index', label: 'index' },
    {
      type: 'category',
      label: 'pages',
      items: [
        {
          type: 'category',
          label: 'modules',
          items: [
            {
              type: 'category',
              label: 'blockly',
              items: [
                {
                  type: 'category',
                  label: 'blockly_compressed',
                  items: [
                    {
                      type: 'category',
                      label: 'Namespaces',
                      items: [
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blockly_compressed/namespaces/export=/index',
                          label: 'export=',
                        },
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Variables',
                      items: [
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blockly_compressed/variables/export=',
                          label: 'export=',
                        },
                      ],
                    },
                  ],
                  link: { type: 'doc', id: './pages/modules/blockly/blockly_compressed/index' },
                },
                {
                  type: 'category',
                  label: 'blocks',
                  items: [
                    {
                      type: 'category',
                      label: 'Variables',
                      items: [
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/variables/BlockTypes',
                          label: 'BlockTypes',
                        },
                      ],
                    },
                    {
                      type: 'category',
                      label: 'general',
                      items: [
                        {
                          type: 'category',
                          label: 'glimpse',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/general/glimpse/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/general/glimpse/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'head',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/general/head/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/general/head/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'help',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/general/help/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/general/help/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'lib',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/general/lib/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/general/lib/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'names',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/general/names/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/general/names/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'tail',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/general/tail/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/general/tail/index',
                          },
                        },
                      ],
                    },
                    {
                      type: 'category',
                      label: 'inference',
                      items: [
                        {
                          type: 'category',
                          label: 'anova',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/inference/anova/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/inference/anova/index',
                          },
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/inference/Gproptest/index',
                          label: 'Gproptest',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/inference/Gproptest2/index',
                          label: 'Gproptest2',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/inference/Gslrsummary/index',
                          label: 'Gslrsummary',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/inference/Gxchisqtest/index',
                          label: 'Gxchisqtest',
                        },
                        {
                          type: 'category',
                          label: 'proptest',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/inference/proptest/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/inference/proptest/index',
                          },
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/inference/proptest2/index',
                          label: 'proptest2',
                        },
                        {
                          type: 'category',
                          label: 'regression',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/inference/regression/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/inference/regression/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'ttest',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/inference/ttest/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/inference/ttest/index',
                          },
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/inference/xchisqtest/index',
                          label: 'xchisqtest',
                        },
                      ],
                    },
                    {
                      type: 'category',
                      label: 'statistics',
                      items: [
                        {
                          type: 'category',
                          label: 'correlation',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/statistics/correlation/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/statistics/correlation/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'favstats',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/statistics/favstats/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/statistics/favstats/index',
                          },
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/statistics/Gtallydata/index',
                          label: 'Gtallydata',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/statistics/Gtallydataformat/index',
                          label: 'Gtallydataformat',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/statistics/Gtallysexdata/index',
                          label: 'Gtallysexdata',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/statistics/Gtallysexdata2/index',
                          label: 'Gtallysexdata2',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/statistics/Gtallysexformatdata/index',
                          label: 'Gtallysexformatdata',
                        },
                        {
                          type: 'category',
                          label: 'tally',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/statistics/tally/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/statistics/tally/index',
                          },
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/statistics/tallysexdata/index',
                          label: 'tallysexdata',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/statistics/tallysexdata2/index',
                          label: 'tallysexdata2',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/statistics/tallysexformatdata/index',
                          label: 'tallysexformatdata',
                        },
                      ],
                    },
                    {
                      type: 'category',
                      label: 'visualization',
                      items: [
                        {
                          type: 'category',
                          label: 'gf_bar',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/visualization/gf_bar/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/visualization/gf_bar/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'gf_boxplot',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/visualization/gf_boxplot/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/visualization/gf_boxplot/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'gf_counts',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/visualization/gf_counts/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/visualization/gf_counts/index',
                          },
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/visualization/gf_dens/index',
                          label: 'gf_dens',
                        },
                        {
                          type: 'category',
                          label: 'gf_dens_color',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/visualization/gf_dens_color/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/visualization/gf_dens_color/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'gf_histogram',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/visualization/gf_histogram/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/visualization/gf_histogram/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'gf_percents',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/visualization/gf_percents/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/visualization/gf_percents/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'gf_point',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/visualization/gf_point/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/visualization/gf_point/index',
                          },
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/visualization/Ggf_bar/index',
                          label: 'Ggf_bar',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/visualization/Ggf_dens/index',
                          label: 'Ggf_dens',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/visualization/Ggf_dens_color/index',
                          label: 'Ggf_dens_color',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/visualization/Ggf_histogram/index',
                          label: 'Ggf_histogram',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/visualization/Ggf_histogram_substance/index',
                          label: 'Ggf_histogram_substance',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/blocks/visualization/Ggf_point/index',
                          label: 'Ggf_point',
                        },
                        {
                          type: 'category',
                          label: 'mosaicplot',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/visualization/mosaicplot/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/visualization/mosaicplot/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'pie',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/visualization/pie/variables/default',
                                  label: 'default',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/visualization/pie/index',
                          },
                        },
                      ],
                    },
                  ],
                  link: { type: 'doc', id: './pages/modules/blockly/blocks/index' },
                },
                {
                  type: 'category',
                  label: 'blocks',
                  items: [
                    {
                      type: 'category',
                      label: 'blockly',
                      items: [
                        {
                          type: 'category',
                          label: 'block_animations',
                          items: [
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/block_animations/functions/connectionUiEffect',
                                  label: 'connectionUiEffect',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/block_animations/functions/disconnectUiEffect',
                                  label: 'disconnectUiEffect',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/block_animations/functions/disconnectUiStop',
                                  label: 'disconnectUiStop',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/block_animations/functions/disposeUiEffect',
                                  label: 'disposeUiEffect',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/block_animations/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'browser_events',
                          items: [
                            {
                              type: 'category',
                              label: 'Type Aliases',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/browser_events/type-aliases/Data',
                                  label: 'Data',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/browser_events/variables/Data',
                                  label: 'Data',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/browser_events/functions/bind',
                                  label: 'bind',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/browser_events/functions/conditionalBind',
                                  label: 'conditionalBind',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/browser_events/functions/getScrollDeltaPixels',
                                  label: 'getScrollDeltaPixels',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/browser_events/functions/isRightButton',
                                  label: 'isRightButton',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/browser_events/functions/isTargetInput',
                                  label: 'isTargetInput',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/browser_events/functions/mouseToSvg',
                                  label: 'mouseToSvg',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/browser_events/functions/unbind',
                                  label: 'unbind',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/browser_events/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'bump_objects',
                          items: [
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/bump_objects/functions/bumpIntoBounds',
                                  label: 'bumpIntoBounds',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/bump_objects/functions/bumpIntoBoundsHandler',
                                  label: 'bumpIntoBoundsHandler',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/bump_objects/functions/bumpTopObjectsIntoBounds',
                                  label: 'bumpTopObjectsIntoBounds',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/bump_objects/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'clipboard',
                          items: [
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/clipboard/functions/copy',
                                  label: 'copy',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/clipboard/functions/duplicate',
                                  label: 'duplicate',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/clipboard/functions/paste',
                                  label: 'paste',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/clipboard/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'common',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/common/variables/draggingConnections',
                                  label: 'draggingConnections',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/common/functions/defineBlocksWithJsonArray',
                                  label: 'defineBlocksWithJsonArray',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/common/functions/getBlockTypeCounts',
                                  label: 'getBlockTypeCounts',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/common/functions/getMainWorkspace',
                                  label: 'getMainWorkspace',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/common/functions/getParentContainer',
                                  label: 'getParentContainer',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/common/functions/getSelected',
                                  label: 'getSelected',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/common/functions/setMainWorkspace',
                                  label: 'setMainWorkspace',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/common/functions/setParentContainer',
                                  label: 'setParentContainer',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/common/functions/setSelected',
                                  label: 'setSelected',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/common/functions/svgResize',
                                  label: 'svgResize',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/common/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'contextmenu',
                          items: [
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu/functions/callbackFactory',
                                  label: 'callbackFactory',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu/functions/commentDeleteOption',
                                  label: 'commentDeleteOption',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu/functions/commentDuplicateOption',
                                  label: 'commentDuplicateOption',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu/functions/dispose',
                                  label: 'dispose',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu/functions/getCurrentBlock',
                                  label: 'getCurrentBlock',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu/functions/hide',
                                  label: 'hide',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu/functions/setCurrentBlock',
                                  label: 'setCurrentBlock',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu/functions/show',
                                  label: 'show',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu/functions/workspaceCommentOption',
                                  label: 'workspaceCommentOption',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/contextmenu/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'contextmenu_items',
                          items: [
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerCleanup',
                                  label: 'registerCleanup',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerCollapse',
                                  label: 'registerCollapse',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerCollapseExpandBlock',
                                  label: 'registerCollapseExpandBlock',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerComment',
                                  label: 'registerComment',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerDefaultOptions',
                                  label: 'registerDefaultOptions',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerDelete',
                                  label: 'registerDelete',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerDeleteAll',
                                  label: 'registerDeleteAll',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerDisable',
                                  label: 'registerDisable',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerDuplicate',
                                  label: 'registerDuplicate',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerExpand',
                                  label: 'registerExpand',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerHelp',
                                  label: 'registerHelp',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerInline',
                                  label: 'registerInline',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerRedo',
                                  label: 'registerRedo',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/contextmenu_items/functions/registerUndo',
                                  label: 'registerUndo',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/contextmenu_items/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'css',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/css/variables/content',
                                  label: 'content',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/css/functions/inject',
                                  label: 'inject',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/css/functions/register',
                                  label: 'register',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/css/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'dialog',
                          items: [
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/dialog/functions/alert',
                                  label: 'alert',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/dialog/functions/confirm',
                                  label: 'confirm',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/dialog/functions/prompt',
                                  label: 'prompt',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/dialog/functions/setAlert',
                                  label: 'setAlert',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/dialog/functions/setConfirm',
                                  label: 'setConfirm',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/dialog/functions/setPrompt',
                                  label: 'setPrompt',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/dialog/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'events',
                          items: [
                            {
                              type: 'category',
                              label: 'events',
                              items: [
                                {
                                  type: 'category',
                                  label: 'events',
                                  items: [
                                    {
                                      type: 'doc',
                                      id: './pages/modules/blockly/blocks/blockly/events/events/events/events_abstract/index',
                                      label: 'events_abstract',
                                    },
                                  ],
                                },
                              ],
                              link: {
                                type: 'doc',
                                id: './pages/modules/blockly/blocks/blockly/events/events/index',
                              },
                            },
                          ],
                        },
                        {
                          type: 'category',
                          label: 'extensions',
                          items: [
                            {
                              type: 'category',
                              label: 'Namespaces',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/extensions/namespaces/TEST_ONLY/index',
                                  label: 'TEST_ONLY',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/extensions/functions/apply',
                                  label: 'apply',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/extensions/functions/buildTooltipForDropdown',
                                  label: 'buildTooltipForDropdown',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/extensions/functions/buildTooltipWithFieldText',
                                  label: 'buildTooltipWithFieldText',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/extensions/functions/isRegistered',
                                  label: 'isRegistered',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/extensions/functions/register',
                                  label: 'register',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/extensions/functions/registerMixin',
                                  label: 'registerMixin',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/extensions/functions/registerMutator',
                                  label: 'registerMutator',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/extensions/functions/runAfterPageLoad',
                                  label: 'runAfterPageLoad',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/extensions/functions/unregister',
                                  label: 'unregister',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/extensions/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'field_registry',
                          items: [
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/field_registry/functions/fromJson',
                                  label: 'fromJson',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/field_registry/functions/register',
                                  label: 'register',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/field_registry/functions/unregister',
                                  label: 'unregister',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/field_registry/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'positionable_helpers',
                          items: [
                            {
                              type: 'category',
                              label: 'Namespaces',
                              items: [
                                {
                                  type: 'category',
                                  label: 'bumpDirection',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Variables',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/positionable_helpers/namespaces/bumpDirection/variables/DOWN',
                                          label: 'DOWN',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/positionable_helpers/namespaces/bumpDirection/variables/UP',
                                          label: 'UP',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/positionable_helpers/namespaces/bumpDirection/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'horizontalPosition',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Variables',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/positionable_helpers/namespaces/horizontalPosition/variables/LEFT',
                                          label: 'LEFT',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/positionable_helpers/namespaces/horizontalPosition/variables/RIGHT',
                                          label: 'RIGHT',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/positionable_helpers/namespaces/horizontalPosition/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'verticalPosition',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Variables',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/positionable_helpers/namespaces/verticalPosition/variables/BOTTOM',
                                          label: 'BOTTOM',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/positionable_helpers/namespaces/verticalPosition/variables/TOP',
                                          label: 'TOP',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/positionable_helpers/namespaces/verticalPosition/index',
                                  },
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Type Aliases',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/positionable_helpers/type-aliases/bumpDirection',
                                  label: 'bumpDirection',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/positionable_helpers/type-aliases/horizontalPosition',
                                  label: 'horizontalPosition',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/positionable_helpers/type-aliases/Position',
                                  label: 'Position',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/positionable_helpers/type-aliases/verticalPosition',
                                  label: 'verticalPosition',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/positionable_helpers/variables/Position',
                                  label: 'Position',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/positionable_helpers/functions/bumpPositionRect',
                                  label: 'bumpPositionRect',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/positionable_helpers/functions/getCornerOppositeToolbox',
                                  label: 'getCornerOppositeToolbox',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/positionable_helpers/functions/getStartPositionRect',
                                  label: 'getStartPositionRect',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/positionable_helpers/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'procedures',
                          items: [
                            {
                              type: 'category',
                              label: 'Type Aliases',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/procedures/type-aliases/ProcedureBlock',
                                  label: 'ProcedureBlock',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/procedures/variables/DEFAULT_ARG',
                                  label: 'DEFAULT_ARG',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/procedures/variables/ProcedureBlock',
                                  label: 'ProcedureBlock',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/procedures/functions/allProcedures',
                                  label: 'allProcedures',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/procedures/functions/findLegalName',
                                  label: 'findLegalName',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/procedures/functions/flyoutCategory',
                                  label: 'flyoutCategory',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/procedures/functions/getCallers',
                                  label: 'getCallers',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/procedures/functions/getDefinition',
                                  label: 'getDefinition',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/procedures/functions/isNameUsed',
                                  label: 'isNameUsed',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/procedures/functions/mutateCallers',
                                  label: 'mutateCallers',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/procedures/functions/mutatorOpenListener',
                                  label: 'mutatorOpenListener',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/procedures/functions/rename',
                                  label: 'rename',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/procedures/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'registry',
                          items: [
                            {
                              type: 'category',
                              label: 'Namespaces',
                              items: [
                                {
                                  type: 'category',
                                  label: 'TEST_ONLY',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Variables',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/TEST_ONLY/variables/typeMap',
                                          label: 'typeMap',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/registry/namespaces/TEST_ONLY/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'Type',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Variables',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/BLOCK_DRAGGER',
                                          label: 'BLOCK_DRAGGER',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/CONNECTION_CHECKER',
                                          label: 'CONNECTION_CHECKER',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/CURSOR',
                                          label: 'CURSOR',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/EVENT',
                                          label: 'EVENT',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/FIELD',
                                          label: 'FIELD',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/FLYOUTS_HORIZONTAL_TOOLBOX',
                                          label: 'FLYOUTS_HORIZONTAL_TOOLBOX',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/FLYOUTS_VERTICAL_TOOLBOX',
                                          label: 'FLYOUTS_VERTICAL_TOOLBOX',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/METRICS_MANAGER',
                                          label: 'METRICS_MANAGER',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/RENDERER',
                                          label: 'RENDERER',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/SERIALIZER',
                                          label: 'SERIALIZER',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/THEME',
                                          label: 'THEME',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/TOOLBOX',
                                          label: 'TOOLBOX',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/variables/TOOLBOX_ITEM',
                                          label: 'TOOLBOX_ITEM',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/registry/namespaces/Type/index',
                                  },
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Classes',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/registry/classes/Type',
                                  label: 'Type',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/registry/variables/DEFAULT',
                                  label: 'DEFAULT',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/registry/functions/getAllItems',
                                  label: 'getAllItems',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/registry/functions/getClass',
                                  label: 'getClass',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/registry/functions/getClassFromOptions',
                                  label: 'getClassFromOptions',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/registry/functions/getObject',
                                  label: 'getObject',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/registry/functions/hasItem',
                                  label: 'hasItem',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/registry/functions/register',
                                  label: 'register',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/registry/functions/unregister',
                                  label: 'unregister',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/registry/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'renderers',
                          items: [
                            {
                              type: 'category',
                              label: 'common',
                              items: [
                                {
                                  type: 'category',
                                  label: 'block_rendering',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'renderers',
                                      items: [
                                        {
                                          type: 'category',
                                          label: 'common',
                                          items: [
                                            {
                                              type: 'category',
                                              label: 'debug',
                                              items: [
                                                {
                                                  type: 'category',
                                                  label: 'Functions',
                                                  items: [
                                                    {
                                                      type: 'doc',
                                                      id: './pages/modules/blockly/blocks/blockly/renderers/common/block_rendering/renderers/common/debug/functions/isDebuggerEnabled',
                                                      label: 'isDebuggerEnabled',
                                                    },
                                                    {
                                                      type: 'doc',
                                                      id: './pages/modules/blockly/blocks/blockly/renderers/common/block_rendering/renderers/common/debug/functions/startDebugger',
                                                      label: 'startDebugger',
                                                    },
                                                    {
                                                      type: 'doc',
                                                      id: './pages/modules/blockly/blocks/blockly/renderers/common/block_rendering/renderers/common/debug/functions/stopDebugger',
                                                      label: 'stopDebugger',
                                                    },
                                                  ],
                                                },
                                              ],
                                              link: {
                                                type: 'doc',
                                                id: './pages/modules/blockly/blocks/blockly/renderers/common/block_rendering/renderers/common/debug/index',
                                              },
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/renderers/common/block_rendering/index',
                                  },
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'geras',
                              items: [
                                {
                                  type: 'category',
                                  label: 'geras',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Classes',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/geras/geras/classes/ConstantProvider',
                                          label: 'ConstantProvider',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/geras/geras/classes/Drawer',
                                          label: 'Drawer',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/geras/geras/classes/HighlightConstantProvider',
                                          label: 'HighlightConstantProvider',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/geras/geras/classes/Highlighter',
                                          label: 'Highlighter',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/geras/geras/classes/InlineInput',
                                          label: 'InlineInput',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/geras/geras/classes/PathObject',
                                          label: 'PathObject',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/geras/geras/classes/Renderer',
                                          label: 'Renderer',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/geras/geras/classes/RenderInfo',
                                          label: 'RenderInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/geras/geras/classes/StatementInput',
                                          label: 'StatementInput',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/renderers/geras/geras/index',
                                  },
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'minimalist',
                              items: [
                                {
                                  type: 'category',
                                  label: 'minimalist',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Classes',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/minimalist/minimalist/classes/ConstantProvider',
                                          label: 'ConstantProvider',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/minimalist/minimalist/classes/Drawer',
                                          label: 'Drawer',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/minimalist/minimalist/classes/Renderer',
                                          label: 'Renderer',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/minimalist/minimalist/classes/RenderInfo',
                                          label: 'RenderInfo',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/renderers/minimalist/minimalist/index',
                                  },
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'thrasos',
                              items: [
                                {
                                  type: 'category',
                                  label: 'thrasos',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Classes',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/thrasos/thrasos/classes/Renderer',
                                          label: 'Renderer',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/thrasos/thrasos/classes/RenderInfo',
                                          label: 'RenderInfo',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/renderers/thrasos/thrasos/index',
                                  },
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'zelos',
                              items: [
                                {
                                  type: 'category',
                                  label: 'zelos',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Classes',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/zelos/zelos/classes/BottomRow',
                                          label: 'BottomRow',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/zelos/zelos/classes/ConstantProvider',
                                          label: 'ConstantProvider',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/zelos/zelos/classes/Drawer',
                                          label: 'Drawer',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/zelos/zelos/classes/MarkerSvg',
                                          label: 'MarkerSvg',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/zelos/zelos/classes/PathObject',
                                          label: 'PathObject',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/zelos/zelos/classes/Renderer',
                                          label: 'Renderer',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/zelos/zelos/classes/RenderInfo',
                                          label: 'RenderInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/zelos/zelos/classes/RightConnectionShape',
                                          label: 'RightConnectionShape',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/zelos/zelos/classes/StatementInput',
                                          label: 'StatementInput',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/renderers/zelos/zelos/classes/TopRow',
                                          label: 'TopRow',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/renderers/zelos/zelos/index',
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'category',
                          label: 'shortcut_items',
                          items: [
                            {
                              type: 'category',
                              label: 'Namespaces',
                              items: [
                                {
                                  type: 'category',
                                  label: 'names',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Variables',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/shortcut_items/namespaces/names/variables/COPY',
                                          label: 'COPY',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/shortcut_items/namespaces/names/variables/CUT',
                                          label: 'CUT',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/shortcut_items/namespaces/names/variables/DELETE',
                                          label: 'DELETE',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/shortcut_items/namespaces/names/variables/ESCAPE',
                                          label: 'ESCAPE',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/shortcut_items/namespaces/names/variables/PASTE',
                                          label: 'PASTE',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/shortcut_items/namespaces/names/variables/REDO',
                                          label: 'REDO',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/shortcut_items/namespaces/names/variables/UNDO',
                                          label: 'UNDO',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/shortcut_items/namespaces/names/index',
                                  },
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Type Aliases',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/shortcut_items/type-aliases/names',
                                  label: 'names',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/shortcut_items/functions/registerCopy',
                                  label: 'registerCopy',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/shortcut_items/functions/registerCut',
                                  label: 'registerCut',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/shortcut_items/functions/registerDefaultShortcuts',
                                  label: 'registerDefaultShortcuts',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/shortcut_items/functions/registerDelete',
                                  label: 'registerDelete',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/shortcut_items/functions/registerEscape',
                                  label: 'registerEscape',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/shortcut_items/functions/registerPaste',
                                  label: 'registerPaste',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/shortcut_items/functions/registerRedo',
                                  label: 'registerRedo',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/shortcut_items/functions/registerUndo',
                                  label: 'registerUndo',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/shortcut_items/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'theme',
                          items: [
                            {
                              type: 'category',
                              label: 'themes',
                              items: [
                                {
                                  type: 'category',
                                  label: 'Variables',
                                  items: [
                                    {
                                      type: 'doc',
                                      id: './pages/modules/blockly/blocks/blockly/theme/themes/variables/Classic',
                                      label: 'Classic',
                                    },
                                    {
                                      type: 'doc',
                                      id: './pages/modules/blockly/blocks/blockly/theme/themes/variables/Zelos',
                                      label: 'Zelos',
                                    },
                                  ],
                                },
                              ],
                              link: {
                                type: 'doc',
                                id: './pages/modules/blockly/blocks/blockly/theme/themes/index',
                              },
                            },
                          ],
                        },
                        {
                          type: 'category',
                          label: 'tooltip',
                          items: [
                            {
                              type: 'category',
                              label: 'Type Aliases',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/type-aliases/TipInfo',
                                  label: 'TipInfo',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/variables/HOVER_MS',
                                  label: 'HOVER_MS',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/variables/LIMIT',
                                  label: 'LIMIT',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/variables/MARGINS',
                                  label: 'MARGINS',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/variables/OFFSET_X',
                                  label: 'OFFSET_X',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/variables/OFFSET_Y',
                                  label: 'OFFSET_Y',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/variables/RADIUS_OK',
                                  label: 'RADIUS_OK',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/variables/TipInfo',
                                  label: 'TipInfo',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/functions/bindMouseEvents',
                                  label: 'bindMouseEvents',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/functions/block',
                                  label: 'block',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/functions/createDom',
                                  label: 'createDom',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/functions/dispose',
                                  label: 'dispose',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/functions/getDiv',
                                  label: 'getDiv',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/functions/getTooltipOfObject',
                                  label: 'getTooltipOfObject',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/functions/hide',
                                  label: 'hide',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/functions/isVisible',
                                  label: 'isVisible',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/functions/unbindMouseEvents',
                                  label: 'unbindMouseEvents',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/tooltip/functions/unblock',
                                  label: 'unblock',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/tooltip/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'touch',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/touch/variables/TOUCH_ENABLED',
                                  label: 'TOUCH_ENABLED',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/touch/variables/TOUCH_MAP',
                                  label: 'TOUCH_MAP',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/touch/functions/checkTouchIdentifier',
                                  label: 'checkTouchIdentifier',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/touch/functions/clearTouchIdentifier',
                                  label: 'clearTouchIdentifier',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/touch/functions/getTouchIdentifierFromEvent',
                                  label: 'getTouchIdentifierFromEvent',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/touch/functions/isMouseOrTouchEvent',
                                  label: 'isMouseOrTouchEvent',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/touch/functions/isTouchEvent',
                                  label: 'isTouchEvent',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/touch/functions/longStart',
                                  label: 'longStart',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/touch/functions/longStop',
                                  label: 'longStop',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/touch/functions/setClientFromTouch',
                                  label: 'setClientFromTouch',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/touch/functions/shouldHandleEvent',
                                  label: 'shouldHandleEvent',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/touch/functions/splitEventByTouches',
                                  label: 'splitEventByTouches',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/touch/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'utils',
                          items: [
                            {
                              type: 'category',
                              label: 'utils',
                              items: [
                                {
                                  type: 'category',
                                  label: 'aria',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Namespaces',
                                      items: [
                                        {
                                          type: 'category',
                                          label: 'Role',
                                          items: [
                                            {
                                              type: 'category',
                                              label: 'Variables',
                                              items: [
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/variables/GRID',
                                                  label: 'GRID',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/variables/GRIDCELL',
                                                  label: 'GRIDCELL',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/variables/GROUP',
                                                  label: 'GROUP',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/variables/LISTBOX',
                                                  label: 'LISTBOX',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/variables/MENU',
                                                  label: 'MENU',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/variables/MENUITEM',
                                                  label: 'MENUITEM',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/variables/MENUITEMCHECKBOX',
                                                  label: 'MENUITEMCHECKBOX',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/variables/OPTION',
                                                  label: 'OPTION',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/variables/PRESENTATION',
                                                  label: 'PRESENTATION',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/variables/ROW',
                                                  label: 'ROW',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/variables/TREE',
                                                  label: 'TREE',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/variables/TREEITEM',
                                                  label: 'TREEITEM',
                                                },
                                              ],
                                            },
                                          ],
                                          link: {
                                            type: 'doc',
                                            id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/Role/index',
                                          },
                                        },
                                        {
                                          type: 'category',
                                          label: 'State',
                                          items: [
                                            {
                                              type: 'category',
                                              label: 'Variables',
                                              items: [
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/ACTIVEDESCENDANT',
                                                  label: 'ACTIVEDESCENDANT',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/COLCOUNT',
                                                  label: 'COLCOUNT',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/DISABLED',
                                                  label: 'DISABLED',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/EXPANDED',
                                                  label: 'EXPANDED',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/INVALID',
                                                  label: 'INVALID',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/LABEL',
                                                  label: 'LABEL',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/LABELLEDBY',
                                                  label: 'LABELLEDBY',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/LEVEL',
                                                  label: 'LEVEL',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/ORIENTATION',
                                                  label: 'ORIENTATION',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/POSINSET',
                                                  label: 'POSINSET',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/ROWCOUNT',
                                                  label: 'ROWCOUNT',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/SELECTED',
                                                  label: 'SELECTED',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/SETSIZE',
                                                  label: 'SETSIZE',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/VALUEMAX',
                                                  label: 'VALUEMAX',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/variables/VALUEMIN',
                                                  label: 'VALUEMIN',
                                                },
                                              ],
                                            },
                                          ],
                                          link: {
                                            type: 'doc',
                                            id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/namespaces/State/index',
                                          },
                                        },
                                      ],
                                    },
                                    {
                                      type: 'category',
                                      label: 'Type Aliases',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/type-aliases/Role',
                                          label: 'Role',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/type-aliases/State',
                                          label: 'State',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/functions/setRole',
                                          label: 'setRole',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/functions/setState',
                                          label: 'setState',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/aria/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'colour',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Variables',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/colour/variables/names',
                                          label: 'names',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/colour/functions/blend',
                                          label: 'blend',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/colour/functions/hexToRgb',
                                          label: 'hexToRgb',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/colour/functions/hsvToHex',
                                          label: 'hsvToHex',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/colour/functions/hueToHex',
                                          label: 'hueToHex',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/colour/functions/parse',
                                          label: 'parse',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/colour/functions/rgbToHex',
                                          label: 'rgbToHex',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/colour/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'deprecation',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/deprecation/functions/warn',
                                          label: 'warn',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/deprecation/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'dom',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Namespaces',
                                      items: [
                                        {
                                          type: 'category',
                                          label: 'NodeType',
                                          items: [
                                            {
                                              type: 'category',
                                              label: 'Variables',
                                              items: [
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/namespaces/NodeType/variables/COMMENT_NODE',
                                                  label: 'COMMENT_NODE',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/namespaces/NodeType/variables/DOCUMENT_POSITION_CONTAINED_BY',
                                                  label: 'DOCUMENT_POSITION_CONTAINED_BY',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/namespaces/NodeType/variables/ELEMENT_NODE',
                                                  label: 'ELEMENT_NODE',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/namespaces/NodeType/variables/TEXT_NODE',
                                                  label: 'TEXT_NODE',
                                                },
                                              ],
                                            },
                                          ],
                                          link: {
                                            type: 'doc',
                                            id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/namespaces/NodeType/index',
                                          },
                                        },
                                      ],
                                    },
                                    {
                                      type: 'category',
                                      label: 'Type Aliases',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/type-aliases/NodeType',
                                          label: 'NodeType',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'category',
                                      label: 'Variables',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/variables/HTML_NS',
                                          label: 'HTML_NS',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/variables/SVG_NS',
                                          label: 'SVG_NS',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/variables/XLINK_NS',
                                          label: 'XLINK_NS',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/addClass',
                                          label: 'addClass',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/containsNode',
                                          label: 'containsNode',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/createSvgElement',
                                          label: 'createSvgElement',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/getFastTextWidth',
                                          label: 'getFastTextWidth',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/getFastTextWidthWithSizeString',
                                          label: 'getFastTextWidthWithSizeString',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/getTextWidth',
                                          label: 'getTextWidth',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/hasClass',
                                          label: 'hasClass',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/insertAfter',
                                          label: 'insertAfter',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/measureFontMetrics',
                                          label: 'measureFontMetrics',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/removeClass',
                                          label: 'removeClass',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/removeClasses',
                                          label: 'removeClasses',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/removeNode',
                                          label: 'removeNode',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/setCssTransform',
                                          label: 'setCssTransform',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/startTextWidthCache',
                                          label: 'startTextWidthCache',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/functions/stopTextWidthCache',
                                          label: 'stopTextWidthCache',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/dom/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'idgenerator',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Namespaces',
                                      items: [
                                        {
                                          type: 'category',
                                          label: 'TEST_ONLY',
                                          items: [
                                            {
                                              type: 'category',
                                              label: 'Functions',
                                              items: [
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/idgenerator/namespaces/TEST_ONLY/functions/genUid',
                                                  label: 'genUid',
                                                },
                                              ],
                                            },
                                          ],
                                          link: {
                                            type: 'doc',
                                            id: './pages/modules/blockly/blocks/blockly/utils/utils/idgenerator/namespaces/TEST_ONLY/index',
                                          },
                                        },
                                      ],
                                    },
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/idgenerator/functions/genUid',
                                          label: 'genUid',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/idgenerator/functions/getNextUniqueId',
                                          label: 'getNextUniqueId',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/idgenerator/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'math',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/math/functions/clamp',
                                          label: 'clamp',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/math/functions/toDegrees',
                                          label: 'toDegrees',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/math/functions/toRadians',
                                          label: 'toRadians',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/math/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'object',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/object/functions/deepMerge',
                                          label: 'deepMerge',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/object/functions/inherits',
                                          label: 'inherits',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/object/functions/mixin',
                                          label: 'mixin',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/object/functions/values',
                                          label: 'values',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/object/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'parsing',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/parsing/functions/checkMessageReferences',
                                          label: 'checkMessageReferences',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/parsing/functions/parseBlockColour',
                                          label: 'parseBlockColour',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/parsing/functions/replaceMessageReferences',
                                          label: 'replaceMessageReferences',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/parsing/functions/tokenizeInterpolation',
                                          label: 'tokenizeInterpolation',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/parsing/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'string',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/string/functions/commonWordPrefix',
                                          label: 'commonWordPrefix',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/string/functions/commonWordSuffix',
                                          label: 'commonWordSuffix',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/string/functions/isNumber',
                                          label: 'isNumber',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/string/functions/shortestStringLength',
                                          label: 'shortestStringLength',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/string/functions/startsWith',
                                          label: 'startsWith',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/string/functions/wrap',
                                          label: 'wrap',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/string/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'style',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/style/functions/getBorderBox',
                                          label: 'getBorderBox',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/style/functions/getCascadedStyle',
                                          label: 'getCascadedStyle',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/style/functions/getComputedStyle',
                                          label: 'getComputedStyle',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/style/functions/getContainerOffsetToScrollInto',
                                          label: 'getContainerOffsetToScrollInto',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/style/functions/getPageOffset',
                                          label: 'getPageOffset',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/style/functions/getSize',
                                          label: 'getSize',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/style/functions/getViewportPageOffset',
                                          label: 'getViewportPageOffset',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/style/functions/isRightToLeft',
                                          label: 'isRightToLeft',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/style/functions/scrollIntoContainerView',
                                          label: 'scrollIntoContainerView',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/style/functions/setElementShown',
                                          label: 'setElementShown',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/style/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'svg_math',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Namespaces',
                                      items: [
                                        {
                                          type: 'category',
                                          label: 'TEST_ONLY',
                                          items: [
                                            {
                                              type: 'category',
                                              label: 'Variables',
                                              items: [
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_math/namespaces/TEST_ONLY/variables/XY_REGEX',
                                                  label: 'XY_REGEX',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_math/namespaces/TEST_ONLY/variables/XY_STYLE_REGEX',
                                                  label: 'XY_STYLE_REGEX',
                                                },
                                              ],
                                            },
                                          ],
                                          link: {
                                            type: 'doc',
                                            id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_math/namespaces/TEST_ONLY/index',
                                          },
                                        },
                                      ],
                                    },
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_math/functions/getDocumentScroll',
                                          label: 'getDocumentScroll',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_math/functions/getInjectionDivXY',
                                          label: 'getInjectionDivXY',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_math/functions/getRelativeXY',
                                          label: 'getRelativeXY',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_math/functions/getViewportBBox',
                                          label: 'getViewportBBox',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_math/functions/is3dSupported',
                                          label: 'is3dSupported',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_math/functions/screenToWsCoordinates',
                                          label: 'screenToWsCoordinates',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_math/functions/svgSize',
                                          label: 'svgSize',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_math/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'svg_paths',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_paths/functions/arc',
                                          label: 'arc',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_paths/functions/curve',
                                          label: 'curve',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_paths/functions/line',
                                          label: 'line',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_paths/functions/lineOnAxis',
                                          label: 'lineOnAxis',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_paths/functions/lineTo',
                                          label: 'lineTo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_paths/functions/moveBy',
                                          label: 'moveBy',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_paths/functions/moveTo',
                                          label: 'moveTo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_paths/functions/point',
                                          label: 'point',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/svg_paths/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'toolbox',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Namespaces',
                                      items: [
                                        {
                                          type: 'category',
                                          label: 'Position',
                                          items: [
                                            {
                                              type: 'category',
                                              label: 'Variables',
                                              items: [
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/namespaces/Position/variables/BOTTOM',
                                                  label: 'BOTTOM',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/namespaces/Position/variables/LEFT',
                                                  label: 'LEFT',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/namespaces/Position/variables/RIGHT',
                                                  label: 'RIGHT',
                                                },
                                                {
                                                  type: 'doc',
                                                  id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/namespaces/Position/variables/TOP',
                                                  label: 'TOP',
                                                },
                                              ],
                                            },
                                          ],
                                          link: {
                                            type: 'doc',
                                            id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/namespaces/Position/index',
                                          },
                                        },
                                      ],
                                    },
                                    {
                                      type: 'category',
                                      label: 'Type Aliases',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/BlockInfo',
                                          label: 'BlockInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/ButtonInfo',
                                          label: 'ButtonInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/ButtonOrLabelInfo',
                                          label: 'ButtonOrLabelInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/CategoryInfo',
                                          label: 'CategoryInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/DynamicCategoryInfo',
                                          label: 'DynamicCategoryInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/FlyoutDefinition',
                                          label: 'FlyoutDefinition',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/FlyoutItemInfo',
                                          label: 'FlyoutItemInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/FlyoutItemInfoArray',
                                          label: 'FlyoutItemInfoArray',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/LabelInfo',
                                          label: 'LabelInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/Position',
                                          label: 'Position',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/SeparatorInfo',
                                          label: 'SeparatorInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/StaticCategoryInfo',
                                          label: 'StaticCategoryInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/ToolboxDefinition',
                                          label: 'ToolboxDefinition',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/ToolboxInfo',
                                          label: 'ToolboxInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/type-aliases/ToolboxItemInfo',
                                          label: 'ToolboxItemInfo',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'category',
                                      label: 'Variables',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/ButtonInfo',
                                          label: 'ButtonInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/ButtonOrLabelInfo',
                                          label: 'ButtonOrLabelInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/CategoryInfo',
                                          label: 'CategoryInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/DynamicCategoryInfo',
                                          label: 'DynamicCategoryInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/FlyoutDefinition',
                                          label: 'FlyoutDefinition',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/FlyoutItemInfo',
                                          label: 'FlyoutItemInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/FlyoutItemInfoArray',
                                          label: 'FlyoutItemInfoArray',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/LabelInfo',
                                          label: 'LabelInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/SeparatorInfo',
                                          label: 'SeparatorInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/StaticCategoryInfo',
                                          label: 'StaticCategoryInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/ToolboxDefinition',
                                          label: 'ToolboxDefinition',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/ToolboxInfo',
                                          label: 'ToolboxInfo',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/variables/ToolboxItemInfo',
                                          label: 'ToolboxItemInfo',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/functions/convertFlyoutDefToJsonArray',
                                          label: 'convertFlyoutDefToJsonArray',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/functions/convertToolboxDefToJson',
                                          label: 'convertToolboxDefToJson',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/functions/hasCategories',
                                          label: 'hasCategories',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/functions/isCategoryCollapsible',
                                          label: 'isCategoryCollapsible',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/functions/parseToolboxTree',
                                          label: 'parseToolboxTree',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/toolbox/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'useragent',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Variables',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/ANDROID',
                                          label: 'ANDROID',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/CHROME',
                                          label: 'CHROME',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/EDGE',
                                          label: 'EDGE',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/GECKO',
                                          label: 'GECKO',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/IE',
                                          label: 'IE',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/IPAD',
                                          label: 'IPAD',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/IPHONE',
                                          label: 'IPHONE',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/IPOD',
                                          label: 'IPOD',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/JavaFx',
                                          label: 'JavaFx',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/MAC',
                                          label: 'MAC',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/MOBILE',
                                          label: 'MOBILE',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/raw',
                                          label: 'raw',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/TABLET',
                                          label: 'TABLET',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/variables/WEBKIT',
                                          label: 'WEBKIT',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/useragent/index',
                                  },
                                },
                                {
                                  type: 'category',
                                  label: 'xml',
                                  items: [
                                    {
                                      type: 'category',
                                      label: 'Variables',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/xml/variables/NAME_SPACE',
                                          label: 'NAME_SPACE',
                                        },
                                      ],
                                    },
                                    {
                                      type: 'category',
                                      label: 'Functions',
                                      items: [
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/xml/functions/createElement',
                                          label: 'createElement',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/xml/functions/createTextNode',
                                          label: 'createTextNode',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/xml/functions/domToText',
                                          label: 'domToText',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/xml/functions/getDocument',
                                          label: 'getDocument',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/xml/functions/setDocument',
                                          label: 'setDocument',
                                        },
                                        {
                                          type: 'doc',
                                          id: './pages/modules/blockly/blocks/blockly/utils/utils/xml/functions/textToDomDocument',
                                          label: 'textToDomDocument',
                                        },
                                      ],
                                    },
                                  ],
                                  link: {
                                    type: 'doc',
                                    id: './pages/modules/blockly/blocks/blockly/utils/utils/xml/index',
                                  },
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/utils/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'variables',
                          items: [
                            {
                              type: 'category',
                              label: 'Variables',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/variables/VAR_LETTER_OPTIONS',
                                  label: 'VAR_LETTER_OPTIONS',
                                },
                              ],
                            },
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/allDeveloperVariables',
                                  label: 'allDeveloperVariables',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/allUsedVarModels',
                                  label: 'allUsedVarModels',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/createVariableButtonHandler',
                                  label: 'createVariableButtonHandler',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/flyoutCategory',
                                  label: 'flyoutCategory',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/flyoutCategoryBlocks',
                                  label: 'flyoutCategoryBlocks',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/generateUniqueName',
                                  label: 'generateUniqueName',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/generateUniqueNameFromOptions',
                                  label: 'generateUniqueNameFromOptions',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/generateVariableFieldDom',
                                  label: 'generateVariableFieldDom',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/getAddedVariables',
                                  label: 'getAddedVariables',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/getOrCreateVariablePackage',
                                  label: 'getOrCreateVariablePackage',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/getVariable',
                                  label: 'getVariable',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/nameUsedWithAnyType',
                                  label: 'nameUsedWithAnyType',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/promptName',
                                  label: 'promptName',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables/functions/renameVariable',
                                  label: 'renameVariable',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/variables/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'variables_dynamic',
                          items: [
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables_dynamic/functions/flyoutCategory',
                                  label: 'flyoutCategory',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables_dynamic/functions/flyoutCategoryBlocks',
                                  label: 'flyoutCategoryBlocks',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables_dynamic/functions/onCreateVariableButtonClick_Colour',
                                  label: 'onCreateVariableButtonClick_Colour',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables_dynamic/functions/onCreateVariableButtonClick_Number',
                                  label: 'onCreateVariableButtonClick_Number',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/variables_dynamic/functions/onCreateVariableButtonClick_String',
                                  label: 'onCreateVariableButtonClick_String',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/variables_dynamic/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'widgetdiv',
                          items: [
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/widgetdiv/functions/createDom',
                                  label: 'createDom',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/widgetdiv/functions/getDiv',
                                  label: 'getDiv',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/widgetdiv/functions/hide',
                                  label: 'hide',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/widgetdiv/functions/hideIfOwner',
                                  label: 'hideIfOwner',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/widgetdiv/functions/isVisible',
                                  label: 'isVisible',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/widgetdiv/functions/positionWithAnchor',
                                  label: 'positionWithAnchor',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/widgetdiv/functions/show',
                                  label: 'show',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/widgetdiv/index',
                          },
                        },
                        {
                          type: 'category',
                          label: 'xml',
                          items: [
                            {
                              type: 'category',
                              label: 'Functions',
                              items: [
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/appendDomToWorkspace',
                                  label: 'appendDomToWorkspace',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/blockToDom',
                                  label: 'blockToDom',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/blockToDomWithXY',
                                  label: 'blockToDomWithXY',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/clearWorkspaceAndLoadFromXml',
                                  label: 'clearWorkspaceAndLoadFromXml',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/deleteNext',
                                  label: 'deleteNext',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/domToBlock',
                                  label: 'domToBlock',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/domToPrettyText',
                                  label: 'domToPrettyText',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/domToText',
                                  label: 'domToText',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/domToVariables',
                                  label: 'domToVariables',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/domToWorkspace',
                                  label: 'domToWorkspace',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/textToDom',
                                  label: 'textToDom',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/variablesToDom',
                                  label: 'variablesToDom',
                                },
                                {
                                  type: 'doc',
                                  id: './pages/modules/blockly/blocks/blockly/xml/functions/workspaceToDom',
                                  label: 'workspaceToDom',
                                },
                              ],
                            },
                          ],
                          link: {
                            type: 'doc',
                            id: './pages/modules/blockly/blocks/blockly/xml/index',
                          },
                        },
                      ],
                      link: { type: 'doc', id: './pages/modules/blockly/blocks/blockly/index' },
                    },
                  ],
                  link: { type: 'doc', id: './pages/modules/blockly/blocks/index' },
                },
                {
                  type: 'category',
                  label: 'constants',
                  items: [
                    {
                      type: 'category',
                      label: 'Variables',
                      items: [
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/constants/variables/categorical_vars',
                          label: 'categorical_vars',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/constants/variables/categorical_vars_alt',
                          label: 'categorical_vars_alt',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/constants/variables/categorical_vars_alt_anysubfirst',
                          label: 'categorical_vars_alt_anysubfirst',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/constants/variables/categorical_vars_alt_homelessfirst',
                          label: 'categorical_vars_alt_homelessfirst',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/constants/variables/quantitative_vars',
                          label: 'quantitative_vars',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/blockly/constants/variables/quantitative_vars_alt',
                          label: 'quantitative_vars_alt',
                        },
                      ],
                    },
                  ],
                  link: { type: 'doc', id: './pages/modules/blockly/constants/index' },
                },
              ],
            },
            {
              type: 'category',
              label: 'compiler',
              items: [
                {
                  type: 'category',
                  label: 'Functions',
                  items: [
                    {
                      type: 'doc',
                      id: './pages/modules/compiler/functions/default',
                      label: 'default',
                    },
                  ],
                },
              ],
              link: { type: 'doc', id: './pages/modules/compiler/index' },
            },
            {
              type: 'category',
              label: 'helper',
              items: [
                {
                  type: 'category',
                  label: 'functions',
                  items: [
                    {
                      type: 'category',
                      label: 'Functions',
                      items: [
                        {
                          type: 'doc',
                          id: './pages/modules/helper/functions/functions/useSwitchState',
                          label: 'useSwitchState',
                        },
                        {
                          type: 'doc',
                          id: './pages/modules/helper/functions/functions/useWindowDimensions',
                          label: 'useWindowDimensions',
                        },
                      ],
                    },
                  ],
                  link: { type: 'doc', id: './pages/modules/helper/functions/index' },
                },
              ],
            },
            {
              type: 'category',
              label: 'toolbar',
              items: [
                {
                  type: 'category',
                  label: 'Functions',
                  items: [
                    {
                      type: 'doc',
                      id: './pages/modules/toolbar/functions/default',
                      label: 'default',
                    },
                  ],
                },
              ],
              link: { type: 'doc', id: './pages/modules/toolbar/index' },
            },
            {
              type: 'category',
              label: 'workspace',
              items: [
                {
                  type: 'category',
                  label: 'Functions',
                  items: [
                    {
                      type: 'doc',
                      id: './pages/modules/workspace/functions/default',
                      label: 'default',
                    },
                  ],
                },
              ],
              link: { type: 'doc', id: './pages/modules/workspace/index' },
            },
          ],
        },
        {
          type: 'category',
          label: 'studio',
          items: [
            {
              type: 'category',
              label: 'Functions',
              items: [{ type: 'doc', id: './pages/studio/functions/default', label: 'default' }],
            },
          ],
          link: { type: 'doc', id: './pages/studio/index' },
        },
      ],
    },
    {
      type: 'category',
      label: 'reportWebVitals',
      items: [
        {
          type: 'category',
          label: 'Functions',
          items: [{ type: 'doc', id: './reportWebVitals/functions/default', label: 'default' }],
        },
      ],
      link: { type: 'doc', id: './reportWebVitals/index' },
    },
    { type: 'doc', id: './setupTests/index', label: 'setupTests' },
    {
      type: 'category',
      label: 'theme',
      items: [
        {
          type: 'category',
          label: 'Variables',
          items: [{ type: 'doc', id: './theme/variables/default', label: 'default' }],
        },
      ],
      link: { type: 'doc', id: './theme/index' },
    },
  ],
};
module.exports = typedocSidebar.items;
