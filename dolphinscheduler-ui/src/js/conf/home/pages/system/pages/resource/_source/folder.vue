<!-- 菜单管理 -->
<template>
  <div class="main-bottom">
    <!--<div class="main-top">-->
    <!--<el-tabs v-model="channelType">-->
    <!--<el-tab-pane label="PC端" name="0"></el-tab-pane>-->
    <!--&lt;!&ndash;<el-tab-pane label="小程序" name="1"></el-tab-pane>&ndash;&gt;-->
    <!--</el-tabs>-->
    <!--</div>-->
    <div class="menu-ts"><i class="el-icon-warning-outline"></i>{{$t('system.resource_bi.dragTips.name')}}</div>
    <div class="table-container" style="font-size:13px;">
      <el-tree
        :data="treeData"
        node-key="id"
        :props="treeProps"
        :highlight-current="true"
        :expand-on-click-node="false"
        :text="$t('ui.table.loading')"
        @node-click="treeClick"
        :default-expanded-keys="expandedKeys"
        @node-collapse="nodeCollapse"
        @node-expand="nodeExpand"

        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
      >
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <i v-if="node.isLeaf" style="color:rgb(73,156,214)" :class="leafClass(data)"/>
                    <span>{{ node.label + ':(' + data.resCode +')'}}</span>
                  <!--<span style="margin-left: 10px;">-->
                  <!--<el-button v-if="data.parentId != 0 && (data.hide == undefined || !data.hide)" type="text"-->
                  <!--size="mini" @click="() => doHide(data)">隐藏</el-button>-->
                  <!--<el-button v-else-if="data.parentId != 0 && data.hide != undefined && data.hide" type="text"-->
                  <!--size="mini" @click="() => doShow(data)">显示</el-button>-->

                  <!--<el-button v-if="data.parentId != 0 && !data.show" type="text" size="mini"-->
                  <!--@click="() => toAdd(data)">添加子菜单</el-button>-->
                  <!--<el-button v-if="data.resType == undefined" type="text" size="mini"-->
                  <!--@click="() => toModify(data)">修改</el-button>-->
                  <!--<el-button v-if="data.resType == undefined" type="text" size="mini"-->
                  <!--@click="() => del(node, data)">删除</el-button>-->
                  <!--</span>-->
                  <!--<i style="margin-left:10px; color:#f48518;" class="el-icon-thumb"></i>-->
                </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
  import {TEMPLATE_ID, VIEW, BUTTON, API_AUTH} from '@/cfg/resource';
  import RESOURCE_SHOW from "@/api/system/resource/resourceShow";

  const resourceShow = new RESOURCE_SHOW();

  export default {
    name: "res-folder",
    data() {
      return {
        channelType: '0',
        treeData: [], // 树形的数据
        expandedKeys: [],
        recordKeys: [],
        treeProps: {
          label: "resName",
          children: "children",
        },
        // 当前选择的树的节点
        selectedTree: null,
        // 修改层级
        selectedRow: {},
      }
    },

    mounted() {

    },

    methods: {
      $tResource(key, type = 'name') {
        return this.$t(`system.resource_et.${key}.${type}`);
      },

      $tResourceBi(key, type = 'name') {
        return this.$t(`system.resource_bi.${key}.${type}`);
      },

      leafClass (data) {
        if (data.resType === VIEW) {
            return 'el-icon-menu';
        } else if (data.resType === BUTTON) {
            return 'el-icon-edit-outline';
        } else if (data.resType === API_AUTH) {
            return 'el-icon-platform-eleme';
        } else {
            return '';
        }
      },

      click() {
        this.createTree();
      },
      // 生成树
      async createTree() {
        resourceShow.listResourceTree().then(res => {
          this.treeData = res;
          this.expandedKeys = this.recordKeys;
        }).catch(err => {
          this.$message.error("" + err.msg)
        })
      },
      // 点击树
      treeClick(row) {
        console.log(row);
        this.selectedTree = row;
      },
      nodeCollapse(data, node, obj) {
        this.recordKeys = this.filterKey(data, this.recordKeys);
        console.log(this.recordKeys)
      },
      nodeExpand(data, node, obj) {
        this.recordKeys.push(data.id)
      },
      filterKey(data, keys) {
        keys = keys.filter(id => {
          return id != data.id;
        })
        data.children.forEach(child => {
          if (child.children) {
            keys = this.filterKey(child, keys)
          }
        })
        return keys;
      },
      handleDragStart(node, ev) {
        console.log('drag start', node);
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.resName);
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.resName);
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('tree drag over: ', dropNode.resName);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('tree drag end: ', dropNode && dropNode.resName, dropType);
      },
      findResource(data, id) {
        if (data && data.length > 0) {
          let levelQueue = [].concat(data);

          let res;
          while (levelQueue.length > 0) {
            res = levelQueue.shift();
            if (res.id == id) {
              return res;
            }
            if (res.children && res.children.length > 0) {
              levelQueue.push(...res.children)
            }
          }
        }
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('====拖动完成====');
        console.log("子：", draggingNode.data.resName);
        console.log("父：", dropNode.data.resName);
        console.log(dropType, '####', draggingNode, '####', dropNode);
        console.log('====拖动完成====');
        let parentId = '', sortId = null;
        if (dropType == 'inner') {
          let node = dropNode.data;
          parentId = node.id;
          if (node.children && node.children.length > 1) {
            sortId = node.children[node.children.length - 2].id;
          }
        } else {
          parentId = dropNode.data.parentId
          if (dropType == 'after') {
            sortId = dropNode.data.id;
          } else {
            let res = this.findResource(this.treeData, parentId);
            let children = res ? res.children : this.treeData;
            let list = children.filter(item => {
              return item.id != draggingNode.data.id;
            })
            let sortNode = null;
            if (list[0].id != dropNode.data.id) {
              for (let i = 1; i < list.length; i++) {
                if (list[i].id == dropNode.data.id) {
                  sortNode = list[i - 1];
                  break;
                }
              }
            }
            if (sortNode != null) {
              sortId = sortNode.id;
            }
          }
        }
        let res = this.findResource(this.treeData, sortId);
        console.log("sortName....", res ? res.resName : '--')
        let param = {
          "id": draggingNode.data.id,
          "parentId": parentId,
          "sortId": sortId
        }
        resourceShow.toggleResourceShow(param).then(res => {
          console.log("res.....", res)
          if (res > 0) {
            this.$message.success(this.$tResourceBi('msg', 'operation_success'))
            this.createTree();
          } else {
            this.$message.success(this.$tResourceBi('msg', 'operation_fail'))
          }
        }).catch(err => {
          this.$message.error(this.$tResourceBi('msg', 'operation_fail'))
        })
      },
      allowDrop(draggingNode, dropNode, type) {
        // let level = this.calcLevel(dropNode.data.id, this.treeData, 1);
        // let subDeep = this.calcLevel(null, draggingNode.data, 1)
        // let total = level + subDeep;
        // let allowDrop = type == 'inner' ? (total <= 4) : (total - 1 <= 4);
        // console.log("allowDrop>>>", allowDrop, total)
        return true;
      },
      // 判断节点是否可以拖动
      allowDrag(draggingNode) {
        console.log("判断节点是否可以拖动-拖动的节点：", draggingNode.data.resName)
        let bool = true;
        if (!draggingNode.data.resName.indexOf('智能运营中台') === -1 || draggingNode.data.parentId == 0 || draggingNode.data.parentId == '1102536145394200576') {
          bool = false;
        }
        return bool;
      },
      calcLevel(id, data, level = 1) {
        if (data.length == 0) return level;
        let arr = [].concat(data);
        let subArr = [];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id == id) {
            return level;
          } else {
            if (arr[i].children) {
              subArr.push(...arr[i].children)
            }
          }
        }
        if (subArr.length == 0) return level;
        return this.calcLevel(id, subArr, level + 1);
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/max-inbodyTree-style.css";
  @import "../../../assets/css/menuManage.css";

  .main-top {
    padding: 0px !important;
  }

  .gwi-dialog {

    .el-dialog__title {
      color: #fff;
    }

    .el-input--mini {
      width: 80%;
    }

    .el-select--mini {
      width: 80%;
    }

    .el-textarea {
      width: 80%;
    }

  }

</style>
