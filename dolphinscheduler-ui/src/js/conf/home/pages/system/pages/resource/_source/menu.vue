<template>
  <div class="main-bottom">
    <div class="btn-container">
      <el-button size="mini" type="primary" @click="addRootMenu" icon="el-icon-plus" plain>
        {{$tUi('add')}}
      </el-button>
    </div>
    <div class="table-container">
      <el-table
        class="el-table-resource"
        :data="treeData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column
          prop="resName"
          :label="$t('system.resource_et.resName.name')"
          width="280">
        </el-table-column>
        <!--<el-table-column-->
        <!--prop="sortNum"-->
        <!--:label="$t('system.resource_et.sortNum.name')">-->
        <!--<template slot-scope="scope">-->
        <!--<el-input v-model="scope.row.sortNum" type="number" @blur="commitSortNum(scope.row)"/>-->
        <!--</template>-->
        <!--</el-table-column>-->
        <el-table-column
          prop="resCode"
          :label="$t('system.resource_et.resCode.name')"
          :formatter="tableTypeFormatter">
        </el-table-column>
        <el-table-column
          prop="resType"
          :label="$t('system.resource_et.type.name')"
          :formatter="tableTypeFormatter">
        </el-table-column>
        <el-table-column v-for="lang in langs"
                         :prop="lang" :key="lang"
                         :label="$t(`system.i18n_bi.${lang}`)"
        >
          <template slot-scope="scope">
            <el-input maxlength="30" v-model="scope.row[lang]" @blur="commitI18n(lang, scope.row)"/>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          :label="Ui( 'action')">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="addResourceFolder(scope.row.id)">{{$tResource('addSubMenu')}}
            </el-button>
            <el-button type="text" size="small" @click="updateResourceFolderName(scope.row)">{{$tUi('edit')}}
            </el-button>
            <el-button type="text" size="small" @click="removeResourceFolder(scope.row.id)">{{$tUi('delete')}}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog v-el-drag-dialog :title="dialogTitle" :visible.sync="dialogAddVisible" width="450px"
               @close="dialogAddVisible = false" class="gwi-dialog" center :append-to-body="true"
               :close-on-click-modal="false">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="$tResourceBi('label','folder_add')" name="f">
          <el-input type="text" maxlength="20" v-model="inputResName"
                    :placeholder="placeholderInput()"></el-input>
        </el-tab-pane>

        <el-tab-pane :label="$tResourceBi('label', 'res_add')" name="s">
          <select-resource-view ref="srv" v-model="selectedResourceId" style="width: 80%"/>
        </el-tab-pane>
      </el-tabs>
      <div class="dialog-footer" slot="footer">
        <el-button @click="dialogAddVisible = false">{{Ui( 'cancel')}}</el-button>
        <el-button type="primary" @click="addSourceOrFolder">{{Ui( 'submit')}}</el-button>
      </div>
    </el-dialog>


    <!-- 修改/编辑文件夹 --->
    <!--<el-dialog v-el-drag-dialog :title="dialogTitle" :visible.sync="dialogFormFolderVisible" width="450px"-->
    <!--@close="dialogClose" class="gwi-dialog" center :append-to-body="true"-->
    <!--:close-on-click-modal="isDetail">-->
    <!--<lang-input></lang-input>-->
    <!--<div class="dialog-footer" slot="footer">-->
    <!--<el-button @click="dialogFormFolderVisible = false">{{$t('取消')}}</el-button>-->
    <!--<el-button @click="submitDialog('formInfo')" type="primary" v-if="!isDetail">-->
    <!--{{$t('提交')}}-->
    <!--</el-button>-->
    <!--</div>-->
    <!--</el-dialog>-->

    <!--&lt;!&ndash; 添加修改 -&ndash;&gt;-->
    <!--<el-dialog v-el-drag-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" width="450px"-->
    <!--@close="dialogClose" class="gwi-dialog" center :append-to-body="true"-->
    <!--:close-on-click-modal="isDetail">-->

    <!--<add-or-update-resource ref="formInfo" :data-info="dialogFormInfo"-->
    <!--:editable="!isDetail"></add-or-update-resource>-->

    <!--<div class="dialog-footer" slot="footer">-->
    <!--<el-button @click="dialogClose">{{$t('取消')}}</el-button>-->
    <!--<el-button @click="submitDialog('formInfo')" type="primary" v-if="!isDetail">-->
    <!--{{$t('提交')}}-->
    <!--</el-button>-->
    <!--</div>-->
    <!--</el-dialog>-->
  </div>
</template>

<script>

  import RESOURCE_SHOW from "@/api/system/resource/resourceShow";

  const resourceShowApi = new RESOURCE_SHOW();

  import {RESOURCE_DEFINE, APP_ID} from '@/cfg/resource';

  import RESOURCE from "@/api/system/resource/resource";

  const resourceApi = new RESOURCE();
  import LIST_DICT from "@/api/system/common/listDict";

  const listDictApi = new LIST_DICT();


  import INTERNATIONAL from '@/api/system/common/international';

  const i18nApi = new INTERNATIONAL();


  // 子组件引用
  import AddOrUpdateResource from "../components/addOrUpdateResource";
  import LangInput from "../components/langInput";
  import SelectResourceView from '../components/selectResourceView';

  const findTreeNode = (treeData, nodeKey, childrenKey = 'children') => {
    let treeNode = treeData.find((node, index) => {
      return node.id === nodeKey;
    });
    if (treeNode) {
      return treeNode;
    } else {
      for (let i = 0; i < treeData.length; i++) {
        if (treeData[i][childrenKey]) {
          let treeNode2 = findTreeNode(treeData[i][childrenKey], nodeKey, childrenKey);
          if (treeNode2) {
            return treeNode2;
          }
        }
      }
    }
  }

  export default {
    name: "AuthorityMange",
    components: {AddOrUpdateResource, LangInput, SelectResourceView},
    props: ['langs'],
    data() {
      return {
        // 列表的数据
        tableData: [],
        treeData: [], // 树形的数据
        expandedKeys: [],
        treeProps: {
          label: "resName",
          children: "children",
        },
        dialogUpdateFlag: true, //true 编辑  false: 添加
        // 当前选择的树的节点
        selectedTree: null,
        // 列表分页
        pageInfo: {
          parentId: null,
          pageNum: 1,
          start: 0,
          pageSize: 10,
          total: 0,
          resCode: null,
          resName: null,
        },
        dialogFormInfo: {}, // 弹出框表单提交
        dialogFormVisible: false, // 是否显示和隐藏弹出框
        dialogFormFolderVisible: false,
        dialogTitle: '',
        isDetail: false, // 是否查看详情
        isClickTree: false, // 是否点击树查询

        dialogAddVisible: false,
        activeName: 'f',
        sourceData: [],
        parentId: -1,
        sourceIndex: null,
        inputResName: null,
        selectedResourceId: null,
        options: [],
      };
    },
    created() {
      this.listDict();
    },

    methods: {
      $tResourceBi(key, type = 'name') {
        return this.$t(`system.resource_bi.${key}.${type}`);
      },
      $tResource(key, type = 'name') {
        return this.$t(`system.resource_et.${key}.${type}`);
      },

      click() {
        this.createTree();
      },
      handleClick(e) {

      },
      commitSortNum(row) {
        if (row.sortNum < 0 || row.sortNum > 99) {
          this.$message.warning(this.$tResource('sortNum') + ' ' + this.$t('ui.validate.range', {min: 0, max: 99}))
        } else {
          let info = JSON.parse(JSON.stringify(row))
          resourceShowApi.updateResourceShow(info).then((res) => {
            console.log(res)
          }).catch(err => {
            console.log(err)
          });
        }
      },
      commitI18n(langType, rowData) {
        i18nApi.commit({
          appId: this.store.getters.curTempId,
          context: rowData[langType],
          i18nKey: rowData.resI18n,
          locale: langType
        });
      },
      listDict() {
        let params = {"typeCode": "resType", "appId": APP_ID}
        listDictApi.commit(params).then(res => {
          this.options = res;
        }).catch(body => {
          console.log(body)
        });
      },
      tableTypeFormatter(row, column, cellValue, index) {
        let opts = this.options;
        for (let i = 0; i < opts.length; i++) {
          if (opts[i].value == cellValue) {
            return opts[i].label;
          }
        }
        return cellValue;
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

      addRootMenu() {
        this.addResourceFolder(-1);
      },

      addResourceFolder(parentId, row) {
        if (parentId != -1) {
          // if (this.calcLevel(parentId, this.treeData, 1) > 2) {
          //   this.$message.error(this.$tResourceBi("msg", "levelUnder3"));
          //   return
          // }
        }
        this.parentId = parentId;
        this.dialogTitle = this.$t('system.resource_bi.addRootMenu.title');
        this.inputResName = null;
        this.selectedResourceId = null;
        this.activeName = 'f';
        this.dialogAddVisible = true;
        this.$nextTick(() => {
          this.$refs.srv.clear();
        })
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

      addSourceOrFolder() {
        console.log(this.inputResName, this.selectedResourceId, this.activeName)

        let datas = [];

        let pid = this.parentId, index = 1;

        if (pid == -1) {
          index = this.treeData.length + 1;
        } else {
          let res = this.findResource(this.treeData, pid);
          index = res.children ? res.children.length + 1 : 1;
        }

        if (this.activeName == 'f') {
          if (!this.inputResName) {
            this.$message.error(this.$tResourceBi('msg', 'invalid_params'));
            return
          }

          datas.push({parentId: pid, resName: this.inputResName, resType: 0, sortNum: index})
        } else {
          let selectArr = this.selectedResourceId;
          if (!selectArr || selectArr.length == 0) {
            this.$message.error(this.$tResourceBi('msg', 'invalid_params'));
            return;
          }

          selectArr.forEach(item => {
            let p = {parentId: pid, sortNum: index++};
            p = Object.assign(p, item);
            datas.push(p);
          })
        }

        resourceShowApi.addResourceShowList(datas).then((res) => {
          console.log("res====", res)
          if (res == 0) {
            this.$message.error(this.$tResourceBi('msg', 'operation_fail'))
          } else {
            this.dialogAddVisible = false;
            this.$message.success(this.$tResourceBi('msg', 'operation_success'))
            this.createTree();
          }
        }).catch(err => {
          this.$message.error(this.$tResourceBi('msg', 'operation_fail'))
        });
      },

      removeResourceFolder(id, parentId) {
        this.$confirm(this.$t('system.resource_bi.deleteFolder.msg'), this.Ui('tips'), {
          confirmButtonText: this.Ui('ok'),
          cancelButtonText: this.Ui('cancel'),
          type: 'warning'
        }).then(() => {
          resourceShowApi.removeResourceShow(id).then((res) => {
            console.log("res====", res)
            if (res == 0) {
              this.$message.error(this.$tResourceBi('msg', 'operation_fail'))
            } else {
              this.$message.success(this.$tResourceBi('msg', 'operation_success'))
              this.createTree();
            }
          }).catch(err => {
            this.$message.error(this.$tResourceBi('msg', 'operation_fail'))
          });
        }).catch(() => {
        });
      },
      updateResourceFolderName(folderData) {
        this.$prompt(this.$t('system.resource_bi.addInput.title'), this.Ui('tips'), {
          confirmButtonText: this.Ui('ok'),
          cancelButtonText: this.Ui('cancel'),
          // inputPattern: /{3,17}?/,
          inputValue: folderData.resName,
          // inputErrorMessage: '格式不正确'
        }).then(({value}) => {
          folderData = JSON.parse(JSON.stringify(folderData));
          folderData.resName = value;

          resourceShowApi.updateResourceShow(folderData).then((res) => {
            console.log("res====", res)
            if (res == 0) {
              this.$message.error(this.$tResourceBi('msg', 'operation_fail'))
            } else {
              this.$message.success(this.$tResourceBi('msg', 'operation_success'))
              this.createTree();
            }
          }).catch(err => {
            this.$message.error(this.$tResourceBi('msg', 'operation_fail'))
          });
        }).catch((e) => {
        });
      },

      systemTransfer(row, column, cellValue, index) {
        if (cellValue != "") {
          return JSON.parse(cellValue).system;
        }
        return cellValue;
      },

      // 生成树
      async createTree() {
        resourceShowApi.listResourceTree(null, this.langs).then(res => {
          this.treeData = res || [];
        }).catch(err => {
          this.$message.error("" + err.msg)
        })
      }

    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/max-inbodyTree-style.css";

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

  i.action {
    margin-left: 15px;
    font-size: 18px;
    cursor: pointer;
    &.el-icon-folder-add {
      color: #409EFF
    }
    &.el-icon-document-add {
      color: #909399
    }
    &.el-icon-edit {
      color: #67C23A
    }
    &.el-icon-close {
      color: #F56C6C
    }
  }

</style>
